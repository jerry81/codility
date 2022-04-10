# caterpillar method

- popular means of solving algorithmic tasks
- check elements in way that is reminscent of movements of a caterpillar 
- crawling through array - remember front and back of caterpillar and each step move one of them forward 
- e.g. - looking for continous subarray whose total is x
```
  starting with first item of array i
  front and back are i
  if i+1 < length or sum of the "caterpillar" > x of array move front to i+1 
  else back + 1
```
- code
```
  def catepillar(A, x): 
    n = len(A)
    front, total = 0, 0
    for back in xrange(n):
      while (front < n and total + A[front] <= x>>)
        total += A[front]
        front += 1
        if total == x:
          return True
        total -= A[back]
```
- complexity just O(n), not O(n^2)
      
```