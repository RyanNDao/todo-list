/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task_items.js":
/*!***************************!*\
  !*** ./src/task_items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateNewTask": () => (/* binding */ CreateNewTask)
/* harmony export */ });
class Task {
    constructor(title, description, dueDate, priority, completed){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed
    }

    changePriority = () => {
        this.priority = (!this.priority)
    }
}


function CreateNewTask(title, description, dueDate, priority, completed, project){
    let newTask = new Task(title, description, dueDate, priority, completed);
    project.addTaskToProject(newTask);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/project_items.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateNewProject": () => (/* binding */ CreateNewProject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_items */ "./src/task_items.js");


let listOfProjects = []
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listOfProjects);

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

function CreateNewProject(name, color, tasks){
    let newProject = new Project(name, color, tasks=[])
    listOfProjects.push(newProject)
    return newProject;
}


CreateNewProject('Self Improvement','blue',[])
CreateNewProject('Finances and Making Monies','red',[])
CreateNewProject('Education','green',[])

;(0,_task_items__WEBPACK_IMPORTED_MODULE_0__.CreateNewTask)('Work out','Hit the gym, twice daily', '3/14/22', '3', false, listOfProjects[0])
;(0,_task_items__WEBPACK_IMPORTED_MODULE_0__.CreateNewTask)('Make money','Start a side hustle','3/20/22', '1', false, listOfProjects[0])
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdF9pdGVtcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042Qzs7QUFFN0M7QUFDQSxpRUFBZSxjQUFjOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQWE7QUFDYiwyREFBYSw2RSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrX2l0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0X2l0ZW1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkXG4gICAgfVxuXG4gICAgY2hhbmdlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSAoIXRoaXMucHJpb3JpdHkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVOZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCwgcHJvamVjdCl7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgIHByb2plY3QuYWRkVGFza1RvUHJvamVjdChuZXdUYXNrKTtcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDcmVhdGVOZXdUYXNrIH0gZnJvbSBcIi4vdGFza19pdGVtc1wiO1xuXG5sZXQgbGlzdE9mUHJvamVjdHMgPSBbXVxuZXhwb3J0IGRlZmF1bHQgbGlzdE9mUHJvamVjdHNcblxud2luZG93Lmxpc3RPZlByb2plY3RzID0gbGlzdE9mUHJvamVjdHM7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbG9yLCB0YXNrcyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUsXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcixcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzICBcbiAgICB9O1xuICAgIFxuICAgIGFkZFRhc2tUb1Byb2plY3QgPSAodGFzaykgPT4ge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzaylcbiAgICB9O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVOZXdQcm9qZWN0KG5hbWUsIGNvbG9yLCB0YXNrcyl7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBjb2xvciwgdGFza3M9W10pXG4gICAgbGlzdE9mUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5cbkNyZWF0ZU5ld1Byb2plY3QoJ1NlbGYgSW1wcm92ZW1lbnQnLCdibHVlJyxbXSlcbkNyZWF0ZU5ld1Byb2plY3QoJ0ZpbmFuY2VzIGFuZCBNYWtpbmcgTW9uaWVzJywncmVkJyxbXSlcbkNyZWF0ZU5ld1Byb2plY3QoJ0VkdWNhdGlvbicsJ2dyZWVuJyxbXSlcblxuQ3JlYXRlTmV3VGFzaygnV29yayBvdXQnLCdIaXQgdGhlIGd5bSwgdHdpY2UgZGFpbHknLCAnMy8xNC8yMicsICczJywgZmFsc2UsIGxpc3RPZlByb2plY3RzWzBdKVxuQ3JlYXRlTmV3VGFzaygnTWFrZSBtb25leScsJ1N0YXJ0IGEgc2lkZSBodXN0bGUnLCczLzIwLzIyJywgJzEnLCBmYWxzZSwgbGlzdE9mUHJvamVjdHNbMF0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9