package main

import (
	"fmt"

	colly "github.com/gocolly/colly/v2"
)

func main() {
  collector := colly.NewCollector(
    colly.AllowedDomains("en.wikipedia.org"),
  )

  collector.OnHTML(".mw-parser-output", func(e *colly.HTMLElement) {
    links := e.ChildAttr("a", "href")
    fmt.Println(links)
  })

  collector.Visit("https://en.wikipedia.org/wiki/Web_scraping")
}
