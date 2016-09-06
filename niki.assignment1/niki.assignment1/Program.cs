using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace niki.assignment1
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberOfStrings;
            string value;

            List<string> inputParameter = new List<string>();

            Console.WriteLine("Please enter number of Strings to be entered");
            numberOfStrings = Convert.ToInt32(Console.ReadLine(), CultureInfo.CurrentCulture);

            for (int index = 0; index < numberOfStrings; index++)
            {
                Console.Write(index + 1 + ")");
                value = Console.ReadLine();
                inputParameter.Add(value);
            }

            // Sort in acending order of string length and print
            foreach (var item in inputParameter.OrderBy(x => x.Length))
            {
                Console.WriteLine(item);
            }

            // To hold the Screen for view the output
            Console.ReadKey();
        }
    }
}
