import './style.css'

import { CreateNewTask } from './task_items.js';
import listOfProjects, { CreateNewProject } from './project_items.js';
import { DisplayProjects, DisplayTasksFromProject } from './dom.js'
import { GetLocalStorageProjects } from './utilities';


window.CreateNewTask = CreateNewTask;
window.DisplayProjects = DisplayProjects;
window.DisplayTasksFromProject = DisplayTasksFromProject;

GetLocalStorageProjects();
DisplayProjects();
// DisplayTasksFromProject(listOfProjects[0]);