package main

import (
	"fmt"
	"strconv"
	"strings"
)

type IPAdrr [4]byte

// Another approuch to get the same result but it uses append function
// func (ip IPAdrr) String() string {
// 	var ipAddr []string
//
// 	for _, val := range ip {
// 		turnedInt := strconv.Itoa(int(val))
// 		ipAddr = append(ipAddr, turnedInt)
// 	}
//
// 	return strings.Join(ipAddr, ".")
// }

func (ip IPAdrr) String() string {
	ipAddr := make([]string, len(ip))

	for i, val := range ip {
		ipAddr[i] = strconv.Itoa(int(val))
	}
	return strings.Join(ipAddr, ".")
}

func main() {
	hosts := map[string]IPAdrr{
		"loopback":  {127, 0, 0, 1},
		"googleDNS": {8, 8, 8, 8},
	}

	for name, ip := range hosts {
		fmt.Printf("%v: %v\n", name, ip)
	}
}
