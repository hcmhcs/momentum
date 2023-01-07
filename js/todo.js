const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();

}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText=newTodo;
  btn.innerText="x";
  toDoList.appendChild(li);
  btn.addEventListener("click",deleteTodo);
  
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);

