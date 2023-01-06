using System;

namespace Ex9_1
{
    class NameCard
    {
        public int Age { get; set; }
        public string Name { get; set; }
    }


    class MainApp
    {
        static void Main(string[] args)
        {
            NameCard MyCard = new NameCard();

            MyCard.Age = 32;
            MyCard.Name = "지애";

            Console.WriteLine("나이 : {0}", MyCard.Age);
            Console.WriteLine("이름 : {0}", MyCard.Name);
        }
    }
}
