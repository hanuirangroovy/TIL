// See https://aka.ms/new-console-template for more information
using System;
namespace Exer3
{
    class MainApp
    {
        static void Main(string[] args)
        {
            int a = 8 >> 1;
            int b = a >> 2;

            Console.WriteLine(a); // 4
            Console.WriteLine(b); // 1
        }
    }
}
