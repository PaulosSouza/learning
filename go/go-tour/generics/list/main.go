package main

import "fmt"

type List[T any] struct {
	next *List[T]
	val  T
}

func (s *List[T]) PrintVal() {
	for s != nil {
		fmt.Println(s.val)
		s = s.next
	}
}

func main() {
	head := List[int] { val: 10 }
	secondNode := List[int] { val: 30, }

	head.next = &secondNode

	head.PrintVal()
}
