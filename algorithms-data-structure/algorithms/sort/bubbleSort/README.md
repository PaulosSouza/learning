# Bubble Sort

## Explanation
* Simplest sorting algorithm
* It works by repeatedly swapping the adjacent elements if they are in the wrong order
* It is not suitable for large data sets as its average and worst-case time complexity is quite high

## Algorithm step-by-step

### Step 1
Starts with very first two elements, comparing them to check which one is greater<br>
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1<br>
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 <br>
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 <br>
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) It does not have change because 8 is greater than 5

### Step 2
Now, during second iteration it should like this:
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) <br>
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 <br>
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br>
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) <br>

### Step 3
Now, the array is already sorted, but our algorithm does not know if it is completed <br>
The algorithm needs one while pass without any swap to know it is sorted <br>
( 1 2 4 5 8 )
