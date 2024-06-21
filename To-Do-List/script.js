let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

const getTodos = (value) => {
  // Creating new element
  let todo = document.createElement("div");
  let textElement = document.createElement("span");

  // Setting values & styles
  textElement.innerHTML = value;
  // Append child to the DOM
  todo.appendChild(textElement);

  // Create close button
  let closeElement = document.createElement("span");
  closeElement.innerHTML = "&times";
  closeElement.classList.add("delete");
  // Attach events
  closeElement.addEventListener("click", (e) => {
    todos.removeChild(todo);
  });

  todo.appendChild(closeElement);
  todo.classList.add("todo"); 
  return todo;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodos(value)); 
  input.value = "";
});
