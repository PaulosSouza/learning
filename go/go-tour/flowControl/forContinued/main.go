package main

import "fmt"

// Init and post statements are optional
func main() {
	sum := 1

	for ; sum < 1000; {
		fmt.Println(sum)
		sum += sum
	}

	fmt.Printf("The result is %v", sum)
}
