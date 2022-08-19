package main

import (
	"fmt"
)

func Sqrt(x float64) float64 {
	z := float64(1)	

	fmt.Printf("Curent value %g %g", z, x)
	
	for z == x {
		z -= (z*z - x) / (2*z)

		fmt.Printf("Z value %g", z)
	} 

	return z
}

func main() {
	fmt.Println(Sqrt(2))
}
