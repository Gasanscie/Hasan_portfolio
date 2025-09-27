// For1. Вывести N раз число K
function printKTimes(K, N) {
  let result = []
  for(let i = 0; i < N; i++) {
    result.push(K)
  }
  return result.join(' ')
}

// For2. Вывести числа от A до B включительно и количество N
function ascendingRangeWithCount(A, B) {
  let result = []
  for(let i = A; i <= B; i++) result.push(i)
  return {numbers: result, count: result.length}
}

// For3. Вывести числа между A и B в порядке убывания, без A и B, и количество N
function descendingRangeBetweenExclusive(A, B) {
  let result = []
  for(let i = B - 1; i > A; i--) result.push(i)
  return {numbers: result, count: result.length}
}

// For4. Стоимость 1..10 кг конфет при цене price за кг
function candyCost1to10(price) {
  let result = []
  for(let i = 1; i <= 10; i++) {
    result.push((i * price).toFixed(2))
  }
  return result
}

// For5. Стоимость 0.1..1 кг конфет с шагом 0.1
function candyCostPoint1to1(price) {
  let result = []
  for(let i = 1; i <= 10; i++) {
    let w = i * 0.1
    result.push((w * price).toFixed(2))
  }
  return result
}

// For6. Стоимость 1.2..2 кг конфет с шагом 0.2
function candyCost1Point2to2(price) {
  let result = []
  for(let w = 1.2; w <= 2.0; w += 0.2) {
    result.push((w * price).toFixed(2))
  }
  return result
}

// For7. Сумма всех целых чисел от A до B включительно
function sumRange(A, B) {
  let sum = 0
  for(let i = A; i <= B; i++) sum += i
  return sum
}

// For8. Произведение всех целых чисел от A до B включительно
function productRange(A, B) {
  let prod = 1
  for(let i = A; i <= B; i++) prod *= i
  return prod
}

// For9. Сумма квадратов всех чисел от A до B включительно
function sumSquaresRange(A, B) {
  let sum = 0
  for(let i = A; i <= B; i++) sum += i*i
  return sum
}

// For10. Сумма 1 + 1/2 + ... + 1/N
function harmonicSum(N) {
  let sum = 0
  for(let i = 1; i <= N; i++) sum += 1/i
  return sum
}

// For11. Сумма квадратов чисел от N до 2N
function sumSquaresNto2N(N) {
  let sum = 0
  for(let i = N; i <= 2*N; i++) sum += i*i
  return sum
}

// For12. Произведение 1.1 * 1.2 * ... (N множителей)
function productDecimal(N) {
  let prod = 1
  for(let i = 1; i <= N; i++) prod *= (1 + i/10)
  return prod
}

// For13. Выражение 1.1 - 1.2 + 1.3 - 1.4 + ... с N слагаемыми, без if
function alternatingSum(N) {
  let sum = 0
  for(let i = 1; i <= N; i++) {
    sum += ((-1)**(i+1)) * (1 + i/10)
  }
  return sum
}

// For14. Квадраты чисел 1..N через сумму нечетных, с выводом промежуточных сумм
function squaresBySumOdd(N) {
  let result = []
  let sum = 0
  for(let i = 1; i <= N; i++) {
    sum += 2*i - 1
    result.push(sum)
  }
  return result
}

// For15. Возведение A в степень N (целое N > 0)
function power(A, N) {
  let result = 1
  for(let i = 0; i < N; i++) {
    result *= A
  }
  return result
}
