namespace StudentsRecordManagenentApp.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string? FullName { get; set; }
        public string? EmailAddress { get; set; }
        public string? City { get; set; }
        public DateTime CreateOn { get; set; }

            
    }
}
