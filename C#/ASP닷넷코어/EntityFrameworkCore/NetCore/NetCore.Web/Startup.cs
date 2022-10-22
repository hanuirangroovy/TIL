using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NetCore.Services.Data;
using NetCore.Services.Interfaces;
using NetCore.Services.Svcs;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace NetCore.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //껍데기                         내용물
            //IUser 인터페이스가 UserService 클래스를 받기 위해 services에 등록해야 함.
            services.AddScoped<IUser, UserService>();

            // DB접속정보, Migrations 프로젝트 지정
            services.AddDbContext<CodeFirstDbContext>(options =>
                options.UseSqlServer(connectionString:Configuration.GetConnectionString(name:"DefaultConnection"),
                sqlServerOptionsAction:mig => mig.MigrationsAssembly(assemblyName:"NetCore.Migrations")));

            //닷넷코어는 MVC패턴을 사용하기 위해 의존성주입을 써야하기 때문에
            //MVC를 서비스에 등록.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            //신원보증만
            app.UseAuthentication();

            //세션 지정
            //System.InvalidOperationException:
            //'Session has not been configured for this application or request.'
            app.UseSession();

            ////MVC 라우트 경로 지정
            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",
            //        template: "{controller=Home}/{action=Index}/{id?}");
            //});
        }
    }
}