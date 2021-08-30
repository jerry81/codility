console.log("Hello world");
/* 
numberOfCarryOperations(65, 55) // 2
65 + 55 =>
1st column: 5 + 5 = 0 (1 is carried)
2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
3rd column: 1 (carried) = 1
=> 120 (2 carry operations)

numberOfCarryOperations(123, 456) // 0
numberOfCarryOperations(555, 555) // 3
numberOfCarryOperations(900, 11) // 0
numberOfCarryOperations(145, 55) // 2
numberOfCarryOperations(0, 0) // 0
numberOfCarryOperations(1, 99999) // 5
numberOfCarryOperations(999045, 1055) // 5
numberOfCarryOperations(101, 809) // 1
numberOfCarryOperations(189, 209) // 1

*/

function numberOfCarryOperations(a, b) {
  const aS = a.toString();
  const bS = b.toString();
  let carryCount = 0;
  let carry = 0;
  let index = 0;
  while (true) {
    let dig = bS[bS.length - (index + 1)];
    let dig2 = aS[aS.length - (index + 1)];
    ++index;
    if (dig == undefined && dig2 == undefined) {
      return carryCount;
    } else {
      if (dig == undefined) dig = 0;
      if (dig2 == undefined) dig2 = 0;
      let sum = +dig + +dig2 + carry;
      if (sum >= 10) {
        carryCount++;
        carry = 1;
      } else {
        carry = 0;
      }
    }
  }
}

console.log("test1 ", numberOfCarryOperations(189, 209));

console.log("test2 ", numberOfCarryOperations(999045, 1055));

console.log('test 3', numberOfCarryOperations(555, 555) )

console.log(numberOfCarryOperations(123, 456)) // 0
console.log(numberOfCarryOperations(555, 555)) // 3
console.log(numberOfCarryOperations(900, 11)) // 0
console.log(numberOfCarryOperations(145, 55)) // 2
console.log(numberOfCarryOperations(0, 0)) // 0
console.log(numberOfCarryOperations(1, 99999)) // 5
console.log(numberOfCarryOperations(999045, 1055)) // 5
console.log(numberOfCarryOperations(101, 809) )// 1
console.log(numberOfCarryOperations(189, 209)) // 1