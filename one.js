let arr = [
  [12, 34, 56, 7],
  [6, 7, 9],
];
let finalVar = "[";
for (let i = 0; i < arr.length; i++) {
  let myvar = "[";
  for (let j = 0; j < arr[i].length; j++) {
    myvar = myvar + arr[i][j] + ",";
  }
  myvar = myvar + "]";
  finalVar = finalVar + myvar;
}
finalVar = finalVar + "]";
console.log(finalVar);
