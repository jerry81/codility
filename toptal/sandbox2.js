/* 
findWord(["P>E","E>R","R>U"]) // PERU
findWord(["I>N","A>I","P>A","S>P"]) // SPAIN


findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) // HUNGARY
findWord(["I>F", "W>I", "S>W", "F>T"]) // SWIFT
findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]) // PORTUGAL
findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) // SWITZERLAND
*/

function findWord2(arr) {
  let resultPool = [];
  let result = [];
  arr.forEach(x => {
    const [first, second] = x.split(">");
    if (resultPool.length == 0) {
      console.log("pushing zero");
      resultPool.push([first, second]);
    }
    let noHits = true;
    resultPool.forEach(y => {
      if (y.includes(first)) {
        console.log("hit", y, first);
        noHits = false;
        let zNoHits = true;
        resultPool.forEach(z => {
          if (z.includes(second)) {
            zNoHits = false;
            // arrange resultPool so that
          }
        });
        if (zNoHits) {
          // first exists but second does not
          // add second right after first
          const firstIndex = y.indexOf(first);
          const firstHalf = y.slice(0, firstIndex + 1);
          const secondHalf = y.slice(firstIndex + 1, y.length);
          y = [...firstHalf, second, ...secondHalf];
        }
      } else if (y.includes(second)) {
        noHits = false;
        // second exists but first does not
      }
    });
    if (noHits) {
      resultPool.push([first, second]);
    }
    console.log("resultpool is ", resultPool);
    const indexOf1 = result.indexOf(first);
    const indexOf2 = result.indexOf(second);
    console.log("result is ", result);
    console.log("first, second", first, second);
    if (indexOf1 < 0 && indexOf2 < 0) {
      result = [...result, first, second];
    }
    if (indexOf1 > -1 && indexOf2 > -1) {
    } else if (indexOf1 > -1) {
      // insert second after first
      const firstHalf = result.slice(0, indexOf1 + 1);
      const secondHalf = result.slice(indexOf1 + 1, result.length);
      result = [...firstHalf, second, ...secondHalf];
    } else if (indexOf2 > -1) {
      const firstHalf = result.slice(0, indexOf2);
      const secondHalf = result.slice(indexOf2, result.length);
      result = [...firstHalf, first, ...secondHalf];
      // insert first after second
    }
  });
  return result.join("");
}

// attempt 2
function findWord(arr) {
  let current = [];
  for (let i = 0; i < arr.length; i++) {
    const [f, s] = arr[i].split(">");
    if (!current.includes(f)) {
      current.push(f);
    }
    if (!current.includes(s)) {
      current.push(s);
    }
  }
  let compared = [];
  while (current.join("") !== compared.join("")) {
      compared = [...current]
    for (let i = 0; i < arr.length; i++) {
      const [f, s] = arr[i].split(">");
      const indexFirst = current.indexOf(f)
      const indexSecond = current.indexOf(s)
      if (indexFirst < indexSecond) {
          continue
      }
      current.splice(indexFirst, 1)
      current.splice(indexSecond, 0, f)

      // move index first right after index Second
      
    }
  }
  return current.join('')
}

console.log("test1", findWord(["P>E", "E>R", "R>U"]));
console.log("test2", findWord(["I>N", "A>I", "P>A", "S>P"]));
console.log("test3", findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]));
console.log("test4", findWord(["I>F", "W>I", "S>W", "F>T"]));
console.log(
  "test5",
  findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"])
);
console.log(
  "test 6",
  findWord([
    "W>I",
    "R>L",
    "T>Z",
    "Z>E",
    "S>W",
    "E>R",
    "L>A",
    "A>N",
    "N>D",
    "I>T"
  ])
);
// PERU
