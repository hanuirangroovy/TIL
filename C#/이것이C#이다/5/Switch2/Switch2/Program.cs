// See https://aka.ms/new-console-template for more information
using System;

namespace Switch2
{
    class MainApp
    {

        static void Main(string[] args)
        {
            object obj = null;

            string s = Console.ReadLine();
            if (int.TryParse(s, out int out_i)) // TryParse()메소드는 변환의 성공 여부를 반환하기 때문에 현재의 코드흐름을 유지. 반환한 데이터는 두 번째 매개변수에 저장. out 키워드는 출력 전용 매개변수임을 나타내는 요도로 쓰임.
                obj = out_i;
            else if (float.TryParse(s, out float out_f))
                obj = out_f;
            else
                obj = s;

            switch (obj)
            {
                case int i:
                    Console.WriteLine($"{i}는 int 형식입니다.");
                    break;
                case float f:
                    Console.WriteLine($"{f}는 float 형식입니다.");
                    break;
                default:
                    Console.WriteLine($"{obj}은(는) 모르는 형식입니다.");
                    break;
            }
        }
    }
}

