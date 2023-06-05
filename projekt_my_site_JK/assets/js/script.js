// let a = 97;
// let b = 80;
// let c = "97";

// console.log(a + b)
// console.log(a * b)

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


    // const box = document.getElementsByClassName("box__item");
    
    // for (let i =0; i< box.length; i++) {
    //     box[i].style.backgroundColor = "yellow";
    //  };
    //  console.log(box.length);

    //  const btnNext = document.getElementById("btnNext");
    //  let index = 0;

    //  let currentIndex = 0;
    //  let previousIndex = 0;

    //  box[index].style.backgroundColor = "#ff0000";

    //  console.log(box[0])

    //  btnNext.addEventListener("click", () => {
    //   if (index=== box.length -1){
    //     alert (`koniec`)
    //     return;
    //   }
    //     index++;
    //     console.log(box[index])
    //     box[index].style.backgroundColor = "#ff0000";
    //  })



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
