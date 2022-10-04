// See https://aka.ms/new-console-template for more information

using System;

namespace SignedUnsigned
{
    class MainApp
    {
        static void Main(string[] args)
        {
            byte a = 255;
            sbyte b = (sbyte)a; // (sbyte는 변수를 sbyte 형식으로 변환하는 연산자)

            Console.WriteLine(a);
            Console.WriteLine(b);
        }
    }
}