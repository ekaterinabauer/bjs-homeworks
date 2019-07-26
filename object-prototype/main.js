function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
if (animal == undefined) {
    return null;
  }
  this.animal = animal;
  let sound = animal.sound;
  sound.prototype = animal;
  if (animal != undefined) {
    return sound;
  }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
  let count = 0;
  for (let i = 0; i < marks.length; i++){
      count += 1;
      sum += marks[i];
  }
  let average = sum / count;
  let roundedAverage = Math.round(average);
  return roundedAverage;
}