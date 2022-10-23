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

#region ���ǳ���A
//Common.SetDataProtection(builder.Services, @"D:\DataProtector\", "NetCore", Enums.CryptoType.CngCbc);

//������               ���빰
//IUser �������̽��� UserService Ŭ������ �ޱ� ���� services�� ����ؾ� ��.
//builder.Services.AddScoped<DBFirstDbInitializer>();
//builder.Services.AddScoped<IUser, UserService>();
//builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();

builder.Services.AddHttpContextAccessor();

//DB��������, Migrations ������Ʈ ����
builder.Services.AddDbContext<CodeFirstDbContext>(options =>
            options.UseSqlServer(connectionString: builder.Configuration.GetConnectionString(name: "DefaultConnection"),
                                 sqlServerOptionsAction: mig => mig.MigrationsAssembly(assemblyName: "NetCore.V5.Services")));

//DB����������
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
