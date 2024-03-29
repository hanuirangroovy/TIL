﻿using System;

namespace SwapByValue
{
    class MainApp
    {
        public static void Swap(int a, int b)
        {
            int temp = b;
            b = a;
            a = temp;
        }

        static void Main(string[] args)
        {
            int x = 3;
            int y = 4;

            Console.WriteLine($"x:{x}, y:{y}");
            Swap(x, y);

            Console.WriteLine($"x:{x}, y:{y}"); // Swap() 메소드 호출 후에도 x,y의 값은 변하지 않습니다.
        }
    }
}