import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDays } from "./date.js";

export const readTask = () =>{
    const list = document.querySelector("[data-list]");
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(taskList);

    orderDays(dates);
    dates.forEach(date =>{
        const dateMoment = moment(date, "DD-MM-YYY");
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD-MM-YYY");
            const dif = dateMoment.diff(taskDate);
            if (dif === 0) list.appendChild(createTask(task))
        });
    });
};