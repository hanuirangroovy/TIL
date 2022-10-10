// See https://aka.ms/new-console-template for more information
using System;

namespace While
{
    class MainApp
    {
        static void Main(string[] args)
        {
            int i = 10;

            while (i > 0)
            {
                Console.WriteLine($"i : {i--}");
            }
        }
    }
}
