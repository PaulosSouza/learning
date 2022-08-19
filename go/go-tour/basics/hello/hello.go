package main

import (
	"fmt"
	"math"
)

// how function works 
func add(x int, y int) int {
	return x + y
}

// one or more results
func swap(x, y string) (string, string) {
	return y, x
}

// naked func
// returned variables can be used within the function and can return
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

// declare of variables
var c, python, java bool
var i, j int = 1, 2

func initializeVariables() {
	var c, python, java = true, false, "no!"	
	fmt.Println(i, j, c, python, java)
}

func shortVariableDecarations() {
	var i, j int = 1, 2
	k := 3
	c, python, java := true, false, "no!"

	fmt.Println(i, j, k, c, python, java)
}

func defaultVariables() {
	var i int
	var j float64
	var b bool
	var s string

	fmt.Printf("%v %v %v %q\n", i, j, b, s)
}

func typeConversions() {
	var x, y int = 3, 4
	var f float64 = math.Sqrt(float64(x*x + y*y))
	var z uint = uint(f)
	fmt.Println(x, y, z)
}

func typeInference() {
	v := 42.13 + 0.51i
	fmt.Printf("v is of type %T\n", v)
}


const Pi = 3.14
func constants() {
	const World = "Disney"
	fmt.Println("Hello", World)
	fmt.Println("Happy", Pi, "day")
	
	const Truth = true
	fmt.Println("Go rules?", Truth)
}

func main() {
	constants()
}


