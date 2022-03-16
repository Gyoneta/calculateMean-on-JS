let button = document.querySelector('#calculate')

button.onclick = function () {
  let grade1 = parseInt(document.querySelector('#firstGrade').value, 10)
  let grade2 = parseInt(document.querySelector('#secondGrade').value, 10)
  let result = (grade1 + grade2)/2
  console.log(result)
  
  document.querySelector('.showGrade').innerHTML = result
  
  if (grade1 > 10 || grade1 < 0 || grade2 > 10 || grade2 < 0 || !grade1  || !grade2 )
    document.querySelector('.showGrade').innerHTML = 'Favor inserir um número entre 0 e 10'
  
}
