// Case1
let day = 3
switch (day) {
  case 1: console.log("понедельник"); break
  case 2: console.log("вторник"); break
  case 3: console.log("среда"); break
  case 4: console.log("четверг"); break
  case 5: console.log("пятница"); break
  case 6: console.log("суббота"); break
  case 7: console.log("воскресенье"); break
  default: console.log("ошибка")
}

// Case2
let K = 4
switch (K) {
  case 1: console.log("плохо"); break
  case 2: console.log("неудовлетворительно"); break
  case 3: console.log("удовлетворительно"); break
  case 4: console.log("хорошо"); break
  case 5: console.log("отлично"); break
  default: console.log("ошибка")
}

// Case3
let month = 12
switch (month) {
  case 12:
  case 1:
  case 2: console.log("зима"); break
  case 3:
  case 4:
  case 5: console.log("весна"); break
  case 6:
  case 7:
  case 8: console.log("лето"); break
  case 9:
  case 10:
  case 11: console.log("осень"); break
  default: console.log("ошибка")
}

// Case4
let m = 2
let daysInMonth
switch (m) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12: daysInMonth = 31; break
  case 4:
  case 6:
  case 9:
  case 11: daysInMonth = 30; break
  case 2: daysInMonth = 28; break
  default: daysInMonth = 0
}
console.log(daysInMonth)

// Case5
let N = 3
let A = 5
let B = 2
let result
switch (N) {
  case 1: result = A + B; break
  case 2: result = A - B; break
  case 3: result = A * B; break
  case 4: result = A / B; break
  default: result = "ошибка"
}
console.log(result)

// Case6
let unit = 2
let length = 3.5
let meters
switch (unit) {
  case 1: meters = length * 0.1; break
  case 2: meters = length * 1000; break
  case 3: meters = length; break
  case 4: meters = length * 0.001; break
  case 5: meters = length * 0.01; break
  default: meters = 0
}
console.log(meters)

// Case7
let massUnit = 4
let massValue = 1.5
let massKg
switch (massUnit) {
  case 1: massKg = massValue; break
  case 2: massKg = massValue * 0.000001; break
  case 3: massKg = massValue * 0.001; break
  case 4: massKg = massValue * 1000; break
  case 5: massKg = massValue * 100; break
  default: massKg = 0
}
console.log(massKg)

// Case8
let D = 1
let M = 3
let daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
if (D === 1) {
  M = M === 1 ? 12 : M - 1
  D = daysInMonths[M - 1]
} else D = D - 1
console.log(D, M)

// Case9
let D9 = 31
let M9 = 12
let daysInMonths9 = [31,28,31,30,31,30,31,31,30,31,30,31]
if (D9 === daysInMonths9[M9 - 1]) {
  D9 = 1
  M9 = M9 === 12 ? 1 : M9 + 1
} else D9 = D9 + 1
console.log(D9, M9)

// Case10
let C = 'С' // 'С', 'З', 'Ю', 'В'
let N10 = 1 // 0,1,-1
let dirs = ['С', 'З', 'Ю', 'В']
let idx = dirs.indexOf(C)
if (N10 === 1) idx = (idx + 1) % 4
else if (N10 === -1) idx = (idx + 3) % 4
// else N10 === 0 — no change
console.log(dirs[idx])

// Case11
let C11 = 'С'
let N1 = 1
let N2 = -1
let dirs11 = ['С', 'З', 'Ю', 'В']
let idx11 = dirs11.indexOf(C11)
function turn(idx, cmd) {
  if (cmd === 1) return (idx + 1) % 4
  if (cmd === -1) return (idx + 3) % 4
  if (cmd === 2) return (idx + 2) % 4
  return idx
}
idx11 = turn(idx11, N1)
idx11 = turn(idx11, N2)
console.log(dirs11[idx11])

// Case12
let elem = 3
let val = 10
const PI = 3.14
let R, h, L, S
switch (elem) {
  case 1:
    R = val
    D = 2 * R
    L = 2 * PI * R
    S = PI * R * R
    break
  case 2:
    D = val
    R = D / 2
    L = 2 * PI * R
    S = PI * R * R
    break
  case 3:
    L = val
    R = L / (2 * PI)
    D = 2 * R
    S = PI * R * R
    break
  case 4:
    S = val
    R = Math.sqrt(S / PI)
    D = 2 * R
    L = 2 * PI * R
    break
  default:
    R = D = L = S = 0
}
console.log(R, D, L, S)

// Case13
let elem13 = 2
let val13 = 10
let a, c, d, S13
switch (elem13) {
  case 1:
    a = val13
    c = a * Math.sqrt(2)
    h = c / 2
    S13 = c * h / 2
    break
  case 2:
    c = val13
    a = c / Math.sqrt(2)
    h = c / 2
    S13 = c * h / 2
    break
  case 3:
    h = val13
    c = 2 * h
    a = c / Math.sqrt(2)
    S13 = c * h / 2
    break
  case 4:
    S13 = val13
    h = 2 * S13 / c
    c = 2 * h
    a = c / Math.sqrt(2)
    break
  default:
    a = c = h = S13 = 0
}
console.log(a, c, h, S13)

// Case14
let elem14 = 1
let val14 = 6
let a14, R1, R2, S14
switch (elem14) {
  case 1:
    a14 = val14
    R1 = a14 * Math.sqrt(3) / 6
    R2 = 2 * R1
    S14 = a14 * a14 * Math.sqrt(3) / 4
    break
  case 2:
    R1 = val14
    a14 = R1 * 6 / Math.sqrt(3)
    R2 = 2 * R1
    S14 = a14 * a14 * Math.sqrt(3) / 4
    break
  case 3:
    R2 = val14
    R1 = R2 / 2
    a14 = R1 * 6 / Math.sqrt(3)
    S14 = a14 * a14 * Math.sqrt(3) / 4
    break
  case 4:
    S14 = val14
    a14 = Math.sqrt(4 * S14 / Math.sqrt(3))
    R1 = a14 * Math.sqrt(3) / 6
    R2 = 2 * R1
    break
  default:
    a14 = R1 = R2 = S14 = 0
}
console.log(a14, R1, R2, S14)

// Case15
let N15 = 14
let M15 = 3
let namesNum = {
  6: 'шестерка',
  7: 'семерка',
  8: 'восьмерка',
  9: 'девятка',
  10: 'десятка',
  11: 'валет',
  12: 'дама',
  13: 'король',
  14: 'туз'
}
let namesSuit = {
  1: 'пик',
  2: 'треф',
  3: 'бубен',
  4: 'червей'
}
console.log(namesNum[N15] + ' ' + namesSuit[M15])
