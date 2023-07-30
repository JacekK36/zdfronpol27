let a = 97;
let b = 80;
let c = "97";

console.log(a + b)
console.log(a * b)

// a++;
// console.log(a);

// if (a > b) {
//     alert("a jest większe niż b");
// }

// let isRaning = false;

// if (!isRaning) {
//     console.log("Pada deszcz");
// } else {
//     console.log("Jest słonecznie")
// }

// if (a == c) {
//     console.log("a jest równe c");
// } else {
//     console.log("a nie jest równe c")
// }

// function getWeather() {
//     if (isRaning) {
//         console.log("Jest słonecznie");
//     } else {
//         console.log("Jest słonecznie");
//     }
//     isRaning = !isRaning
// }
// getWeather();

// const btn = document.getElementById("rainBtn");
// const nav = document.getElementById("rainBtn");

// function countTax(v, t = 1.23) {
//     console.log(v * t);
// }
// countTax(345);
// countTax(456, 1, 34);

// const memberss = ["Adam", "Jarek", "Jakub"]

// for (let i = 1; i <= 100; i++) {
//     console.log(`użytkownik nr.${i}`)
// }

// let y = 1
// while (y < 50) {
//     console.log(`wnile zwraca` + y)
//     y++;
// }

// for (let m = 0; m < 5; m++) {
//     if (m !== 3) {
//         console.log(m);
//     } else {
//         console.log("number - " + m);
//     }
// }

// const car = {
//     brand: "Ford",
//     model: "Focus",
//     year: 2014,
//     power: 105,
//     tuning: function () {
//         this.power += 50;
//     }
// }
// console.log(car.power);
// car.tuning();
// console.log(car.power);

// const memberslist = [`Adam B`, `Adrian`, `Artur`, `Iryna`, `Jacek`, `Jarek`, `Kacper`, `Karol`, `Krzysztof`, `Mateusz`,]

// function getNumber() {
//     const memberlist = members[Math.floor(Math.random() * members.length)];
//     console.log(members);
// }
// getNumber();
// button.addEventListener("click", () => {
//     function randomNumber() { Math.floor(Math.random() * array.length) }
// })

// function Bonuses() {
//     for (let i = 1; i <= 100; i++)
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log(i + "Nagroda 1mln zł")
//         }
//         else if (i % 5 == 0) {
//             console.log(i + `Nagroda 10k zł`)
//         }
//         else if (i % 3 == 0) {
//             console.log(i + `Vacation`)
//         }
//         else {
//             console.log(i + ":(")
//         }
// }
// Bonuses()

// // const box = [`Tekst`, 1, true, false, [`Tytuł`, `opis`, 1992], {name: `Adam`,}]

// const members = [
//     "Adam_B",
//     "Adrian",
//     "Artur",
//     "Iryna",
//     "Jacek",
//     "Jarek",
//     "Kacper",
//     "Kamil",
//     "Karol",
//     "Krzysztof",
//     "Mateusz",
//     "Michał",
//     "Natalia T",
//     "Natalia Tomasz",
//     "Oleh",
//     "Paweł",
//     "Radek",
// ];

// members.push(`Jakub`);
// console.log(members);

// members[0] = `Andy`;
// console.log(members);

// const newMembers = [];

// for (let i = members.length - 1; i >= members.length - 4; i--) {
//     newMembers.unshift(members[i]);
// }

// let lastFour = members.slice(-4);
// console.log(`Metoda slice`, lastFour);

// console.log(newMembers);

// if (members.includes(`Jarek`)) {
//     console.log(`Jarek jest z nami`);
// }

// console.log(`Michał jest na ` + members.indexOf(`Michał`) + ` miejscu`)

// const membersString = members.join(` member `);
// console.log(membersString);

// const title

// const movies = [
//     {title: "The Lord of the rings", yearOfProduction: 2002, likes: 507},
//     {title: "Harry Potter", yearOfProduction: 2000, likes: 655},
//     {title: "Matrix", yearOfProduction: 1999, likes: 737},
// ]

// let title = document.querySelector(`.title`);
// let year = document.querySelector(`.yearOfProduction`);
// let likes = document.querySelector(`.likes`);
// let btn = document.querySelector(`.movie__btn`);

// title.innerHTML = `Title: ` + movies[0].title;
// year.innerHTML = `Year: ` + movies[0].yearOfProduction;
// likes.innerHTML = `Likes: ` + movies[0].likes;

// btn.addEventListener(`click`, () => {
//     movies[0].likes++;
//     likes.innerHTML = `Likes: ` + movies[0].likes;
// }
// );

// const button = document.getElementById('card__btn');

// button.addEventListener('click', function() {
//   console.log('Jest klik w konsoli');
// });





// alert("works")

// const firstName = `Jacek`;
// let age = 36;
// const hobbies = [`juggling`, `codding`, `plaing games`];
// const car ={
//   brand: `Seat`,
//   model: `Altea`,
//   yearOfProduction: 2010,
// };
// const isWorking = true;


// const hobbies1 = hobbies.map((hobby) => {
// if (hobby === `coding`){
//   return " " + hobby.toUpperCase();
// } else {
//   return " " + hobby;
// }
// });

// const nameBox = document.getElementById(`name`);
// const ageBox = document.querySelector(`#age`);
// const hobbiesBox = document.querySelector(`#hobbies`);
// const carBox = document.querySelector(`#car`);
// const isWorkingBox = document.getElementById(`isWorking`);
// const ageBtn = document.getElementById("ageBtn");
// const carBtn = document.getElementById("varBtn");


// nameBox.innerText = firstName;
// ageBox.innerText = age;
// hobbiesBox.innerText = hobbies1;
// carBox.innerText = `${car.brand} ${car.model} - ${car.yearOfProduction}`;
// if (isWorking) {
//   isWorkingBox.innerText = "is working";
// } else {
//   isWorking.innerText = "odpoczynek";
// }

// ageBtn.addEventListener("click", () => {
//   age++;
//   ageBox.innerText = age;
// });

// carBtn.addEventListener("click", () => {
//   car.brand ="Ford";
//   car.model ="Focus";
//   car.yearOfProduction =2016;
//   carBox.innerText = `${car.brand} ${car.model} - ${car.yearOfProduction}`;
// });

// const user = {
//   firstName,
//   age,
//   hobbies,
//   car,
//   isWorking,
// }

// const a = 1;
// const b = 2;
// const c = 3;
// console.log(a)
// setTimeout(() => {
//   console.log(b);
// }, 2000);
// console.log(c);

// let leftTime = 60;
// setInterval(() => {
//   leftTime--;
//   console.log(`pozostało` + leftTime + `sekund`);
// }, 1000);

const app = document. getElementById(`app`);
const box = document.createElement("div");
const activeBox = document.getElementById(`activeBox`);

app.appendChild(box);
box. className = "box";
activeBox.addEventListener("click", () => {
  if (box.className.includes(`box--active`)) {
   box.className = `box`;
  } else {
    box.className = "box box--active";
  }
});

const btnNext = document.getElementById(`btnNext`)
let index = 0;


//     const box = document.getElementsByClassName("box__item");
    
//     for (let i =0; i< box.length; i++) {
//         box[i].style.backgroundColor = "yellow";
//      };
//      console.log(box.length);

//      const btnNext = document.getElementById("btnNext");
//      let index = 0;

//      let currentIndex = 0;
//      let previousIndex = 0;

//      box[index].style.backgroundColor = "#ff0000";

//      console.log(box[0])

//      btnNext.addEventListener("click", () => {
//       if (index=== box.length -1){
//         alert (`koniec`)
//         return;
//       }
//         index++;
//         console.log(box[index])
//         box[index].style.backgroundColor = "#ff0000";
//      })



// btnNext.addEventListener("click", () => {
//   // Przywróć poprzedni kolor tła dla poprzedniego elementu
//   box[previousIndex].style.backgroundColor = ""; // przywrócenie domyślnego koloru tła

//   // Zmieniamy kolor tła dla bieżącego elementu
//   box[currentIndex].style.backgroundColor = "#ff0000"; // nowy kolor tła

//   // Zaktualizuj indeksy
//   previousIndex = currentIndex;
//   currentIndex++;

//   // Sprawdzamy, czy osiągnięto koniec listy elementów
//   if (currentIndex === box.length) {
//     alert("Koniec");
//     currentIndex = 0; // Przywracamy indeks do początkowego stanu
//   }
// });

const menuBtn = document.querySelector(`#menu__button`);
const navigation = document.querySelector(`.menu`);


let isVisible = false;

menuBtn.addEventListener(`click`, () => {
    isVisible = !isVisible;

    if (isVisible) {
        navigation.classList.add(`visible`);
        menuBtn.classList.add(`active`);
        menuBtn.classList.add(`button-color`);
    } else {
        navigation.classList.remove(`visible`);
        menuBtn.classList.remove(`active`);
        menuBtn.classList.remove(`button-color`);
  }

});

const user = {
firstName:`Jacek`,
lastName:`Kalinowski`,
age: 13,
};

const firstNameBox = document.getElementById(`firstName`);
const lastNameBox = document.getElementById(`lastName`);
const ageBox = document.getElementById(`age`);

firstNameBox.innerText = user.firstName;
lastNameBox.innerText = user.lastName;
ageBox.innerText = user.age;

const ageBtn = document.getElementById(`ageBtn`);
ageBtn.addEventListener("click", () =>{
  user.age++;
  ageBox.innerText = user.age;
});

function displayUserData() {
const listElement = document.getElementById(`userList`);
listElement.innerHTML = ``;
for (const property in user) {
  const listItem = document.createElement(`li`);
  listItem.innerText = `${property}: ${user[property]}`;
  listElement.appendChild(listItem);
}
}

function checkAge() {
    if (user.age = 18) { 
    alert(`Teraz możesz uczcić swoje zwycieństwo!`);
    }
}

function fact(n) {
        if (n === 0 || n === 1) {
          return 1;
        } else {
          return n * fact(n - 1);
        }
      } 
    console.log(fact(5));   

    function factorial(n) {
      const memory = new Map([
          [0, 1], [1, 1]
      ])
  
      if (memory.has(n)) {
          return memory.get(n);
      } else {
          memory.set(n, n * factorial(n-1))
          return memory.get(n);
      }
    }
      console.log(factorial(11));



     function fibonacci(n) {
        if (n <= 0) {
          return 0;
        } else if (n === 1) {
          return 1;
        } else {
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
      }
      console.log(fibonacci(4));

var array = [3, 1, 5, 2, 4];
array.sort();
console.log(array);


var array = [5, 2, 4, 6, 1, 3, 56, 78, 89, 294];
var sortedArray = insertionSort(array);

      function insertionSort(array) {
        var length = array.length;
      
        for (var i = 1; i < length; i++) {
          var current = array[i];
          var j = i - 1;
      
          while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
          }
      
          array[j + 1] = current;
        }
      
        return array;
      }
      console.log(sortedArray);

      function bubbleSort(array) {
        var length = array.length;
      
        for (var i = 0; i < length - 1; i++) {
          for (var j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
              var temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
            }
          }
        }
      
        return array;
      }
      var array = [5, 2, 4, 6, 1, 3, 67, 88, 12, 56];
      var bubblesortedArray = bubbleSort(array);
      console.log(bubblesortedArray);







      function mergeSortedArrays(arr1, arr2) {
        var mergedArray = [];
        var i = 0;
        var j = 0;
      
        while (i < arr1.length && j < arr2.length) {
          if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
          } else {
            mergedArray.push(arr2[j]);
            j++;
          }
        }
      
        while (i < arr1.length) {
          mergedArray.push(arr1[i]);
          i++;
        }
      
        while (j < arr2.length) {
          mergedArray.push(arr2[j]);
          j++;
        }
      
        return mergedArray;
      }
      
      var arr1 = [1, 21, 32, 43, 54, 65, 76, 87, 98];
      var arr2 = [18, 27, 36, 45, 54, 63, 72, 81, 90];
      var mergedArray = mergeSortedArrays(arr1, arr2);
      console.log(mergedArray);
      
      function bubbleSort(mergedArray) {
        var length = mergedArray;
      
        for (var i = 0; i < length - 1; i++) {
          for (var j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
              var temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
            }
          }
        }
      
        return array;
      }
      var array = mergedArray;
      var bubblesortedArray = bubbleSort(array);
      console.log(bubblesortedArray);

      function fibonacci(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }

    function merge(A, B) {
      var i1 = 0, i2 = 0;
      var result = [];
      while(i1 < A.length && i2 < B.length) {
          if (A[i1] < B[i2]) result.push(A[i1++]);
          else result.push(B[i2++]);
      }
      for (; i1 < A.length; i1++) result.push(A[i1]);
      for (; i2 < B.length; i2++) result.push(B[i2]);
      return result;
  }
  
  function mergeSort(L) {
      if (L.length < 2) return L;
      var mid = Math.floor(L.length / 2);
      var A = L.slice(0,mid), B = L.slice(mid);
      return merge(mergeSort(A), mergeSort(B));
  }
  
  
  console.log(mergeSort([2,5,2,1,5,4,2]));

  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5))

function binarySearch(arr, x, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] == x) return true;

  if(arr[mid] > x)
      return binarySearch(arr, x, start, mid - 1);
  else
      return binarySearch(arr, x, mid + 1, end);
}

console.log(binarySearch[1,3,5,6,7,8,34,45])

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];

  for (let element of arr) {
    if (element < pivot) {
      less.push(element);
    } else if (element === pivot) {
      equal.push(element);
    } else {
      greater.push(element);
    }
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

const unsortedArray = [5,3,8,1,2,7,8,4,3,4,2,8,9,5,3,1,2,0,6,3,2,1,];
const result = quickSort(unsortedArray);
console.log(result);


function calculatePiMonteCarlo(numPoints) {
  let pointsInsideCircle = 0;

  for (let i = 0; i < numPoints; i++) {
    const x = Math.random();
    const y = Math.random();

    // Sprawdzenie, czy punkt (x, y) znajduje się wewnątrz okręgu
    if (x * x + y * y <= 1) {
      pointsInsideCircle++;
    }
  }

  // Obliczenie przybliżonej wartości liczby pi
  const pi = (pointsInsideCircle / numPoints) * 4;
  return pi;
}

// Przykładowe użycie
const numPoints = 10000000;
const approximatePi = calculatePiMonteCarlo(numPoints);
console.log(`Przybliżona wartość liczby pi: ${approximatePi}`);

function calcPi(n){
let points = 0;

for (let i = 0; i < n; i++ ) {
  const x = Math.random();
  const y = Math.random();
if (x **2 + y**2 <= 1) {
points++;
}
}
return (points / n) * 4;
}
const n = 10000;
const przybliżonejPi = calcPi(n);
console.log({przybliżonejPi});



class MyList {
  constructor(){
    this.array = [];
  }
  set(index, value){
    this.array[index] = value;
  }
  length() {
    return this.array.length;
  }
  insert(index, value) {
    this.array.splice(index, 0, value);
  }
  remove(index) {
    this.array.splice(index, 1);
  }
}
const NewList = new MyList();

NewList.set(0, 1);
NewList.set(1, 10);
NewList.set(2, 56);
NewList.set(3, 'Jacek');
NewList.set(4, 'dom');
NewList.set(5, 67);
NewList.set(6, 132);
NewList.set(7, `rzeka`);

console.log(NewList.length());
console.log(NewList.array);

const object = { a: 1, b: 2, c: 3 };
for (const math in object)
console.log(object);
alert ('tablica Matyldy');
confirm('Czy lubisz Jacka?');

const array1 = ['a', 'b', 'c'];
for (const element of array1);
console.log(array1);

const number = 10;

if(number > 0)
{
  console.log('Jest dodatnia')
}
var dict = new Object()
var dict = {
    "firstName": "Jan",
    "lastName": "Kowalski",
    "age": 30,
    "avgScore": 30.5
}

console.log(
    Object.keys(dict)
)

console.log(
    Object.values(dict)
)
let numbers = [2, 4, 6, 8, 16, 32, 64, 128]
let func = (element) => Math.sqrt(element)

console.log(
    numbers.map(func)
)

console.log(
    numbers
)

const memory = new Map([
  [0, 0], [1, 1]
]);
function fib(n){
  if (memory.has(n)) {
      return memory.get(n);
  } else {
      memory.set(n, fib(n - 1) + fib(n - 2))
      return memory.get(n);
  }
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
      console.log("Iteracja nr", i, "Status listy:", array)

      for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j] < array[j + 1]) {
              let temp = array[j]
              array[j] = array[j + 1]
              array[j + 1] = temp
          }
      }
  }

  console.log("Posortowana tablica")
  console.log(array)
}

let numberss = [1, 7, 12, 1, 0, 22, 1, 3, 5]
bubbleSort(numberss)

function insertionSort(arr) {
  let len = arr.length;

  for (let i = 1; i < len; i++) {
      let currentElement = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > currentElement) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = currentElement;
  }
  return arr;
}
let numbers1 = [64, 34, 25, 12, 22, 11, 90];
let sortedArray1 = insertionSort(numbers1);
console.log(sortedArray1);