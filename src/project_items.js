import { CreateNewTask } from "./task_items";

let listOfProjects = []
export default listOfProjects

window.listOfProjects = listOfProjects;

class Project {
    constructor(name, color, tasks){
        this.name = name,
        this.color = color,
        this.tasks = tasks  
    };
    
    addTaskToProject = (task) => {
        this.tasks.push(task)
    };

}

export function CreateNewProject(name, color, tasks){
    let newProject = new Project(name, color, tasks=[])
    listOfProjects.push(newProject)
    return newProject;
}


CreateNewProject('Self Improvement','blue',[])
CreateNewProject('Finances and Making Monies','red',[])
CreateNewProject('Education','green',[])

CreateNewTask('Work out','Hit the gym, twice daily', '3/14/22', '3', false, listOfProjects[0])
CreateNewTask('Make money','Start a side hustle','3/20/22', '1', false, listOfProjects[0])