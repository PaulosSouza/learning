# Recursive Bubble Sort

## Explanation
* Recursive Bubble Sort has no performance/implementation advantages, but can be a goood
* question to check one's understanding of Bubble Sort and recursion.
* If we take a closer look at Bubble Sort algorithm, we can notice that in first pass, we move largest element to end (Assuming sorting in increasing order).
* In second pass, we move second largest element to second last position and so on

## Algorithm step-by-step

### Step 1
Base Case: If array size is 1, return

### Step 2
Do one Pass of normal Bubble Sort. This pass fixes last element of current subarray.

### Step 3
Recur for all elements except last of current subarray

