using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using NetCore.Services.Config;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCore.Services.Data
{
    private const string _configPath =
        @"";
    public class CodeFirstDbContextFactory
        : IDesignTimeDbContextFactory<CodeFirstDbContext>
    {
        public CodeFirstDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<CodeFirstDbContext>();
            optionsBuilder.UseSqlServer(new DbConnector(_configPath));

            return new CodeFirstDbContext(optionsBuilder.Options);
        }
    }
}
