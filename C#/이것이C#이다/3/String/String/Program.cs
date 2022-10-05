// See https://aka.ms/new-console-template for more information

using System;

namespace String
{
    class MainApp
    {
        static void Main(string[] args)
        {
            string a = "안녕하세요?";
            string b = "하지애입니다.";

            Console.WriteLine(a);
            Console.WriteLine(b);

            // char c = "안"; // error CS0029: 암시적으로 'string' 형식을 'char' 형식으로 변환할 수 없습니다.
            // char d = '안녕'; // error CS1012: 문자 리터럴에 문자가 너무 많습니다.
            char e = '안';
            // string f = '안'; // error CS0029: 암시적으로 'char' 형식을 'string' 형식으로 변환할 수 없습니다.
            // string g = '안녕'; // error CS1012: 문자 리터럴에 문자가 너무 많습니다.
            string h = "안녕";

            Console.WriteLine(e);
            Console.WriteLine(h);

        }
    }
}
