// Integer1
let L = 345
let meters = Math.floor(L / 100)
console.log(meters)

// Integer2
let M = 3456
let tons = Math.floor(M / 1000)
console.log(tons)

// Integer3
let bytes = 1048576
let kilobytes = Math.floor(bytes / 1024)
console.log(kilobytes)

// Integer4
let A4 = 50, B4 = 7
let count4 = Math.floor(A4 / B4)
console.log(count4)

// Integer5
let A5 = 50, B5 = 7
let remainder5 = A5 % B5
console.log(remainder5)

// Integer6
let num6 = 57
let tens6 = Math.floor(num6 / 10)
let units6 = num6 % 10
console.log(tens6, units6)

// Integer7
let num7 = 57
let tens7 = Math.floor(num7 / 10)
let units7 = num7 % 10
let sum7 = tens7 + units7
let prod7 = tens7 * units7
console.log(sum7, prod7)

// Integer8
let num8 = 57
let tens8 = Math.floor(num8 / 10)
let units8 = num8 % 10
let reversed8 = units8 * 10 + tens8
console.log(reversed8)

// Integer9
let num9 = 345
let hundreds9 = Math.floor(num9 / 100)
console.log(hundreds9)

// Integer10
let num10 = 345
let units10 = num10 % 10
let tens10 = Math.floor((num10 % 100) / 10)
console.log(units10, tens10)

// Integer11
let num11 = 345
let hundreds11 = Math.floor(num11 / 100)
let tens11 = Math.floor((num11 % 100) / 10)
let units11 = num11 % 10
let sum11 = hundreds11 + tens11 + units11
let prod11 = hundreds11 * tens11 * units11
console.log(sum11, prod11)

// Integer12
let num12 = 345
let hundreds12 = Math.floor(num12 / 100)
let tens12 = Math.floor((num12 % 100) / 10)
let units12 = num12 % 10
let reversed12 = units12 * 100 + tens12 * 10 + hundreds12
console.log(reversed12)

// Integer13
let num13 = 345
let hundreds13 = Math.floor(num13 / 100)
let rest13 = num13 % 100
let rotated13 = rest13 * 10 + hundreds13
console.log(rotated13)

// Integer14
let num14 = 345
let units14 = num14 % 10
let rest14 = Math.floor(num14 / 10)
let rotated14 = units14 * 100 + rest14
console.log(rotated14)

// Integer15
let num15 = 123
let hundreds15 = Math.floor(num15 / 100)
let tens15 = Math.floor((num15 % 100) / 10)
let units15 = num15 % 10
let rearranged15 = tens15 * 100 + hundreds15 * 10 + units15
console.log(rearranged15)
