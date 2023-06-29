//callback - колбек - функции выщего порядка// функция взывается внутри фнкции
// solid - правила для программиста 


/*function buttenClick(){
   return console.log('click')
}
let button = document.querySelector('.btn')
button.addEventListener('click', buttenClick)

/*function getMath(...nummbers){
   let newArrey = []
   for (let i = 0; i < nummbers.length; i++){
      newArrey.push(nummbers[i]**2)
   }
   return newArrey
}
console.log(getMath(1,2,3,54))*/

/*function doSomeMath(arrey, todo){
   let newArrey = []
   for(let i = 0 ; i < arrey.length; i++){
      newArrey.push(todo(arrey[i]))
   }
   return newArrey
}
 function sum(num) {
   return num + 2
 }

 console.log(doSomeMath([1,2,3,4], sum))*/


                      // todo list

//trim() - этот метот проверяет ест ли пробелы в функции
//prepend()- акыркы кошулган элементи устуго чыгарып берет

const input = document. querySelector('#input');
const createButton = document. querySelector('.create_button');
const todoList = document.querySelector('.todo_list')


const createTodo = () => {
   if(!input.value.trim()){
      return false
   }else{
      const div = document.createElement('div')
      const text = document.createElement('h3')
      const divButton = document.createElement('div')
      const deleteButton = document.createElement('button')
      const editButton = document.createElement('button')

      div. setAttribute('class', 'block_text')
      deleteButton.setAttribute('class', 'delete_button')
      editButton.setAttribute('class', 'edit_button')
      divButton.setAttribute('class', 'div_button')

      deleteButton.innerHTML = 'Delete'
      editButton.innerHTML = 'Edit'
      text.innerHTML = input.value

      divButton.append(deleteButton,editButton)
      div.append(text, divButton)
      todoList.prepend(div)

      deleteButton.onclick = () => div.remove()
      
   }
}

createButton.onclick = () => createTodo()

window.addEventListener('keydown', (keyboardEvent) => {
      if (e.code === 'Enter') createTodo()
   } )

   

