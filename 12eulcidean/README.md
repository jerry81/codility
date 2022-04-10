# euclidean algorithm notes

- one of the oldest algorithms in common use 
- computes gcd of 2 positive integers 
- types
  - by subtraction
    - recursively subtract smaller from larger
```
  def gcd(a,b): 
    if a == b: # end case
      return a
    if a > b:
      gcd(a - b, b) # recursion
    else:
      gcd(a, b-a) # recursion
```
    - complexity - O(n) (worst case)
  - by division
    - recursively modulo the two inputs until modulo 0 
```
  def gcd(a,b):
    if a % b == 0:
      return b
    else:
      return gcd(b, a % b)
```
    - complexity O(log(a+b))
  - divide and conquer binary euclidean 
    - uses subtraction, binary representation, shifting, parity testing
      - where binary representation is representing the integers as binary
      - shifting refers to multiplying and dividing by 2
      - go deeper into this some other day