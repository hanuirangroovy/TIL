// See https://aka.ms/new-console-template for more information
using System;
using System.Globalization;

namespace Exer3
{
    class MainApp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("3-1 while문 1번");
            int a = 0;
            int b = 0;

            while (a < 5)
            {
                while (b < a + 1)
                {
                    Console.WriteLine("*");
                    b++;
                }
                Console.WriteLine();
                a++;
                b = 0;
            }

            Console.WriteLine("3-1 while문 2번");
            int c = 0;
            int d = 5;

            while (c < 5)
            {
                while (d > c)
                {
                    Console.WriteLine("*");
                    d--;
                }
                Console.WriteLine();
                c++;
                d = 5;
            }

            Console.WriteLine("3-1 do while문 1번");
            int e = 0;
            int f = 0;

            do
            {
                do
                {
                    Console.WriteLine("*");
                    f++;
                }
                while (f < e + 1);

                Console.WriteLine();
                e++;
                f = 0;
            }
            while (e < 5);


            Console.WriteLine("3-1 do while문 2번");
            int g = 0;
            int h = 5;

            do
            {
                do
                {
                    Console.WriteLine("*");
                    h--;
                }
                while (h > g);

                Console.WriteLine();
                g++;
                h = 5;
            }
            while (g < 5);
        }
    }
}

