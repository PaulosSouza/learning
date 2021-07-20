using System;
using System.Collections.Generic;
using System.Text;

namespace GiraffeConsole
{
    class Book
    {
        public string Title;
        public string Author;
        public int Pages;

        public Book() { }

        public Book(string aTitle, string aAuthor, int aPages)
        {
            Title = aTitle;
            Author = aAuthor;
            Pages = aPages;
        }
    }
}
