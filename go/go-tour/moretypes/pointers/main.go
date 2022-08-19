package main

import "fmt"

func main() {
  i, j := 42, 2701

  p := &i // Set p to pointer the variable i 
  fmt.Println(*p) // read the variable p | i
  
  *p = 21 // Set new value of p | i
  fmt.Println(i)

  p = &j
  *p = *p / 37
  fmt.Println(j)
} 
