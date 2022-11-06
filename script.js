import { addTask } from "./components/addTask.js";
import { readTask } from "./components/readTasks.js";

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

readTask();