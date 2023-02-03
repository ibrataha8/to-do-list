const todoInput = document.querySelector(".todo-inpt")
const todoBoton = document.querySelector(".todo-boton")
const todoList = document.querySelector(".todo-List")

todoBoton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)
function addTodo(event){
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Creé le li
    const newTodo = document.createElement('li')
    if (todoInput.value.trim() != ""){
    newTodo.innerText=todoInput.value

    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // button check
    const completeButton = document.createElement("button");
    completeButton.innerHTML='<i class="fa-solid fa-pen-fancy"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton)    
    // button Suppr
    const trashButton = document.createElement("button");
    trashButton.innerHTML='<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("supp-btn");
    todoDiv.appendChild(trashButton)
    // ajouter
    todoList.appendChild(todoDiv)
    todoInput.value = ""}}
                                                                                                        

    function deleteCheck(e) {
        const item = (e.target);
        // delete todo
        if(item.classList[0] === "supp-btn"){
        const todo = item.parentElement;
        todo.classList.add("fail");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
        }}
