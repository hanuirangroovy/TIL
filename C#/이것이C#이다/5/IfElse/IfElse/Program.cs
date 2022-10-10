// See https://aka.ms/new-console-template for more information
using System;

namespace IfElse
{
    class MainApp
    {
        static void Main(string[] args)
        {
            Console.Write("숫자를 입력하세요. : ");

            string input = Console.ReadLine(); // Console.ReadLine()은 사용자로부터 문자열을 입력받아 그 결과를 반환하는 기능을 합니다.
            int number = Int32.Parse(input);

            if (number < 0)
                Console.WriteLine("음수");
            else if (number > 0)
                Console.WriteLine("양수");
            else
                Console.WriteLine("0");

            if (number % 2 == 0)
                Console.WriteLine("짝수");
            else
                Console.WriteLine("홀수");
        }
    }
}
