// See https://aka.ms/new-console-template for more information
using System;

namespace InfiniteFor
{
    class MainApp
    {
        static void Main(string[] args)
        {
            int i = 0;
            for (; ; )
                Console.WriteLine(i++);
        }
    }
}

