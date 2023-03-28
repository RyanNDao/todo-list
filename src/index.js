import './style.css'

import { CreateNewTask } from './task_items.js';
import listOfProjects, { CreateNewProject } from './project_items.js';
import { DisplayProjects, DisplayTasksFromProject } from './dom.js'


window.CreateNewTask = CreateNewTask;


export function createElement(type, classes, text){
    let element = document.createElement(type);
    if (classes.length !== 0){
        typeof(classes) === 'object' ? element.classList.add(...classes) : element.classList.add(classes);
    }
    element.textContent = text;
    return element;
}

DisplayProjects();
DisplayTasksFromProject(listOfProjects[0]);

