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





// Виртуальная файловая система
let fs = {
  root: {
    type: 'dir',
    children: {}
  }
};

let currentPath = ['root'];

// Вспомогательная функция: получить текущую директорию
function getCurrentDir() {
  return currentPath.reduce((dir, name) => dir.children[name], fs);
}

// mkdir — создать папку
function mkdir(name) {
  const dir = getCurrentDir();
  if (!dir.children[name]) {
    dir.children[name] = { type: 'dir', children: {} };
    console.log(`Папка "${name}" создана.`);
  } else {
    console.log(`Папка "${name}" уже существует.`);
  }
}

// dir (ls) — показать содержимое
function dirList() {
  const dir = getCurrentDir();
  console.log('Содержимое:', Object.keys(dir.children));
}

// cd — перейти в папку
function cd(name) {
  const dir = getCurrentDir();
  if (dir.children[name] && dir.children[name].type === 'dir') {
    currentPath.push(name);
    console.log(`Переход в папку "${name}"`);
  } else {
    console.log(`Папка "${name}" не найдена.`);
  }
}

// ../ — на уровень выше
function cdUp() {
  if (currentPath.length > 1) {
    currentPath.pop();
    console.log('Возврат на уровень выше.');
  } else {
    console.log('Вы находитесь в корневой папке.');
  }
}

// Пример 1 — создание папки
mkdir('projects');

// Пример 2 — переход в папку
cd('projects');

// Пример 3 — создание подпапки
mkdir('app1');

// Пример 4 — создание ещё одной папки
mkdir('app2');

// Пример 5 — просмотр содержимого текущей папки
dirList(); // ['app1', 'app2']

// Пример 6 — переход в app1
cd('app1');

// Пример 7 — попытка перейти в несуществующую папку
cd('notExist');

// Пример 8 — возврат на уровень выше
cdUp();

// Пример 9 — ещё один возврат (в корень)
cdUp();

// Пример 10 — вывод содержимого root
dirList(); // ['projects']
