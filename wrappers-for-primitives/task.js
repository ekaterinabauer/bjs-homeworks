'Use strict'
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

let finalDate = 2021;
let today = new Date();
let year = today.getFullYear();
let date = (finalDate - year) * 12;
function calculateTotalMortgage(percent, contribution, amount, date) {
  let needToPay = amount - contribution;
  let p = persent / 12;
  let monthlyFee = needToPay * (p + p / ((Math.pow(1+p, date)-1)));
  let totalAmount = monthlyFee * date + contribution;
  return (totalAmount);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name == undefined || name == null || Boolean(name) == false) {
    name = 'Аноним';
  }
  let greeting = `Привет, мир! Меня зовут ${name}`
  return (greeting);
}