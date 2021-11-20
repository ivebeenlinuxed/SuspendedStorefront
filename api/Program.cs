global using System;
global using System.Collections.Generic;
global using Microsoft.Extensions.Logging;
global using System.Linq;
global using System.Threading.Tasks;
global using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using SuspendedStorefront.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using SuspendedStorefront.Services;
using SuspendedStorefront.Services.Implementations;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(builder.Configuration)
            .CreateLogger();

builder.Host.UseSerilog();

// Add services to the container.
builder.Services.AddScoped<ICharityService, CharityService>();
builder.Services.AddScoped<ICustomerService, CustomerService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<ISubscriptionService, SubscriptionService>();
builder.Services.AddControllers();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.Authority = "https://ivebeenlinuxed.eu.auth0.com/";
    options.Audience = "https://api.mtk.yottaops.io";
});

builder.Services.AddDbContext<StoreDbContext>(options =>
{
    string connectString = builder.Configuration.GetConnectionString("StoreDbContext");
    options.UseMySql(connectString, ServerVersion.AutoDetect(connectString), opt => {});
});

builder.Services.AddSwaggerGen(c =>
{
	c.SwaggerDoc("v1", new OpenApiInfo { 
		Title = "SuspendedStorefront API", 
		Version = "v1",
		Description ="Description for the API goes here.",
		Contact = new OpenApiContact
		{
			Name = "Will Tinsdeall",
			Email = string.Empty,
			Url = new Uri("https://www.yottaops.io/"),
		},
	});
});

builder.Services.AddCors(options =>
    {
        options.AddDefaultPolicy(cors_build =>
        {
            cors_build.AllowAnyHeader().AllowAnyMethod().AllowCredentials().SetIsOriginAllowed(origin => true);
        });
    });


var app = builder.Build();
using (IServiceScope scope = app.Services.CreateScope()) {
    scope.ServiceProvider.GetRequiredService<StoreDbContext>().Database.Migrate();
}


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

// Enable middleware to serve generated Swagger as a JSON endpoint.
app.UseSwagger();

// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
// specifying the Swagger JSON endpoint.
app.UseSwaggerUI(c =>
{
	c.SwaggerEndpoint("/swagger/v1/swagger.json", "SuspendedStorefront API V1");

	// To serve SwaggerUI at application's root page, set the RoutePrefix property to an empty string.
	c.RoutePrefix = string.Empty;
});


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");


app.Run();
