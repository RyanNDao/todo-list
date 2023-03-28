import { createElement } from "./index.js";
import listOfProjects from './project_items.js'

const projectsTab = document.querySelector('.projects-tab');

export function DisplayProjects(){
    projectsTab.innerHTML = '';
    projectsTab.appendChild(createElement('h1','project-tab-title','PROJECTS'))
    listOfProjects.forEach((project)=>{
        let projectTabRow = createElement('button','project-row-container', project.name);
        projectsTab.appendChild(projectTabRow)
    })
}

export function DisplayTasksFromProject(project){
    let tasksDiv = createElement('div','tasks-container','');
    tasksDiv.appendChild(createElement('h2','project-header',project.name));
    project.tasks.forEach((task)=>{
        let taskRow = createElement('div','task-row',task.title);
        tasksDiv.appendChild(taskRow);
    })
    projectsTab.parentNode.insertBefore(tasksDiv,projectsTab.nextSibling);
}




window.DisplayProjects = DisplayProjects;
window.DisplayTasksFromProject = DisplayTasksFromProject;