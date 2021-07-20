using System;

namespace GiraffeConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            // Variables

            //string characterName = "John";
            //int characterAge;
            //characterAge = 35;

            //Console.WriteLine("There once was a man named " + characterName);
            //Console.WriteLine("He was " + characterAge + " years old");

            //characterName = "Mike";
            //Console.WriteLine("He really liked the name " + characterName);
            //Console.WriteLine("But didn't like being " + characterAge);

            //string phrase = "Giraffe Academy";
            //char grade = 'A';
            //int age = 30;
            //double gpa = 3.2;
            //bool isMale = true;

            /* Working With Strings */
            //string phrase = "Giraffe Academy";

            //Console.WriteLine(phrase.ToUpper());
            //Console.WriteLine(phrase.ToLower());
            //Console.WriteLine(phrase.Contains("Academy"));
            //Console.WriteLine(phrase.IndexOf('y'));
            //Console.WriteLine(phrase.Length);
            //Console.WriteLine(phrase.Substring(8)); //Can be used like Console.WriteLine(phrase[8..]);
            //Console.WriteLine(phrase.Substring(8, 3));
            //Console.WriteLine(phrase.Substring(phrase.IndexOf("Academy"))); // Can be used like Console.WriteLine(phrase[phrase.IndexOf("Academy")..]);

            /* Working With Numbers */
            //Console.WriteLine(5 + 8);
            //Console.WriteLine(4 + 2 * 3);
            //Console.WriteLine((4 + 2) * 3);
            //Console.WriteLine(5 / 2);
            //Console.WriteLine(5 / 2.0);

            //Console.WriteLine("\n");

            //int num = 6;
            //num++;
            //Console.WriteLine(num);

            //Console.WriteLine(Math.Abs(-34));
            //Console.WriteLine(Math.Pow(2, 2));

            //Console.WriteLine(Math.Sqrt(36));

            /* Getting User Input */
            //Console.Write("Enter your name: ");
            //string name = Console.ReadLine();
            //Console.Write("Enter your age: ");
            //string age = Console.ReadLine();
            //Console.WriteLine("Hello, " + name + " you are " + age + " old");

            /* Building a Calculator */
            //Console.Write("Enter a number: ");
            //double fistNumber = Convert.ToDouble(Console.ReadLine());

            //Console.Write("Enter another number: ");
            //double secondNumber = Convert.ToDouble(Console.ReadLine());

            //Console.WriteLine("The result of the sum of those numbers are " + (fistNumber + secondNumber));

            //Console.ReadLine();

            /* Building a Mad Lib */
            //string color, pluralNoun, celebrity;

            //Console.Write("Enter a color: ");
            //color = Console.ReadLine();

            //Console.Write("Enter a plural noun: ");
            //pluralNoun = Console.ReadLine();

            //Console.Write("Enter a celebrity: ");
            //celebrity = Console.ReadLine();

            //Console.WriteLine("Roses are " + color);
            //Console.WriteLine(pluralNoun + " are blue");
            //Console.WriteLine("I Love " + celebrity);

            /* Arrays */
            //int[] luckyNumbers = { 4, 8, 15, 16, 23, 42 };

            //string[] friends = new string[3];
            //friends[0] = "Jim";
            //friends[1] = "Kelly";

            //Console.WriteLine(luckyNumbers[1]);
            //Console.WriteLine(friends[1]);

            /* Methods */
            //SayHi("Mike", 23);
            //SayHi("John", 41);
            //SayHi("Tom", 15);

            /* Return Statement */
            //int cubedNumber = cube(5);
            //Console.WriteLine(cubedNumber);

            /* If Statements */
            //bool isMale = true;
            //bool isTall = false;

            //if (isMale && isTall)
            //{
            //    Console.WriteLine("You are a tall male");
            //} else if (isMale && !isTall) {
            //    Console.WriteLine("You are a short male");
            //} else if (!isMale && isTall) {
            //    Console.WriteLine("You are not a male but you are a tall");
            //} else
            //{
            //    Console.WriteLine("You are not male or not tall");
            //}

            /* If Statements (comparing ) */
            //Console.WriteLine(GetMax(10, 20, 100));

            /* Building a better calculator */
            //Console.Write("Enter a number: ");
            //double num1 = Convert.ToDouble(Console.ReadLine());

            //Console.Write("Enter Operator: ");
            //string op = Console.ReadLine();

            //Console.Write("Enter a number: ");
            //double num2 = Convert.ToDouble(Console.ReadLine());

            //if (op == "+")
            //{
            //    Console.WriteLine(num1 + num2);
            //} else if (op == "-")
            //{
            //    Console.WriteLine(num1 - num2);
            //}
            //else if (op == "*")
            //{
            //    Console.WriteLine(num1 * num2);
            //}
            //else if (op == "/")
            //{
            //    Console.WriteLine(num1 / num2);
            //} else
            //{
            //    Console.WriteLine("Invalid Operator");
            //}

            /* Switch Statements */
            //Console.WriteLine(GetDay(4));

            /* While loops */
            /*int index = 6;

            do
            {
                Console.WriteLine(index);
                index++;
            } while (index <= 5) ;*/

            /* Building a Guessing Game */
            //string secretWord = "giraffe";
            //string guess = "";
            //int guessCount = 0;
            //int guessLimit = 3;
            //bool outOfGuesses = false;

            //do
            //{
            //    if (guessCount < guessLimit)
            //    {
            //        Console.Write("Enter guess: ");
            //        guess = Console.ReadLine();
            //        guessCount++;
            //    }
            //    else
            //    {
            //        outOfGuesses = true;
            //    }

            //} while (guess != secretWord && !outOfGuesses);

            //if (outOfGuesses)
            //{
            //    Console.WriteLine("You lose!");
            //} else
            //{
            //    Console.WriteLine("You Win!");
            //}

            /* For loops*/

            //int[] luckyNumbers = { 4, 8, 15, 16, 23, 42 };           

            //for (int i = 0; i < luckyNumbers.Length; i++)
            //{
            //    Console.WriteLine(luckyNumbers[i]);
            //}

            /* Building an exponent method */
            //Console.WriteLine(GetPow(3, 2));

            /* 2d Arrays */
            //int[,] numberGrid =
            //{
            //    { 1, 2 },
            //    { 3, 4 },
            //    { 5, 6 }
            //};

            //int[,] myArray = new int[2, 3];

            //Console.WriteLine(numberGrid[1, 1]);

            /* Comments */

            // This is a comment <- Single line comment
            //Console.Write("Comments are fun");

            /* Exception Handling */

            //try
            //{
            //    Console.Write("Enter a number: ");
            //    int num1 = Convert.ToInt32(Console.ReadLine());

            //    Console.Write("Enter another number: ");
            //    int num2 = Convert.ToInt32(Console.ReadLine());

            //    Console.WriteLine(num1 / num2);
            //} catch (DivideByZeroException e)
            //{
            //    Console.WriteLine(e.Message);
            //} catch (FormatException e)
            //{
            //    Console.WriteLine(e.Message);
            //} finally
            //{

            //}

            /* Classes & Objects */

            //Book book1 = new Book("Paulo");
            //book1.Title = "Harry Potter";
            //book1.Author = "JK Rowling";
            //book1.Pages = 400;

            //Book book2 = new Book("Pedro");
            //book2.Title = "Lord Of the Rings";
            //book2.Author = "Tolkein";
            //book2.Pages = 700;

            /* Constructors */

            //Book book1 = new Book("Harry Potter", "JK ROwling", 400);
            //Book book2 = new Book("Lord of the Rings", "Tolkein", 700);

            //Console.WriteLine(book1.Title);
            //Console.WriteLine(book2.Title);

            /* Object Methods */

            //Student student1 = new Student("Jim", "Business", 2.8);
            //Student student2 = new Student("Pam", "Art", 3.6);

            //Console.WriteLine(student1.HasHonors());
            //Console.WriteLine(student2.HasHonors());

            /* Getters & Setters */

            //Movie avengers = new Movie("The Avengers", "Joss Whedon", "PG-13");
            //Movie shrek = new Movie("Shrek", "Adam Adamson", "PG");

            //shrek.Rating = "Cat";
            //avengers.Rating = "Dog";

            //Console.WriteLine(avengers.Rating);

            /* Static Class Attributes */

            //Song holiday = new Song("Holiday", "Green Day", 200);
            //Song kashmir = new Song("Kashmir", "Led Zeppelin", 150);

            //Console.WriteLine(holiday.artist);
            //Console.WriteLine(kashmir.artist);
            //Console.WriteLine(Song.songCount);
            //Console.WriteLine(kashmir.getSongConunt());


            /* Static Methods & Classes */

            //Console.WriteLine(Math.Sqrt(144));
            //UsefulTools.SayHi("Paulo");

            /* Inheritance */

            Chef chef = new Chef();
            chef.MakeSpecialDish();

            ItalianChef italianChef = new ItalianChef();
            italianChef.MakeSpecialDish();

            Console.ReadLine();
        }

        static int GetPow(int baseNum, int powNum)
        {
            int result = 1;

            for (int i = 0; i < powNum; i++)
            {
                result = result * baseNum;
            }

            return result;
        }

        static string GetDay(int dayNum)
        {
            string dayName;

            switch (dayNum)
            {
                case 0:
                    dayName = "Sunday";
                    break;

                case 1:
                    dayName = "Monday";
                    break;

                case 2:
                    dayName = "Tuesday";
                    break;

                case 3:
                    dayName = "Wednesday";
                    break;

                case 4:
                    dayName = "Thursday";
                    break;

                case 5:
                    dayName = "Friday";
                    break;

                case 6:
                    dayName = "Saturday";
                    break;

                default:
                    dayName = "Invalid Day Number";
                    break;
            }

            return dayName;
        }

        static int GetMax(int num1, int num2, int num3)
        {
            int result;

            if (num1 >= num2 && num1 >= num3)
            {
                result = num1;
            } else if (num2 >= num1 && num2 >= num3)
            {
                result = num2;
            } else
            {
                result = num3;
            }

            return result;
        }

        static int cube(int num)
        {
            double result = Math.Pow(num, 3);

            return Convert.ToInt32(result);
        }

        static void SayHi(string name, int age)
        {
            Console.WriteLine("Hello " + name + " you are " + age);
        }
    }
}
  