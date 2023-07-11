// Регулярные выражения - Regular ре
// flag i - регистрнезависымый  поиск
// flag g - Глобальный поиск
// replace () - Заменит массивди же перменныйды 
// /\d/ - 
// /\w/ - 


/*const string = prompt('Nachname');
const redExt  = /a/ig 

console.log(string.match(redExt))*/

/*const symbols = 'AaaaaBbbbbbNnnnn'
const redFex = /a/ig
console.log(symbols.match(redFex))*/

/*const numbers = '123212322'
const redFex = /\w/g
/*console.log(numbers.match(redFex))*/
//console.log(numbers.replace(redFex, '*'))

// DOM - document object model

// const phoneInput = document.querySelector('#phonInput')
// const phoneCheck = document.querySelector('.phonCheck')
// const phoneResult = document.querySelector('.phonResult')
 
// const redExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/ 
// phoneCheck.addEventListener('click', () => {
//    if(redExp.test(phoneInput.value)){
//       phoneResult.innerHTML = "Ok"
//       phoneResult.style.color ='green'
//    }else{
//       phoneResult.innerHTML = "Not Ok"
//       phoneResult.style.color = 'red'
//    }
// })

// Рекурсия

// let num = 0

// const count = () => {
//    num++
//    console.log(num)
//    if(num < 100){
//       count()
//    }
// }
// count()

const peoples = {
   John: {
      age:27,
      parents:{
         Nick:{
            age:45
         },
      Stella:{
         age:43
      }
      }
   },
   Dave: {
      age:22,
      parents:{
         Malick:{
            age:89
         },
      Kiki:{
         age:23
      }
      }
   },
   
   Ahmed:{
      age:30,
      parents:{
         Umar:{
            age:40
         },
      Sali:{
         age:73
      }
      }
   }
}

