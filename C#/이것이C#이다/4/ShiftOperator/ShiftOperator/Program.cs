﻿// See https://aka.ms/new-console-template for more information
using System;

namespace ShiftOperator
{
    class MainApp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Testing <<...");

            int a = 1;
            Console.WriteLine("a        : {0:D5} (0X{0:X8})", a); ; // 1바이트(8비트)로 나타낼 수 있는 수는 256가지입니다. 따라서 8자리의 16진수면 int 형식이 표현하는 모든 수를 나타낼 수 있습니다.
            Console.WriteLine("a << 1   : {0:D5} (0X{0:X8})", a << 1); ;
            Console.WriteLine("a << 2   : {0:D5} (0X{0:X8})", a << 2); ;
            Console.WriteLine("a << 5   : {0:D5} (0X{0:X8})", a << 5); ;

            Console.WriteLine("Testing >>...");

            int b = 255;
            Console.WriteLine("b        : {0:D5} (0X{0:X8})", b); ;
            Console.WriteLine("b >> 1   : {0:D5} (0X{0:X8})", b >> 1); ;
            Console.WriteLine("b >> 2   : {0:D5} (0X{0:X8})", b >> 2); ;
            Console.WriteLine("b >> 5   : {0:D5} (0X{0:X8})", b >> 5); ;

            int c = -255;
            Console.WriteLine("c        : {0:D5} (0X{0:X8})", c); ;
            Console.WriteLine("c >> 1   : {0:D5} (0X{0:X8})", c >> 1); ;
            Console.WriteLine("c >> 2   : {0:D5} (0X{0:X8})", c >> 2); ;
            Console.WriteLine("c >> 5   : {0:D5} (0X{0:X8})", c >> 5); ;
        }
    }
}