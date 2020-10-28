"use strict";

//selectors
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
var filterOption = document.querySelector(".filter-todo"); //event listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo); //functions

function addTodo(event) {
  //prevent from submitting
  event.preventDefault(); //todo div

  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); //create Li

  var newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); //check mark button

  var completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton); //check trash button

  var trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton); //append to list

  todoList.appendChild(todoDiv); //clear todo input

  todoInput.value = "";
}

function deleteCheck(e) {
  var item = e.target; //delete todo

  if (item.classList[0] === "trash-btn") {
    var todo = item.parentElement; //animation

    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  } //check mark


  if (item.classList[0] === "complete-btn") {
    var _todo = item.parentElement;

    _todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  var todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }

        break;

      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }

    }
  });
}