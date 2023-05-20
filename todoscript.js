"use strict";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector("#addbutton");

const addTask = function () {
  console.log(`func working`);
  if (inputBox.value === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
};

const addTaskEnter = function (e) {
  console.log(`func working`);
  if (e.key === "Enter") {
    if (inputBox.value === "") {
      alert("you must write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      inputBox.value = "";
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
      saveData();
    }
  }
};
inputBox.addEventListener("keydown", addTaskEnter);

addButton.addEventListener("click", addTask);

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
