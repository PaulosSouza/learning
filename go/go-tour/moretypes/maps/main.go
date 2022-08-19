package main

import "fmt"

type Vertex_Test struct {
	Lat, Long float64
}

func mapStrings() {
	var mappedStrings map[string]string
	mappedStrings = make(map[string]string)

	mappedStrings["hello"] = "world"

	fmt.Println(mappedStrings["hello"])
}

func main() {
  var m map[string]Vertex_Test
	m = make(map[string]Vertex_Test)
	m["Bell Labs"] = Vertex_Test{
		Lat:  40.68433,
		Long: -74.39967,
	}
	fmt.Println(m["Bell Labs"])

	mapStrings()
}
