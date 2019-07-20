// Задача 1
function getSolutions( a, b, c ) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let x1 = new Object();
  let x2 = new Object();
  
  if (d > 0) {
    x1 = (- b + Math.sqrt(d)) / (2 * a);
    x2 = (- b - Math.sqrt(d)) / (2 * a);
    let roots = [x1, x2];    
    return({roots, d});
  } else if (d == 0) {
    x1 = - b / (2 * a);
    roots = [x1];
    return({roots, d});
  } else if (d < 0) {
    return({d});
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log('Значение дискриминанта: ' + result.d );
  if (result.d > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  } else if (result.d == 0){
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.d < 0) {
    console.log('Уравнение не имеет вещественных корней');
  }
}

showSolutionsMessage(1, -8, 12);
showSolutionsMessage(2, 4, 2);
showSolutionsMessage(1, 2, 3);


// Задача 2

function getAverageScore(data) {
  function averageArray(marks) {
   let sum = 0;
   let count = 0;
for (let i= 0; i < marks.length; i++) {
  count += 1;
  sum += marks[i];
}
return(sum / count);
 }
let result = [];

for (let i = 0; i <= 10; i++){
  result[i] = {
    algebra: averageArray(data.algebra),
    geometry: averageArray(data.geometry),
    russian: averageArray(data.russian),
    physics: averageArray(data.physics),
    music: averageArray(data.music),
    english: averageArray(data.english),
    poetry: averageArray(data.poetry),
    chemistry: averageArray(data.chemistry),
    french: averageArray(data.french),
    average: (averageArray(data.algebra + data.geometry + data.russian + data.physics + data.music + data.english + data.poetry + data.chemistry + data.french)/9
  }
  return result;
}
 
}


console.log(getAverageScore({
  algebra: [2, 4, 5, 3, 3, 5, 4],
  geometry: [3, 2, 3, 5],
  russian: [5, 4, 3, 2, 5, 3],
  physics: [5, 5],
  music: [5, 5, 5, 4, 2],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
}));

// Задача 3

function getPersonData(secretData) {
  function name (aaa, bbb) {
    if (aaa == 0) {
      return 'Родриго';
    } else if (aaa == 1) {
      return 'Эмильо';
    }else if (bbb == 1) {
      return 'Эмильо';
    } else if (bbb == 0) {
      return 'Родриго';
    }
  }
return
}