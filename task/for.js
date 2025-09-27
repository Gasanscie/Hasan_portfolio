function printKTimes(K, N) {
  let result = []
  for (let i = 0; i < N; i++) {
    result.push(K)
  }
  return result.join(' ')
}

function ascendingRangeWithCount(A, B) {
  let result = []
  for (let i = A; i <= B; i++) {
    result.push(i)
  }
  return { numbers: result, count: result.length }
}

function descendingRangeBetweenExclusive(A, B) {
  let result = []
  for (let i = B - 1; i > A; i--) {
    result.push(i)
  }
  return { numbers: result, count: result.length }
}

function candyCost1to10(price) {
  let result = []
  for (let i = 1; i <= 10; i++) {
    result.push((i * price).toFixed(2))
  }
  return result
}

function candyCostPoint1to1(price) {
  let result = []
  for (let i = 1; i <= 10; i++) {
    let w = i * 0.1
    result.push((w * price).toFixed(2))
  }
  return result
}

function candyCost1Point2to2(price) {
  let result = []
  for (let w = 1.2; w <= 2.0; w += 0.2) {
    result.push((w * price).toFixed(2))
  }
  return result
}

function sumRange(A, B) {
  let sum = 0
  for (let i = A; i <= B; i++) {
    sum += i
  }
  return sum
}

function productRange(A, B) {
  let prod = 1
  for (let i = A; i <= B; i++) {
    prod *= i
  }
  return prod
}

function sumSquaresRange(A, B) {
  let sum = 0
  for (let i = A; i <= B; i++) {
    sum += i * i
  }
  return sum
}

function harmonicSum(N) {
  let sum = 0
  for (let i = 1; i <= N; i++) {
    sum += 1 / i
  }
  return sum
}

function sumSquaresNto2N(N) {
  let sum = 0
  for (let i = N; i <= 2 * N; i++) {
    sum += i * i
  }
  return sum
}

function productDecimal(N) {
  let prod = 1
  for (let i = 1; i <= N; i++) {
    prod *= (1 + i / 10)
  }
  return prod
}

function alternatingSum(N) {
  let sum = 0
  for (let i = 1; i <= N; i++) {
    sum += ((-1) ** (i + 1)) * (1 + i / 10)
  }
  return sum
}

function squaresBySumOdd(N) {
  let result = []
  let sum = 0
  for (let i = 1; i <= N; i++) {
    sum += 2 * i - 1
    result.push(sum)
  }
  return result
}

function power(A, N) {
  let result = 1
  for (let i = 0; i < N; i++) {
    result *= A
  }
  return result
}
