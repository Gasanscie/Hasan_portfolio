// If1
let n1 = 5
if (n1 > 0) n1 = n1 + 1
console.log(n1)

// If2
let n2 = -3
if (n2 > 0) n2 = n2 + 1
else n2 = n2 - 2
console.log(n2)

// If3
let n3 = 0
if (n3 > 0) n3 = n3 + 1
else if (n3 < 0) n3 = n3 - 2
else n3 = 10
console.log(n3)

// If4
let a4 = 1, b4 = -2, c4 = 3
let countPositive4 = 0
if (a4 > 0) countPositive4++
if (b4 > 0) countPositive4++
if (c4 > 0) countPositive4++
console.log(countPositive4)

// If5
let a5 = 1, b5 = -2, c5 = 3
let countPos5 = 0, countNeg5 = 0
if (a5 > 0) countPos5++
if (b5 > 0) countPos5++
if (c5 > 0) countPos5++
if (a5 < 0) countNeg5++
if (b5 < 0) countNeg5++
if (c5 < 0) countNeg5++
console.log(countPos5, countNeg5)

// If6
let a6 = 5, b6 = 10
let max6 = a6 > b6 ? a6 : b6
console.log(max6)

// If7
let a7 = 5, b7 = 10
let smallerIndex7 = a7 < b7 ? 1 : 2
console.log(smallerIndex7)

// If8
let a8 = 5, b8 = 10
if (a8 < b8) console.log(b8, a8)
else console.log(a8, b8)

// If9
let A9 = 10, B9 = 5
if (A9 > B9) {
  let temp9 = A9
  A9 = B9
  B9 = temp9
}
console.log(A9, B9)

// If10
let A10 = 5, B10 = 5
if (A10 !== B10) {
  let sum10 = A10 + B10
  A10 = sum10
  B10 = sum10
} else {
  A10 = 0
  B10 = 0
}
console.log(A10, B10)

// If11
let A11 = 5, B11 = 10
if (A11 !== B11) {
  let max11 = A11 > B11 ? A11 : B11
  A11 = max11
  B11 = max11
} else {
  A11 = 0
  B11 = 0
}
console.log(A11, B11)

// If12
let a12 = 5, b12 = 10, c12 = 3
let min12 = a12
if (b12 < min12) min12 = b12
if (c12 < min12) min12 = c12
console.log(min12)

// If13
let a13 = 5, b13 = 10, c13 = 3
let min13 = a13
let max13 = a13
if (b13 < min13) min13 = b13
if (c13 < min13) min13 = c13
if (b13 > max13) max13 = b13
if (c13 > max13) max13 = c13
let sum13 = a13 + b13 + c13
let mid13 = sum13 - min13 - max13
console.log(mid13)

// If14
let a14 = 5, b14 = 10, c14 = 3
let min14 = a14
let max14 = a14
if (b14 < min14) min14 = b14
if (c14 < min14) min14 = c14
if (b14 > max14) max14 = b14
if (c14 > max14) max14 = c14
console.log(min14, max14)

// If15
let a15 = 5, b15 = 10, c15 = 3
let min15 = a15
if (b15 < min15) min15 = b15
if (c15 < min15) min15 = c15
let sum15 = a15 + b15 + c15 - min15
console.log(sum15)
