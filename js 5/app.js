                                    // ES6+
/*console.log(name)
var name = 'Aki';//     Hoisting  //сплает
console.log(name)*/

/*console.log(name1)
let  name1 = 'Aki'//     Hoisting /не сплает
console.log(name1)*/

                              // const не изменяемый тип даннных
/*const array = []
array.puch(9)
console.log(array)
//array = ''         // переименовать не возможно
*/

                     //rest- параметры, arguments - аргументы
//reduce()-Он метод reduce перебирает каждый элемент массива и сводит все его элементы к одному значению.

//arguments - аргументы
/*function getAllSum(){
   console.log(arguments)
   let sum = Array.from(arguments).reduce((n1, n2) => n1+n2)
   console.log(sum)
}
getAllSum(2,3)*/

//rest 64
//return - возврат результата
//others - массивди нумбер кылып чыгарып берет

/*function getAllSum2(...numbers){
   let sum = numbers.reduce((n1,n2) => n1+n2)
   console.log(sum)
}
getAllSum2(1,3,4,5,6)*/

/*function convertUSD(usd, ...som){
   console.log(usd, som)
   return som.map(i => i / usd)
}
console.log(convertUSD(87, 6000, 7000, 23000,670000))*/

/*const numbers = [1,2,3,4,5,6,7,8,9]
const [n1, n2, n3, n4, ...others] = numbers
console.log(n1,n2,n3,n4, others)*/

/*const el1 = [1,2,3]
const el2 = [4,5,6]
const el3 = [...el1, ...el2]
console.log(el3)*/

                     //this 



                  // default - params 

let arr = [1,1,1]
let newArr = arr.join()
console.log(newArr)

function joinArray(array, separator){
let result = ''
for (let i = 0; i < array.length; i++){
   const el = array[i]
   result += el + separator
}
return result
}
console.log(joinArray([1,2,3,4,5], '/'))
