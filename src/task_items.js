import { format } from 'date-fns';

class Task {
    constructor(title, description, dueDate, priority, completed){
        this.title = title;
        this.description = description;
        this.dueDate = this.convertToDate(dueDate);
        this.priority = priority;
        this.completed = completed
    }

    convertToDate = (dateString) => {
        let date = format(new Date(dateString), 'MM-dd-yyyy');
        return date
    }

    changeCompleted = (button) => {
        this.completed = (!this.completed);
        if (this.completed){
            button.classList.add('checked');
            button.parentNode.classList.add('task-completed');
        } else {
            button.classList.remove('checked');
            button.parentNode.classList.remove('task-completed');
        }
    }

    editTaskDetails = (event)=>{
        event.preventDefault();
        this.title = document.getElementById('taskTitle').value;
        this.description = document.getElementById('description').value;
        let newDueDate = new Date(document.getElementById('dueDate').value);
        this.dueDate = format(new Date(newDueDate.getTime() + Math.abs(newDueDate.getTimezoneOffset()*60000)), 'MM-dd-yyyy');
        this.priority = document.querySelector('input[name="priority"]:checked').value;
    }

}


export function CreateNewTask(title, description, dueDate, priority, completed, project){
    let newTask = new Task(title, description, dueDate, priority, completed);
    project.addTaskToProject(newTask);
    return newTask;
}

