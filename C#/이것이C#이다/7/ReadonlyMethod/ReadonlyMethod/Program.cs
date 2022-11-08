using System;

namespace ReadonlyMethod
{
    struct ACSetting
    {
        public double currentInCelsius; // 현재 온도
        public double target; // 희망 온도

        public readonly double GetFahrenheit()
        {
            target = currentInCelsius * 1.8 + 32;
            return target; // target 반환
        }
    }

    class MainApp
    {
        static void Main(string[] args)
        {
            ACSetting acs;
            acs,currentInCelsius = 25;
            acs.target = 25;

            Console.WriteLine($"{acs.GetFahrenheit()}");
            Console.WriteLine($"{acs.target}"); // 오류 CS1604  읽기 전용인 'target'에는 할당할 수 없습니다.



        }
    }
}