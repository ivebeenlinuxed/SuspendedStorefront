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

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");


app.Run();