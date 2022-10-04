// See https://aka.ms/new-console-template for more information
using System;
using System.Formats.Asn1;

namespace Overflow
{
    class MainApp
    {
        static void Main(string[] args)
        {
            uint a = uint.MaxValue; // uint의 최대값, 4294967295
            int b = int.MaxValue;

            Console.WriteLine(a);
            Console.WriteLine(b);

            a = a + 1;
            b = b + 1;

            Console.WriteLine(a);
            Console.WriteLine(b);
        }
    }
}
