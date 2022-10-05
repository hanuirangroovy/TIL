// See https://aka.ms/new-console-template for more information

using System;

namespace Constant
{
    class MainApp
    {
        static void Main(string[] args)
        {
            const int MAX_INT = 2147483647;
            const int MIN_INT = -2147483648;

            Console.WriteLine(MAX_INT);
            Console.WriteLine(MIN_INT);

            // const int a = 3;
            // a = 4; // 할당식의 왼쪽은 변수, 속성 또는 인덱서여야 합니다.
        }
    }
}