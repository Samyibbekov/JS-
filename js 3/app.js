                        // тернарные операторы

/*var age = prompt('enter your age')
console.log(age >=  18? 'ok': 'erroe') // бул метод программистердин жашоосун же4илдетет

// ушул эле кодду мындай жазса да болот

/*if(age >= 18){
   console.log('ok')
}else{
   console.log('error')
}*/

                     // truthy and falsy - выражения 
// falsy -> 0, -0, 0n, '', ``, null, undef, NaN, false

/*var elemrent = '0'
console.log(elemrent ? 'true':'false')*/

                    // переопределение переменных

/*var Number = 89; // Алгач нумбер болгон
Number = 'Aki'; // кийин  стринг болду
console.log(Number);*/

                    // array 
// JSON -бул обменка десек да болот

/*var arrey = ['qwerty', 654, null, undefined, NaN, true, {}, [] ] // ушулар баары массивдин ичине сактасак болот
console.log(arrey)
console.log(arrey[0])
console.log(arrey.length -1)
console.log(arrey[0][3])
arrey[9] = 'Salam!'
console.log(arrey[9])*/

                  // Методы массива 
// 1.push - массивдин акырына нумбер же стринг кошкп берет

/*var Number = [1,2,3,4,5,6 ]
Number.push(7,8)
console.log(Number)

// 2. concat - бул первоначальный массивди чыгарып берет, эгерде push колдонулса
var newArr = Number.concat(0,0)
console.log(newArr)

// 3. unshift - массивдин башына элемет кошкп берет

Number.unshift(9)
console.log(Number)

// 4. pop - бул массивдин эң акыркы элементин удалить этет

var lastNum = Number.pop()
console.log(Number)
console.log(lastNum)

// 5. Join - массивди стринг кылып берет
 
var newjoin = Number.join('-')
console.log(newjoin)*/

// 6.filter
/*var userd = [
   {name:'adam', age:34},
   {name:'malik', age:32},
   {name:'aki', age:24},
   {name:'Salich', age:12},
   {name:'Sat', age:14},
   {name:'Sai', age:23},
]
var name1 = userd.filter(userd => userd.name.toLowerCase(). includes('s'))
console.log(name1)

var age1 = userd.filter(userd => userd.age >= 18)
console.log(age1)*/

// 7.map -  изменяет все/ ар бир  элементтен өтөт 
/*var soms = [5000000,7800000,9800000,7600000]
var result = soms.map(i => i / 87 )
console.log(result)*/

// 8.forEach - не мутирует
var numbers = [12,3,45,34,56]
numbers.forEach(i => {
   var result = i * 2
   console.log($)
})

//цикл

/*var dollars = []
for(i = 0; i < soms.length; i++){
   dollars[i] = soms[i] / 87
}
console.log(dollars)
*/

// фунция
/*
 function getAllSum(arrey){
   var sum = 0
   for (var i = 0; i < arrey.length; i++){
      sum += arrey[i]
   }
   console.log(sum)
 }
 getAllSum([2,5,3])*/


                   // циклы 
// 1. while
//count = count +1
//count += 1

/*var count = 0
while(count <= 20){
console.log(count)
count++
}*/

// 2. for 
// incLudes - включон ли, есть ли маанилерин берет true , folse
// continue -  кодду токтобостон улантып окуп кетет
/*for(var i = 1; i <= 20; i++){
console.log(i)
}*/

/*var names = ['Bektur','Akzhol','Ali','Musa']
var blacklist = ['mucha', 'bektur', 'ali']

for(var i = 0; i < names.length; i++){
  if (blacklist.includes(names[i].toLowerCase())){
  console.warn(`${names[i]} в черном списке`)
  continue
}
console.log(`${names[i]} добро пожоловать дорогой гость`)

}*/

// 3. for. .of бул цикл бир гана массив менен иштетилет

/*var array = [1,2,3,4,5,4,5,5,6,7,8,6,6,6,6,4,3,5]

var newArray = []
for (var i of array){
if (newArray.includes(i)) continue;
newArray.push(i)
}
console.log(array)
console.log(newArray)
//Array.from - бул метод баарын массивге айлантып берет
//Array.isArray - массив же массив эмес экенин аныктап берет
var newArr = Array.from(new Set  (array))  // хранятса тролько уникальные занчение, дубликаттар сакталбайт
console.log(newArr)*/
 
// 4. for. .in бир гана обьект менен иштейт

/*var object = {
   name: 'Aidana'
}
console.log (object.values(object))
for (var i in onabort){
   console.log(i)
}*/

// Тапшырма

/*var htmlTeg =  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol']
var tagsCounter = {}
for (var i = 0; i < htmlTeg.length; i++){
   var element = htmlTeg[i]
   if (tagsCounter.hasOwnProperty(element)){
      tagsCounter[element] +=1
   }else{
      tagsCounter[element] = 1
      }
}
console.log(tagsCounter)*/