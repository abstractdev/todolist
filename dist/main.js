/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(title) {
    this.title = title;
  }
  showNewProject(mainContainer) {
    let projectsDiv = document.createElement("div");
    projectsDiv.classList.add("projectsDiv");
    projectsDiv.textContent = this.title;
    mainContainer.appendChild(projectsDiv);
  }
  saveProjectToLocalStorage(mainContainer, newProject) {
    localStorage.setItem((mainContainer.childElementCount), JSON.stringify(newProject));
      console.log(localStorage.getItem(mainContainer.childElementCount).toString());
  }
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


class Task extends _project__WEBPACK_IMPORTED_MODULE_0__.Project{
    constructor (title, project, description, dueDate, priority, notes) {
        super();
        this.title = title
        this.project = project
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
    }

    showNewTask(mainContainer) {
        let tasksDiv = document.createElement('div');
        tasksDiv.classList.add('tasks-div');
        tasksDiv.textContent = this.title;
        mainContainer.appendChild(tasksDiv);
    }

    saveTaskToLocalStorage(mainContainer, newTask) {
        localStorage.setItem((mainContainer.childElementCount), JSON.stringify(newTask));
          console.log(localStorage.getItem(mainContainer.childElementCount).toString());
      }
    
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



const pageLoad = (() => {
  const openTask = document.querySelector("#open-task");
  const taskModalContainer = document.querySelector("#task-modal-container");
  const closeTask = document.querySelector("#close-task");
  const taskForm = document.querySelector("#task-form");
  const title = document.querySelector("#title");
  const project = document.querySelector("#project");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#dueDate");
  const priority = document.querySelector("#priority");
  const notes = document.querySelector("#notes");
  const mainContainer = document.querySelector(".main-container");
  const openProject = document.querySelector("#open-project");
  const closeProject = document.querySelector("#close-project");
  const projectModalContainer = document.querySelector(
    "#project-modal-container"
  );
  const projectForm = document.querySelector("#project-form");
  const projectTitle = document.querySelector("#project-title");

  const displayNewTask = (() => {
    openTask.addEventListener("click", () => {
      taskModalContainer.classList.add("show");
    });
    closeTask.addEventListener("click", (e) => {
      e.preventDefault();
      const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(
        title.value,
        project.value,
        description.value,
        dueDate.value,
        priority.value,
        notes.value
      );
      newTask.showNewTask(mainContainer);
      newTask.saveTaskToLocalStorage(mainContainer, newTask);
      taskForm.reset();
      taskModalContainer.classList.remove("show");
    });
  })();
  const displayNewProject = (() => {
    openProject.addEventListener("click", () => {
      projectModalContainer.classList.add("show");
    });

    closeProject.addEventListener("click", (e) => {
      e.preventDefault();
      const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projectTitle.value);
      newProject.showNewProject(mainContainer);
      newProject.saveProjectToLocalStorage(mainContainer, newProject);
      projectForm.reset();
      projectModalContainer.classList.remove("show");
    });
  })();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZjOztBQUVqQyxtQkFBbUIsNkNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ007O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLHVDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxuICBzaG93TmV3UHJvamVjdChtYWluQ29udGFpbmVyKSB7XG4gICAgbGV0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNEaXZcIik7XG4gICAgcHJvamVjdHNEaXYudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuICB9XG4gIHNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UobWFpbkNvbnRhaW5lciwgbmV3UHJvamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKChtYWluQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50KSwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpO1xuICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0obWFpbkNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCkudG9TdHJpbmcoKSk7XG4gIH1cbn1cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsImltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0J1xuXG5jbGFzcyBUYXNrIGV4dGVuZHMgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgIH1cblxuICAgIHNob3dOZXdUYXNrKG1haW5Db250YWluZXIpIHtcbiAgICAgICAgbGV0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWRpdicpO1xuICAgICAgICB0YXNrc0Rpdi50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NEaXYpO1xuICAgIH1cblxuICAgIHNhdmVUYXNrVG9Mb2NhbFN0b3JhZ2UobWFpbkNvbnRhaW5lciwgbmV3VGFzaykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgobWFpbkNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCksIEpTT04uc3RyaW5naWZ5KG5ld1Rhc2spKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShtYWluQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50KS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IHtUYXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBwYWdlTG9hZCA9ICgoKSA9PiB7XG4gIGNvbnN0IG9wZW5UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXRhc2tcIik7XG4gIGNvbnN0IHRhc2tNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1tb2RhbC1jb250YWluZXJcIik7XG4gIGNvbnN0IGNsb3NlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtdGFza1wiKTtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIik7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVzXCIpO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgb3BlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tcHJvamVjdFwiKTtcbiAgY29uc3QgY2xvc2VQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1wcm9qZWN0XCIpO1xuICBjb25zdCBwcm9qZWN0TW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Byb2plY3QtbW9kYWwtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybVwiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuXG4gIGNvbnN0IGRpc3BsYXlOZXdUYXNrID0gKCgpID0+IHtcbiAgICBvcGVuVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGFza01vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgIH0pO1xuICAgIGNsb3NlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIHByb2plY3QudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgICAgbm90ZXMudmFsdWVcbiAgICAgICk7XG4gICAgICBuZXdUYXNrLnNob3dOZXdUYXNrKG1haW5Db250YWluZXIpO1xuICAgICAgbmV3VGFzay5zYXZlVGFza1RvTG9jYWxTdG9yYWdlKG1haW5Db250YWluZXIsIG5ld1Rhc2spO1xuICAgICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICAgIHRhc2tNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICB9KTtcbiAgfSkoKTtcbiAgY29uc3QgZGlzcGxheU5ld1Byb2plY3QgPSAoKCkgPT4ge1xuICAgIG9wZW5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0TW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgfSk7XG5cbiAgICBjbG9zZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlLnZhbHVlKTtcbiAgICAgIG5ld1Byb2plY3Quc2hvd05ld1Byb2plY3QobWFpbkNvbnRhaW5lcik7XG4gICAgICBuZXdQcm9qZWN0LnNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UobWFpbkNvbnRhaW5lciwgbmV3UHJvamVjdCk7XG4gICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgICAgcHJvamVjdE1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIH0pO1xuICB9KSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==