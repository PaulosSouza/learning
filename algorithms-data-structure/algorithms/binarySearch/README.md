# Binary Search 

## Explanation
* Binary search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.
* The ideia of binary search is to use the information that the array is sorteda nd reduce the complexity to O(Log n)

## Illustration

![Binary Search Algorithm Illustration](./assets/binary_search.png)

## Algorithm (step by stey if exists)

### Step 1
Begin with the mid element of whole array as a search key.

### Step 2
If the valur of the search key is equal to the item then return an index of the search key

### Step 3
Or if the value of the search key is less than the item in the middle of the interval,
narrow the interval to the lower halft.

### Step 4
Otherwise, narrow it to the upper half.

### Step 5
Repeatedly check from the second point until the value is found or the interval is empty
