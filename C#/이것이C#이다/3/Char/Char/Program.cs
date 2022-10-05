// See https://aka.ms/new-console-template for more information

using System;

namespace Char
{ 
    class MainApp
    { 
        static void Main(string[] args)
        { 
            char a = '안';
            char b = '녕';
            char c = '하';
            char d = '세';
            char e = '요';

            Console.Write(a); // Console.Write() 메소드는 데이터 출력 후 줄을 바꾸지 않습니다.
            Console.Write(b);
            Console.Write(c);
            Console.Write(d);
            Console.Write(e);
            Console.WriteLine(); // Console.WriteLine() 메소드를 이용해서 데이터 출력 후 줄을 바꿉니다.
        }
    }
}
