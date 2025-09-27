// Boolean1
let A1 = 5
let isPositive1 = A1 > 0
console.log(isPositive1)

// Boolean2
let A2 = 7
let isOdd2 = A2 % 2 !== 0
console.log(isOdd2)

// Boolean3
let A3 = 8
let isEven3 = A3 % 2 === 0
console.log(isEven3)

// Boolean4
let A4 = 3, B4 = 2
let cond4 = A4 > 2 && B4 <= 3
console.log(cond4)

// Boolean5
let A5 = -1, B5 = -3
let cond5 = A5 >= 0 || B5 < -2
console.log(cond5)

// Boolean6
let A6 = 1, B6 = 2, C6 = 3
let cond6 = A6 < B6 && B6 < C6
console.log(cond6)

// Boolean7
let A7 = 1, B7 = 2, C7 = 3
let cond7 = (A7 < B7 && B7 < C7) || (C7 < B7 && B7 < A7)
console.log(cond7)

// Boolean8
let A8 = 3, B8 = 5
let cond8 = (A8 % 2 !== 0) && (B8 % 2 !== 0)
console.log(cond8)

// Boolean9
let A9 = 2, B9 = 3
let cond9 = (A9 % 2 !== 0) || (B9 % 2 !== 0)
console.log(cond9)

// Boolean10
let A10 = 2, B10 = 3
let cond10 = ((A10 % 2 !== 0) !== (B10 % 2 !== 0))
console.log(cond10)

// Boolean11
let A11 = 4, B11 = 6
let cond11 = (A11 % 2) === (B11 % 2)
console.log(cond11)

// Boolean12
let A12 = 1, B12 = 2, C12 = 3
let cond12 = A12 > 0 && B12 > 0 && C12 > 0
console.log(cond12)

// Boolean13
let A13 = -1, B13 = 2, C13 = -3
let cond13 = A13 > 0 || B13 > 0 || C13 > 0
console.log(cond13)

// Boolean14
let A14 = 1, B14 = -2, C14 = -3
let count14 = 0
if (A14 > 0) count14++
if (B14 > 0) count14++
if (C14 > 0) count14++
let cond14 = count14 === 1
console.log(cond14)

// Boolean15
let A15 = 1, B15 = 2, C15 = -3
let count15 = 0
if (A15 > 0) count15++
if (B15 > 0) count15++
if (C15 > 0) count15++
let cond15 = count15 === 2
console.log(cond15)
