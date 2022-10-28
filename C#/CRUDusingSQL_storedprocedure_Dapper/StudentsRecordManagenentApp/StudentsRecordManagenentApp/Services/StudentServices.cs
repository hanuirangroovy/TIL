using Dapper;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Data.SqlClient;
using StudentsRecordManagenentApp.Models;
using System.Configuration;
using System.Data;
using System.Data.Common;

namespace StudentsRecordManagenentApp.Services
{
    public class StudentServices : IStudentService
    {
        private readonly IConfiguration _configuration;
        public StudentServices(IConfiguration configuration)
        {
            _configuration = configuration;
            ConnectionString = _configuration.GetConnectionString("DBConnection");
            providerName = "System.Data.SqlClient";
        }

        public string ConnectionString { get; }
        public string providerName { get; }
    
    public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(ConnectionString);
            }
        }

        public string InsertStudent(Student model)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                var student = dbConnection.Query<List<Student>>("InsertStudent", model, commandType: CommandType.StoredProcedure);
                var topRow = student.FirstOrDefault();
                dbConnection.Close();
            }
            return "";
        }
    
    }

    public interface IStudentService
    { 
        
    }
}
