// const add = document.querySelector(".push");
// const newtask = document.querySelector(".newtask");
// document.querySelector(".push").onclick = function () {
//   if (document.querySelector(".newtask input").value.length == 0) {
//     alert("Kindly Enter Task Name!!!!");
//   }
// };

// let todoItem = [];

// selectors

// addBtn.addEventListener("click", addTodo);
// let todos = [];
// // function
// function addTodo() {
//   todos.push(todoInput.value);
// }
// function printTodo() {
//   todoList.innerHTML = "";
//   for (let i = 0; i < todos.length; i++) {
//     const newTodo = document.createElement("li");
//     const listItem = newTodo.appendChild(document.createTextNode(todos[i]));
//     todoList.appendChild(listItem);
//     console.log("hello");
//   }
// }
// document.getElementById("click", function () {
//   addTodo();
//   printTodo();
// });

// const todos = [];
// addBtn.addEventListener("click", function () {
//   todos.push(todoInput.value);
// });
// function show() {
//   todoList.innerHTML = list;
// }

// const todoInput = document.querySelector(".todo-input");
// const addBtn = document.querySelector(".push");
// const todoList = document.querySelector(".todo-list");
// addBtn.addEventListener("click", addTodo);

// function addTodo() {
//   // event.preventDefault();

//   // add div todo

//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   // create li
//   const newTodo = document.createElement("li");
//   newTodo.classList.add("todo-item");
//   newTodo.innerText = todoInput.value;
//   todoDiv.appendChild(newTodo);
//   // check mark button
//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = '<i class="ri-check-line"></i>';
//   completedButton.classList.add("complete-btn");
//   todoDiv.appendChild(completedButton);
//   // delete button
//   const deleteButton = document.createElement("button");
//   deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>';
//   deleteButton.classList.add("delete-button");
//   todoDiv.appendChild(deleteButton);
//   // apppend to list
//   todoList.appendChild(todoDiv);
//   // clear todo input valmue

//   todoInput.value = "";
// }

const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".push");
const todoList = document.querySelector(".todo-list");

const todos = [];

addBtn.addEventListener("click", addTodo);
function addTodo() {
  todoList.innerHTML = "";
  todos.push(todoInput.value);

  for (let i = 0; i < todos.length; i++) {
    const listItem = document.createTextNode(todos[i]);
    // creat list element
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.appendChild(document.createTextNode(todos[i]));
    todoList.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="ri-check-line"></i>';
    completedButton.classList.add("complete-btn");
    todoList.appendChild(completedButton);
    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>';
    deleteButton.classList.add("delete-btn");
    // todoList.appendChild(deleteButton);
    // deleteButton.addEventListener("click", function () {
    //   newTodo.parentNode.removeChild(newTodo, completedButton);
    // });
    // btn.textContent = "delete";
    deleteButton.addEventListener("click", () => todoList.remove(newTodo));
    todoList.appendChild(deleteButton);
  }
  todoInput.value = "";
}
