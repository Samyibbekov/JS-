// Класстын 4 принциби
// 1. обстракция 
// 2. Наследование
// 3. Полиморфизм
// 4. Инкапсуляция

//обстракный класс
//constructor() - это чертеж из чешо состаит класс
//extends  - Наследник, наследует от Animal
/*class Animal {
constructor(options){
   this.name = options.name
   this.age = options.age
   this.hasTail = options.hasTail
   this._voice = options._voice
   this.color = options.color
}
voice(){
   console.log('i am animal')
 }
}
const anialByClass = new Animal({
   name: 'Animal',
   ahe: 10,
   hasTail: true
})

console.log(anialByClass)
 
// Наследование 

class Dog extends Animal{
   constructor(options){
      super(options)
      this.fangs = options.fangs

   }
   // Полиморфизм
  voice(){
   console.log(this._voice)
  }
}


const sharik = new Dog({
   name: 'Sharik',
   age: 5,
   hasTail: true,
   fangs: true,
   _voice: 'гав - гаф',
   color: 'brown'

})
console.log(sharik)

sharik.voice()*/

document.querySelector('.addBtn').onclick = function(){
   if(document.querySelector('input').value.length === 0){
      alert('Please, enter a task!')
   }else{
      document.querySelector('.tasks').innerHTML += `
      <div class ="task">
      <span class="taskName">
      ${document.querySelector('input').value}
      </span>
      <button class="delete">Delete</button>
      </div>
      `
      document.querySelector('input').value 
      
      //Delete
      //parentNode.remove()
 let delete_task = document.querySelectorAll('.delete')
 for(let i = 0; i < delete_task.length; i++){
   delete_task[i].onclick = function(){
      this.parentNode.remove()
   }
 }

//toggle
let tasks = document.querySelectorAll('.taskName')
for(let i = 0; i < tasks.length; i++){
   tasks[i].onclick = function(){
      this.classList.toggle('completed')
   }
}
   }
 
}
//1.git --version
//2.git config --global user.name"Samyibbekov"
//3.git config --global user.email "akzholbeksamyibbekov@gmail.com"
//1 git init
//2 git add .
//3.git status
//4.git commit -m "Файдын аты"
//5.git remote add origin - ссылка
//6.git branch 
//7.git push -u origin main