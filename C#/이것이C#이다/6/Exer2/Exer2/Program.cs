using System;

namespace Ex6_2
{
    class MainApp
    {
        public static void Main()
        {
            double mean = 0;

            mean = Mean(1, 2, 3, 4, 5, mean);

            Console.WriteLine("평균 : {0}", mean);
        }

        public static double Mean(
            double a, double b, double c, double d, double e, double mean)
        {
            return mean = (a + b + c + d + e) / 5;
        }
    }
}