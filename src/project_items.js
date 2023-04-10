import { CreateNewTask } from "./task_items";

var listOfProjects = []


// console.log(listOfProjects);

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

/* 
CreateNewProject('Self Improvement','blue',[])
CreateNewProject('Finances and Making Monies','red',[])
CreateNewProject('Education','green',[])
CreateNewProject('Fitness','green',[])

CreateNewTask('Work out','Hit the gym, twice daily', '3/14/22', '3', false, listOfProjects[0])
CreateNewTask('Make money','Start a side hustle','3/20/22', '1', true, listOfProjects[0])
CreateNewTask('Get Swag','Buy Gucci belt','3/25/22', '1', true, listOfProjects[0])

CreateNewTask('Obtain knawleg','Tai Lopez sponsorship','4/12/22', '1', true, listOfProjects[1])
*/