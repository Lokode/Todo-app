"use strict";

//selectors
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list"); //event listener

todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  //prevent from submitting
  event.preventDefault(); //todo div

  var todoDiv = document.createElement("div");
  todoDiv.classList.add(".todo"); //create Li

  var newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); //check mark button

  var completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton); //check trash button

  var trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton); //append to list

  todoList.appendChild(todoDiv);
}