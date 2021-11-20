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
using System.Text.Json.Serialization;
using System.Security.Claims;
using Newtonsoft.Json.Linq;

var builder = WebApplication.CreateBuilder(args);

Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(builder.Configuration)
            .CreateLogger();

builder.Host.UseSerilog();

// Add services to the container.
builder.Services.AddScoped<ICharityService, CharityService>();
builder.Services.AddScoped<ICustomerService, CustomerService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IOpenIDService, OpenIDService>();
builder.Services.AddScoped<ISubscriptionService, SubscriptionService>();
builder.Services.AddControllers()
        .AddJsonOptions(
            options => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles
        );

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.Authority = "https://ivebeenlinuxed.eu.auth0.com/";
    options.Audience = "https://api.mtc.yottaops.io";
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


app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.Use(async (context, next) =>
{
    using (IServiceScope scope = app.Services.CreateScope())
    {
        if (context.Request.Headers.ContainsKey("Authorization")) {
            string userID = context.User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
            ICustomerService userService = scope.ServiceProvider.GetRequiredService<ICustomerService>();
            if (await userService.GetByLoginIDAsync(userID) == null)
            {
                IOpenIDService openID = scope.ServiceProvider.GetRequiredService<IOpenIDService>();
                JObject profile = (await openID.GetProfileAsync(
                        context.Request.Headers.Authorization.ToString().Replace("Bearer ", ""),
                        "https://ivebeenlinuxed.eu.auth0.com/userinfo"));

                Customer c = new Customer()
                {
                    Name = profile["nickname"].ToString(),
                    PictureURL = profile["picture"].ToString(),
                    AuthID = userID
                };
                await userService.AddCustomerAsync(c);
            }
        }
    }
    await next.Invoke();
    
});

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
