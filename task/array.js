// Array1
console.log("Array1:");
let N1 = 10;
let arr1 = [];
for (let i = 0; i < N1; i++) {
  arr1.push(2 * i + 1);
}
console.log(arr1);

// Array2
console.log("\nArray2:");
let N2 = 10;
let arr2 = [];
for (let i = 0; i < N2; i++) {
  arr2.push(2 ** (i + 1));
}
console.log(arr2);

// Array3
console.log("\nArray3:");
let N3 = 10, A3 = 3, D3 = 5;
let arr3 = [];
for (let i = 0; i < N3; i++) {
  arr3.push(A3 + i * D3);
}
console.log(arr3);

// Array4
console.log("\nArray4:");
let N4 = 10, A4 = 2, D4 = 3;
let arr4 = [];
for (let i = 0; i < N4; i++) {
  arr4.push(A4 * (D4 ** i));
}
console.log(arr4);

// Array5
console.log("\nArray5:");
let N5 = 10;
let arr5 = [1, 1];
for (let i = 2; i < N5; i++) {
  arr5.push(arr5[i - 1] + arr5[i - 2]);
}
console.log(arr5);

// Array6
console.log("\nArray6:");
let N6 = 6, A6 = 1, B6 = 2;
let arr6 = [A6, B6];
for (let i = 2; i < N6; i++) {
  let sum = 0;
  for (let j = 0; j < i; j++) {
    sum += arr6[j];
  }
  arr6.push(sum);
}
console.log(arr6);

// Array7
console.log("\nArray7:");
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.slice().reverse());

// Array8
console.log("\nArray8:");
let arr8 = [4, 7, 2, 9, 8, 5];
let odds8 = [];
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] % 2 !== 0) odds8.push(arr8[i]);
}
console.log(odds8);
console.log("Count:", odds8.length);

// Array9
console.log("\nArray9:");
let arr9 = [4, 7, 2, 9, 8, 5];
let evens9 = [];
for (let i = arr9.length - 1; i >= 0; i--) {
  if (arr9[i] % 2 === 0) evens9.push(arr9[i]);
}
console.log(evens9);
console.log("Count:", evens9.length);

// Array10
console.log("\nArray10:");
let arr10 = [4, 7, 2, 9, 8, 5];
let evens10 = arr10.filter(x => x % 2 === 0);
let odds10 = [];
for (let i = arr10.length - 1; i >= 0; i--) {
  if (arr10[i] % 2 !== 0) odds10.push(arr10[i]);
}
console.log([...evens10, ...odds10]);

// Array11
console.log("\nArray11:");
let A11 = [10, 20, 30, 40, 50, 60, 70, 80];
let K11 = 2;
for (let i = K11 - 1; i < A11.length; i += K11) {
  console.log(A11[i]);
}

// Array12
console.log("\nArray12:");
let A12 = [10, 20, 30, 40, 50, 60]; // N is even
for (let i = 1; i < A12.length; i += 2) {
  console.log(A12[i]);
}

// Array13
console.log("\nArray13:");
let A13 = [10, 20, 30, 40, 50]; // N is odd
for (let i = A13.length - 1; i >= 0; i -= 2) {
  console.log(A13[i]);
}

// Array14
console.log("\nArray14:");
let A14 = [10, 20, 30, 40, 50, 60];
for (let i = 1; i < A14.length; i += 2) {
  console.log(A14[i]);
}
for (let i = 0; i < A14.length; i += 2) {
  console.log(A14[i]);
}

// Array15
console.log("\nArray15:");
let A15 = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < A15.length; i += 2) {
  console.log(A15[i]);
}
for (let i = A15.length - 1 - (A15.length % 2 === 0 ? 1 : 0); i >= 1; i -= 2) {
  console.log(A15[i]);
}
