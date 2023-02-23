const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".push");
const todoList = document.querySelector("ul");
const newTask = document.querySelector(".newtask");

const todos = ["hosue", "life", "benz"];

function deleteItem(e) {
  let task = e.target.parentElement.previousElementSibling.innerHTML;
  let index = todos.indexOf(task);
  if (index !== -1) {
    todos.splice(index, 1);
    allList();

    console.log(allList());
  }
}

function allList() {
  todoList.innerHTML = "";
  todos.forEach((listItem) => {
    const newItem = document.createElement("li");
    newItem.classList.add("list");
    newItem.innerHTML = listItem;
    // add delete button
    const anchorElement = document.createElement("a");
    anchorElement.classList.add("deletebtn");
    anchorElement.innerHTML = `<i class="ri-delete-bin-line"></i>`;
    newItem.appendChild(anchorElement);
    // add li to ul element
    todoList.appendChild(newItem);
    // delete button function
    anchorElement.addEventListener("click", (e) => deleteItem(e));
  });
  todoInput.value = "";
}
allList();

function addTask() {
  if (todoInput.value) {
    todos.push(todoInput.value);
    allList();
  }
}
newTask.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
