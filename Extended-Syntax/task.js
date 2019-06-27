"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
 if (d > 0) {
   x = [((- b + Math.sqrt(d)) / 2 * a), ((- b - Math.sqrt(d)) / 2 * a)];
 } else if (d = 0) {
   x = [- b / 2 * a];
 } else {
   x = [];
 }
 console.log(x);
    // код для задачи №1 писать здесь
    //return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
   let today = new Date();
let year = today.getFullYear();
let age = year - dateOfBirthday;
  if (age >= 18) {
  result = (`Не желаете ли олд-фэшн, ${name}?`);
  } else {
  result = (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  }
  console.log(result);
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += marks[i];
  }
    if (marks.length > 5) { 
    averageMark = ('Слишком много оценок', marks.slice(0, 5), (sum / marks.slice(0, 5).length));
  } else {
    averageMark = (sum / marks.length);
    }
    console.log(averageMark);
    // код для задачи №3 писать здесь
    //return averageMark;
}
