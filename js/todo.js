const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const toDos = [];

function savedTodo() {
  localStorage.setItem("todos", toDos);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.innerText = "❌";

  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  savedTodo();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
