package main

import (
	"strings"
	"golang.org/x/tour/wc"
)

func WordCount(input string) map[string]int {
  words := strings.Fields(input)

  wordsCountable := make(map[string]int)

  for _, word := range words {
    
    count, isWordWithin := wordsCountable[word] 

    if (!isWordWithin) {
      wordsCountable[word] = 1
      continue;
    }
  
    wordsCountable[word] = count + 1
  }

  return wordsCountable
}

func main() {
  wc.Test(WordCount)
}
