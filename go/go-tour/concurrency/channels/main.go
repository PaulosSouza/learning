package main

import "fmt"

func sum(s []int, c chan int) {
  fmt.Println(s)
	sum := 0

	for _, v := range s {
		sum += v
	}

	c <- sum
}

func main() {
	s := []int{7, 2, 8, -9, 4, 0}

	array_length := len(s)

	c := make(chan int)
	go sum(s[:array_length/2], c)
	go sum(s[array_length/2:], c)
	x, y := <-c, <-c

	fmt.Println(x, y, x+y)
}
