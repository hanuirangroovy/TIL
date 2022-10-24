using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCore.Services.Config
{
    public class DbConnector
    {
        public DbConnector(string configPath)
        {
            var configBuilder = new ConfigurationBuilder();
            configBuilder.AddJsonFile(configPath, false);

            string connectionString = configBuilder.Build();
        }
    }
}
