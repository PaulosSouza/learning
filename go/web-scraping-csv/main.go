package main

import (
	"encoding/csv"
	"fmt"
	"log"
	"os"

	colly "github.com/gocolly/colly/v2"
)

func GetCustomersFromW3School(w *csv.Writer) {

}

func main() {
	fileName := "data.csv"
	file, err := os.Create(fileName)
	if err != nil {
		log.Fatalf("Could not create file, err: %q", err)
		return
	}

	defer file.Close()

	writer := csv.NewWriter(file)
	defer writer.Flush()

	collector := colly.NewCollector()

	collector.OnHTML("table#customers", func(e *colly.HTMLElement) {
		e.ForEach("tr", func(_ int, el *colly.HTMLElement) {
			writer.Write([]string{
				el.ChildText("td:nth-child(1)"),
				el.ChildText("td:nth-child(2)"),
				el.ChildText("td:nth-child(3)"),
			})
		})

		fmt.Println("Scrapping complete")
	})

	collector.Visit("https://www.w3schools.com/html/html_tables.asp")
}
