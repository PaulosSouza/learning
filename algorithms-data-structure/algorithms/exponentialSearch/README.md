# Exponential Search

## Explanation
- The ideia is to start with subarray size 1, compare its last element with x, then
- try size 2, then 4 and so on until last element of a subarray is not greater.
- Once we find an index i (after repeated doubling of i), we know that the element
- must be present between i/2 and i (Why i/2? because we could not find a greater value in previous iteration)

- Exponential Binary Search is particularly useful for unbounded searches, where size of array is infinite.
- It works better than Binary Search for bounded arrays, and also when the element to be searched is closeer to the first element

## Algorithm 

### Step 1
Find range where element is present

### Step 2
Do binary search in above found range

