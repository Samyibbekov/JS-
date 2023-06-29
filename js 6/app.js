// arrow -function стрелычные функции /сфкратить код
/*const sayHAllo = (text) => {
  return console.log(text)
}
sayHAllo('Hallo world!')


//Lambda функции // функция в одну страку

const sayHAllo1 = text =>  console.log(text)
sayHAllo1('Hallo world!')


const getMax = (n1, n2) => console.log(n1 >= n2 ? n1:n2)
getMax(4,5)


const printSome = message => {
   let num = 90;
   return message + num
}
console.log(printSome('nummber'))

const groups  = ['23-02', '34-03', '56-03']
const allGroup = groups.map(i => `group ${i}`)
console.log(allGroup)

// замыкание в функциях // это случитса внутри функции
// облась видомости
// 1. Глобальная о.в
// 2. Функциональная 
// 3. Блочная
function createPlayer(name) {
   let score = 0 
   return function scoreCount(){
      score ++
      return `${name} - ${score}  балла`
   }
}
const player1 = createPlayer('Aki')
const player2 = createPlayer('Saki')*/

// DOM -элементы
// querySelector () - добавить селектор
// addEventListener() - слушитель событьи
// document => querySelector() - прличить по селекторы
// addEventListener () -слушитель событьи // бул жерге прпметр жазылат
// createElement() - добавить элемент
// classList.add - добавить класс
// body.appendChild() - добвить дочерный элемент
// `` - js гл страницага чыгарып берет
/*document.querySelector('.btn').addEventListener('click', function() {
      console.log('вы нажали на кнопку')
   })


const div = document.createElement('div')
div.classList.add('wrapper')
const body = document.body
body.appendChild(div)
const header = document.createElement('h1')
header.textContent = 'Frond -End 27-03'
body.appendChild(header)

const ul = `
<ul>
<li>Salam</li>
</ul
`
div.innerHTML = ul*/


const input = document.querySelector('input')
const increment = document.querySelector('#increment')
const decrement = document.querySelector('.decrement')


