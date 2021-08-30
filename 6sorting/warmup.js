function mergeSort(A) {
  let pool = [];
  for (let i = 0; i < A.length / 2; i++) {
    let j = i * 2;
    let k = j + 1;
    if (A[j] < A[k]) {
      pool.push([A[j], A[k]]);
    } else {
      pool.push([A[k], A[j]]);
    }
  }
  while (pool.length > 1) {
    let newPool = [];
    for (let l = 0; l < pool.length / 2; l++) {
      let l2 = l * 2;
      let l3 = l2 + 1;
      
      let tA = pool[l2];
      let tB = pool[l3];
      let merged = [];
      while (tA.length || tB.length) {
        if (!tA.length) {
          merged.push(...tB);
          tB = [];
        } else if (!tB.length) {
          merged.push(...tA);
          tA = [];
        } else {
          if (tA[0] < tB[0]) {
            merged.push(tA.shift());
          } else {
            merged.push(tB.shift());
          }
        }
      }
      newPool.push(merged)
    }
    pool = newPool
  }
  return pool[0]
}

console.log(mergeSort([5, 3, 12, 15, 2, 1, 11, 7])); // expect [1,2,3,5,7,11,12,15]
