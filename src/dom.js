import { createElement, createFormElement, UpdateLocalStorage } from "./utilities.js";
import listOfProjects from './project_items.js';
import { format } from 'date-fns';
import { CreateNewTask } from "./task_items.js";
import { CreateNewProject } from "./project_items.js";

const projectsTab = document.querySelector('.projects-tab');
const mainContainer = document.querySelector('.main-container');

export function DisplayProjects(){
    projectsTab.innerHTML = '';
    projectsTab.appendChild(createElement('h1','project-tab-title','PROJECTS'))
    listOfProjects.forEach((project)=>{
        let projectTabRow = createElement('button','project-row-container', project.name);
        projectTabRow.addEventListener('click',()=>{DisplayTasksFromProject(project)});
        projectsTab.appendChild(projectTabRow);
    })
    let addNewProject = createElement('div','add-new-button','+');
    addNewProject.addEventListener('click',()=>{
        OpenTaskEditor('project');
    })
    projectsTab.appendChild(addNewProject);
}

export function DisplayTasksFromProject(project){
    window.currentProject = project;
    projectsTab.parentNode.removeChild(projectsTab.nextElementSibling);
    let tasksDiv = createElement('div','tasks-container','');
    tasksDiv.appendChild(createElement('h2','project-header',project.name));
    project.tasks.forEach((task)=>{
        let checkbox = createElement('button','task-button','');
        let taskRow = createTaskRow(checkbox, task)
        tasksDiv.appendChild(taskRow);
    })
    let addNewTask = createElement('div','add-new-button','+');
    addNewTask.addEventListener('click',()=>{
        OpenTaskEditor();
    })
    tasksDiv.appendChild(addNewTask);
    projectsTab.parentNode.insertBefore(tasksDiv,projectsTab.nextSibling);
}

function createDropdownForTask(task){
    let dropdownContainer = createElement('div',['dropdown-container','closed'],'');
    dropdownContainer.appendChild(createElement('p','',task.description));
    return dropdownContainer
}

function changeDropdownStatus(){
    if (this.classList.contains('closed')){
        this.textContent = '-';
        this.classList.remove('closed');
        this.classList.add('open');
        this.parentNode.nextSibling.classList.remove('closed');
        this.parentNode.nextSibling.classList.add('open');
    } else if (this.classList.contains('open')){
        this.textContent = '+';
        this.classList.remove('open');
        this.classList.add('closed');
        this.parentNode.nextSibling.classList.remove('open');
        this.parentNode.nextSibling.classList.add('closed');
    };
    UpdateLocalStorage();
}

function OpenTaskEditor(task){
    const body = document.querySelector('body');
    let overlay = createElement('div','overlay','');
    body.appendChild(overlay);

    if (task === 'project'){
        var taskEditorHeader = createElement('h3','task-editor-header',`Create New Project`);
        var form = DesignProjectCreatorForm(task);
    } else if (task){
        var taskEditorHeader = createElement('h3','task-editor-header',`Editing ${task.title}`);
        var form = DesignTaskEditorForm(task);
    } else if (!task){
        var taskEditorHeader = createElement('h3','task-editor-header',`Create New Task`);
        var form = DesignTaskEditorForm(); 
    }
    let taskEditorContainer = createElement('div','task-editor-container','');
    let closeButton = createElement('span','task-editor-close','X');
    closeButton.addEventListener('click',CloseTaskEditor)
    taskEditorContainer.appendChild(closeButton);
    taskEditorContainer.appendChild(taskEditorHeader);
    taskEditorContainer.appendChild(form);
    mainContainer.appendChild(taskEditorContainer);
}

function CloseTaskEditor(){
    const body = document.querySelector('body');
    body.removeChild(document.querySelector('.overlay'));
    mainContainer.removeChild(document.querySelector('.task-editor-container'));
}

function DesignProjectCreatorForm(){
    let form = createElement('form','task-editor-form','');
    let projectTitle = createFormElement('projectName','Project Name','text','Your project name here!','', true, true);
    form.appendChild(projectTitle);
    let submitButton = createElement('button','form-submit','Create!');
    submitButton.addEventListener('click',(event)=>{
        event.preventDefault();
        if (document.querySelector('.task-editor-form').reportValidity()){
            let projectName = document.getElementById('projectName').value;
            CreateNewProject(projectName,'blue',[]);
            CloseTaskEditor();
            DisplayProjects();
            UpdateLocalStorage();
        }
    })
    form.appendChild(submitButton);
    return form;
}   

function DesignTaskEditorForm(task){
    let form = createElement('form','task-editor-form','');
    if (task){
        var taskTitle = createFormElement('taskTitle','Task Name*','text','Your task name here!',task.title, true, true);
        var taskDueDate = createFormElement('dueDate','Task Due Date*','date','',format(new Date(task.dueDate), 'yyyy-MM-dd'), true, true);
        var taskDescription = createFormElement('description','Task Description','','Your task description here!',task.description, false);
        var submitButton = createElement('button','form-submit','Edit');
        submitButton.addEventListener('click',(event)=>{
            if (document.querySelector('.task-editor-form').reportValidity()){
                task.editTaskDetails(event);
                CloseTaskEditor();
                DisplayTasksFromProject(window.currentProject);
                UpdateLocalStorage();
            };
        })
        var deleteButton = createElement('button','delete-task','Delete Task');
        deleteButton.addEventListener('click',(event)=>{
            event.preventDefault();
            let idx = window.currentProject.tasks.indexOf(task);
            if (idx !== -1){
                window.currentProject.tasks.splice(idx,1);
            }
            CloseTaskEditor();
            DisplayTasksFromProject(window.currentProject);
            UpdateLocalStorage();
        });
        form.appendChild(deleteButton);
    } else if(!task){
        var taskTitle = createFormElement('taskTitle','Task Name','text','Your task name here!','', true, true);
        var taskDueDate = createFormElement('dueDate','Task Due Date','date','',format(new Date(), 'yyyy-MM-dd'), true, true);
        var taskDescription = createFormElement('description','Task Description','','Your task description here!','', false);
        var submitButton = createElement('button','form-submit','Edit');
        submitButton.addEventListener('click',(event)=>{
            if (document.querySelector('.task-editor-form').reportValidity()){
                let task = CreateNewTask('','',new Date(),'1',false,window.currentProject);
                task.editTaskDetails(event);
                CloseTaskEditor();
                DisplayTasksFromProject(window.currentProject);
                UpdateLocalStorage();
            };
        });
    }
    let priorityDiv = createElement('div','priority-div','Priority:');
    for (let key of [1,2,3]){
        let priorityInput = createElement('input','','');
        priorityInput.type = 'radio';
        priorityInput.name = 'priority';
        priorityInput.id = `priority-${key}`;
        priorityInput.value = key;
        let priorityLabel = createElement('label','',key);
        priorityLabel.for = `priority-${key}`;
        if (task){
            if (task.priority == key){
                priorityInput.checked = true;
            }
        } else {
            priorityInput.checked = true;
        }
        priorityDiv.appendChild(priorityInput);
        priorityDiv.appendChild(priorityLabel);
    }
    form.appendChild(taskTitle);
    form.appendChild(taskDueDate);
    form.appendChild(taskDescription);
    form.appendChild(priorityDiv);
    form.appendChild(submitButton);
    return form
}

function createTaskRow(button, task){
    button.addEventListener('click',()=>{task.changeCompleted(button)});
    let taskRow = createElement('div','task-row','');
    let taskContainer = createElement('div','task-container','');
    let taskTitleContainer = createElement('div','task-title-container','');
    let taskTitle = createElement('span','task-title',task.title);
    taskTitle.addEventListener('click',()=>{OpenTaskEditor(task)})
    let taskDueDate = createElement('span','task-due-date',` (Due ${(task.dueDate).replaceAll('-','/')})`);
    taskTitleContainer.appendChild(taskTitle);
    taskTitle.parentNode.insertBefore(taskDueDate, taskTitle.nextSibling);
    let dropdownButtonContainer = createElement('div',['dropdown-button-container','closed'],'+');
    dropdownButtonContainer.addEventListener('click',changeDropdownStatus);
    taskTitleContainer.appendChild(dropdownButtonContainer);
    taskContainer.appendChild(taskTitleContainer);
    taskContainer.appendChild(createDropdownForTask(task));
    if (task.completed){
        button.classList.add('checked');
        taskRow.classList.add('task-completed');
    }
    taskRow.insertBefore(button,taskRow.firstChild);
    taskRow.appendChild(taskContainer);
    return taskRow
}



window.DisplayProjects = DisplayProjects;
window.DisplayTasksFromProject = DisplayTasksFromProject;