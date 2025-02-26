function fibs(n) {
  let fibArr = [];
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      fibArr.push(0);
    } else if (i === 2) {
      fibArr.push(1);
    } else fibArr.push(fibArr[i - 2] + fibArr[i - 3]);
  }
  return fibArr;
}
console.log("Fib iterative method: "+fibs(5));
//console.log(fibs(2));

function fibsRec(n) {
   console.log("This was printed recursively");
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  let prevFib = fibsRec(n - 1);

  nextFib = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
  return [...prevFib, nextFib];
}

console.log("Fib recursive method: "+fibsRec(8));
function merge(firstArr, secondArr) {
  let i = 0,
    j = 0,
    k = 0;
  let resultArr = [];
  while (i < firstArr.length  && j < secondArr.length ) {
    if (firstArr[i] < secondArr[j]) {
      resultArr[k++] = firstArr[i++];
    } else {
      resultArr[k++] = secondArr[j++];
    }
  }
  for (; i < firstArr.length ; i++) {
    resultArr[k++] = firstArr[i];
  }
  for (; j < secondArr.length ; j++) {
    resultArr[k++] = secondArr[j];
  }
  return resultArr;
}

function mergeSort(arr) {
  let sortedArr = [];
  if (arr.length === 1) return arr;
  else if (0 < arr.length - 1) {
    let mid = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid));
    sortedArr = merge(leftArr, rightArr);
  }
  return sortedArr;
}
let arr = [105, 79, 100, 110];
console.log("MergeSort: "+mergeSort(arr));
