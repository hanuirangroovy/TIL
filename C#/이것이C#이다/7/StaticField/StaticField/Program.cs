using System;
using System.Security.Cryptography.X509Certificates;

class Global
{
    public static int Count = 0;
}

class classA
{
    public classA()
    {
        Global.Count++;
    }
}

class classB
{
    public classB()
    {
        Global.Count++;
    }
}

class MainApp
{
    static void Main()
    {
        Console.WriteLine($"Global.Count : {Global.Count}");

        new classA();
        new classA();
        new classB();
        new classB();

        Console.WriteLine($"Global.Count : {Global.Count}");
    }
}