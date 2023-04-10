import listOfProjects from "./project_items";

export function createElement(type, classes, text){
    let element = document.createElement(type);
    if (classes.length !== 0){
        typeof(classes) === 'object' ? element.classList.add(...classes) : element.classList.add(classes);
    }
    element.textContent = text;
    return element;
}


export function createFormElement(id='',name='',inputType='',placeholder='',value='',useInput=true,required=false){
    let formInputDiv = createElement('div','form-input','');
    let formLabel = createElement('label','',name);
    formLabel.for = id;
    if (useInput){
        let formInput = createElement('input','','');
        formInput.id = id;
        formInput.type = inputType;
        formInput.value = value;
        formInput.required = required;
        formInput.placeholder = placeholder;
        formInputDiv.appendChild(formLabel);
        formInputDiv.appendChild(formInput);
    } else {
        let formTextarea = createElement('textarea','','');
        formTextarea.id = id;
        formTextarea.textContent = value; 
        formTextarea.placeholder = placeholder;
        formTextarea.required = required;
        formInputDiv.appendChild(formLabel);
        formInputDiv.appendChild(formTextarea);
    }

    return formInputDiv;
}

export function UpdateLocalStorage(){
    localStorage.listOfProjects = JSON.stringify(listOfProjects);
}

export function GetLocalStorageProjects(){
    /* TODO
    if (localStorage.listOfProjects){
        console.log(JSON.parse(localStorage.listOfProjects))
        listOfProjects = JSON.parse('[{"name":"123","color":"blue","tasks":[]}]');
    }
    */
}