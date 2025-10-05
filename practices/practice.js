//1
Math.sqrt(16)

//2
JSON.stringify({ a: 1 })

//3
new Date().getFullYear()

//4
Array.from("hello")

//5
Promise.resolve("done")

//6
console.log("Hello world")

//7
setTimeout(() => { console.log("Delay") }, 500)

//8
clearInterval(123)

//9
isFinite(100)

//10
decodeURIComponent("hello%20world")



//1
function greet() {
  return "Hi"
}

//2
const say = function() {
  return "Hello"
}

//3
const multiply = (a, b) => a * b

//4
function outer() {
  return function inner() {
    return "Inside"
  }
}

//5
const runner = function run() {
  return "Running"
}

//6
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1)
}

//7
(function selfInvoke() {
  console.log("I run myself")
})()

//8
function doSomething() {}
doSomething.extra = "property"

//9
const user = {
  speak: function() {
    return "Speaking"
  }
}

//10
setTimeout(function delayFunc() {
  console.log("Waited")
}, 1000)
