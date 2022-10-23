using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NetCore.Services.Interfaces;
using NetCore.Services.Svcs;
using static Microsoft.AspNetCore.Razor.Language.TagHelperMetadata;
using System;
using NetCore.Services.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

#region 강의내용A
//Common.SetDataProtection(builder.Services, @"D:\DataProtector\", "NetCore", Enums.CryptoType.CngCbc);

//껍데기               내용물
//IUser 인터페이스가 UserService 클래스를 받기 위해 services에 등록해야 함.
//builder.Services.AddScoped<DBFirstDbInitializer>();
//builder.Services.AddScoped<IUser, UserService>();
//builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();

builder.Services.AddHttpContextAccessor();

//DB접속정보, Migrations 프로젝트 지정
builder.Services.AddDbContext<CodeFirstDbContext>(options =>
            options.UseSqlServer(connectionString: builder.Configuration.GetConnectionString(name: "DefaultConnection"),
                                 sqlServerOptionsAction: mig => mig.MigrationsAssembly(assemblyName: "NetCore.V5.Services")));

//DB접속정보만
//builder.Services.AddDbContext<DBFirstDbContext>(options =>
//            options.UseSqlServer(connectionString: builder.Configuration.GetConnectionString(name: "DBFirstDBConnection")));

//Logging
builder.Services.AddLogging(logBuilder =>
{
    logBuilder.AddConfiguration(builder.Configuration.GetSection(key: "Logging"));
    logBuilder.AddConsole();
    logBuilder.AddDebug();
});
#endregion
builder.Services.AddControllersWithViews();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
