class View {
  constructor() {
    this.newTask = document.querySelector("#new-task");
    this.taskModalContainer = document.querySelector("#task-modal-container");
    this.editTaskModalContainer = document.querySelector(
      "#edit-task-modal-container"
    );
    this.submitTask = document.querySelector("#submit-task");
    this.editSubmitTask = document.querySelector("#edit-submit-task");
    this.taskForm = document.querySelector("#task-form");
    this.openProject = document.querySelector("#open-project");
    this.submitProject = document.querySelector("#submit-project");
    this.editSubmitProject = document.querySelector("#edit-submit-project");
    this.projectModalContainer = document.querySelector(
      ".project-modal-container"
    );
    this.editProjectModalContainer = document.querySelector(
      ".edit-project-modal-container"
    );
    this.projectForm = document.querySelector("#project-form");
    this.projectTitle = document.querySelector("#project-title");
    this.editProjectTitle = document.querySelector("#edit-project-title");
    this.taskTitle = document.querySelector("#title");
    this.editTaskTitle = document.querySelector("#edit-title");
    this.taskDescription = document.querySelector("#description");
    this.editTaskDescription = document.querySelector("#edit-description");
    this.taskDueDate = document.querySelector("#dueDate");
    this.editTaskDueDate = document.querySelector("#edit-dueDate");
    this.taskNotes = document.querySelector("#notes");
    this.editTaskNotes = document.querySelector("#edit-notes");
    this.mainContainerTop = document.querySelector(".main-container-top");
    this.mainContainerTopTextContainer = document.querySelector(
      ".main-container-top-text-container"
    );
    this.mainContainerTopText = document.querySelector(
      ".main-container-top-text"
    );
    this.mainContainer = document.querySelector(".main-container");
    this.projectsContainer = document.querySelector(".projects-container");
    this.allProjects = document.querySelector("#all-projects");
    this.allTasks = document.querySelector("#all-tasks");
    this.container = document.querySelector(".container");
    this.taskModal = document.querySelector(".task-modal");
    this.todayButton = document.querySelector(".today-button");
  }

  renderAllProjects(projectArray) {
    while (this.mainContainer.firstChild) {
      this.mainContainer.removeChild(this.mainContainer.firstChild);
    }
    projectArray.forEach((element) => {
      this.projectsDisplay = document.createElement("div");
      this.projectsDisplay.classList.add("projectsDisplay");
      this.projectsDisplay.setAttribute(
        "data-id",
        projectArray[projectArray.indexOf(element)].id.toString()
      );
      this.mainContainer.appendChild(this.projectsDisplay);
      this.projectsText = document.createElement("div");
      this.projectsText.classList.add("projectsText");
      this.projectsText.textContent = element.title;
      this.projectsDisplay.appendChild(this.projectsText)
      this.projectsDeleteButton = document.createElement("button");
      this.projectsDeleteButton.classList.add("projectsDeleteButton");
      this.projectsDeleteButton.textContent = "Del";
      this.projectsDisplay.appendChild(this.projectsDeleteButton);

      const renderEditProjectModal = (() => {
        this.projectsDisplay.addEventListener("click", (e) => {
          if (e.target.className === "projectsText") {
            this.editProjectTitle.value =
              projectArray[projectArray.indexOf(element)].title;
            this.editProjectModalContainer.classList.add("show");
            this.editSubmitProject.setAttribute("data-id", e.target.parentNode.dataset.id);
          }
        });
      })();
    });
  }

  renderCurrentProject(currentProject) {
    while (this.mainContainerTopText.firstChild) {
      this.mainContainerTopText.removeChild(
        this.mainContainerTopText.firstChild
      );
    }
    this.mainContainerTopText.textContent = currentProject.title;
  }

  renderProjectsSidebar(projectArray) {
    while (this.projectsContainer.firstChild) {
      this.projectsContainer.removeChild(this.projectsContainer.firstChild);
    }
    projectArray.forEach((element) => {
      this.projectsSidebarButton = document.createElement("button");
      this.projectsSidebarButton.classList.add("projectsSidebarButton");
      this.projectsSidebarButton.textContent = element.title;
      this.projectsSidebarButton.setAttribute(
        "data-id",
        projectArray[projectArray.indexOf(element)].id
      );
      this.projectsContainer.appendChild(this.projectsSidebarButton);
    });
  }

  renderTasks(taskArray) {
    while (this.mainContainer.firstChild) {
      this.mainContainer.removeChild(this.mainContainer.firstChild);
    }
    taskArray.forEach((element) => {
      this.tasksDisplay = document.createElement("div");
      this.tasksDisplay.classList.add("tasksDisplay");
      this.tasksDisplay.setAttribute(
        "data-id",
        taskArray[taskArray.indexOf(element)].id.toString()
      );
      this.mainContainer.appendChild(this.tasksDisplay);
      this.tasksText = document.createElement("div");
      this.tasksText.classList.add("tasksText");
      this.tasksText.textContent = element.title;
      this.tasksCheckBox = document.createElement("div");
      this.tasksCheckBox.classList.add("tasksCheckBox");
      this.tasksDeleteButton = document.createElement("button");
      this.tasksDeleteButton.classList.add("tasksDeleteButton");
      this.tasksDeleteButton.textContent = "Del";
      this.dropdownContainer = document.createElement("div");
      this.dropdownContainer.classList.add("dropdownContainer");
      this.dropdown = document.createElement("div");
      this.dropdown.classList.add("dropdown");
      this.dropdownButton = document.createElement("button");
      this.dropdownButton.classList.add("dropdownButton");
      this.dropdownButton.textContent = "Priority";
      this.dropdownContent = document.createElement("div");
      this.dropdownContent.classList.add("dropdownContent");
      this.dropdownContent.setAttribute(
        "data-dropdown",
        taskArray[taskArray.indexOf(element)].id.toString()
      );
      this.lowPriority = document.createElement("a");
      this.lowPriority.textContent = "low";
      this.lowPriority.href = "#";
      this.lowPriority.classList.add("lowPriority");
      this.mediumPriority = document.createElement("a");
      this.mediumPriority.textContent = "medium";
      this.mediumPriority.href = "#";
      this.mediumPriority.classList.add("mediumPriority");
      this.highPriority = document.createElement("a");
      this.highPriority.textContent = "high";
      this.highPriority.href = "#";
      this.highPriority.classList.add("highPriority");
      this.tasksDisplay.appendChild(this.tasksCheckBox);
      this.tasksDisplay.appendChild(this.tasksText);
      this.tasksDisplay.appendChild(this.dropdownContainer);
      this.tasksDisplay.appendChild(this.tasksDeleteButton);
      this.dropdownContainer.appendChild(this.dropdown);
      this.dropdown.appendChild(this.dropdownButton);
      this.dropdown.appendChild(this.dropdownContent);
      this.dropdownContent.appendChild(this.lowPriority);
      this.dropdownContent.appendChild(this.mediumPriority);
      this.dropdownContent.appendChild(this.highPriority);

      const addDropdownListeners = (() => {
        this.dropdownButton.addEventListener("click", (e) => {
          if (e.target.className === "dropdownButton") {
            document
              .querySelector(
                `[data-dropdown="${taskArray[
                  taskArray.indexOf(element)
                ].id.toString()}"]`
              )
              .classList.toggle("showDropdown");
          }
        });
      })();
      const displayCompleteStatus = (() => {
        if (taskArray[taskArray.indexOf(element)].complete === true) {
          this.tasksText.style.textDecoration = "line-through";
          this.tasksCheckBox.style.backgroundColor = "seashell";
        }
      })();

      const displayPriorityStatus = (() => {
        switch (taskArray[taskArray.indexOf(element)].priority) {
          case "low":
            this.dropdownButton.style.backgroundColor = "green";
            break;
          case "medium":
            this.dropdownButton.style.backgroundColor = "#ffc107";
            break;
          case "high":
            this.dropdownButton.style.backgroundColor = "#e44c55";
            break;
        }
      })();
      const renderEditTaskModal = (() => {
        this.tasksDisplay.addEventListener("click", (e) => {
          if (e.target.className === "tasksText") {
            this.editTaskTitle.value =
              taskArray[taskArray.indexOf(element)].title;
            this.editTaskDescription.value =
              taskArray[taskArray.indexOf(element)].description;
            this.editTaskDueDate.value =
              taskArray[taskArray.indexOf(element)].dueDate;
            this.editTaskNotes.value =
              taskArray[taskArray.indexOf(element)].notes;
            this.editTaskModalContainer.classList.add("show");
            this.editSubmitTask.setAttribute(
              "data-id",
              e.target.parentNode.dataset.id
            );
          }
        });
      })();
    });
  }
  renderNewProjectModal() {
    this.openProject.addEventListener("click", () => {
      this.projectModalContainer.classList.add("show");
    });
  }

  renderNewTaskModal() {
    this.newTask.addEventListener("click", () => {
      this.taskModalContainer.classList.add("show");
    });
  }

  sendControllerProjectData(addProjectToModel) {
    this.submitProject.addEventListener("click", (e) => {
      e.preventDefault();
      addProjectToModel(this.projectTitle.value);
      this.projectForm.reset();
      this.projectModalContainer.classList.remove("show");
      this.newTask.classList.remove("hide");
    });
  }

  sendControllerEditProjectData(editProjectInModel) {
    this.editSubmitProject.addEventListener("click", (e) => {
      e.preventDefault();
      editProjectInModel(e.target.dataset.id, this.editProjectTitle.value);
      this.editProjectModalContainer.classList.remove("show");
    });
  }

  sendControllerTaskData(addTaskToModel) {
    this.submitTask.addEventListener("click", (e) => {
      e.preventDefault();
      addTaskToModel(
        this.taskTitle.value,
        this.taskDescription.value,
        this.taskDueDate.value,
        this.taskNotes.value
      );
      this.taskForm.reset();
      this.taskModalContainer.classList.remove("show");
    });
  }

  sendControllerEditTaskData(editTaskInModel) {
    this.editSubmitTask.addEventListener("click", (e) => {
      e.preventDefault();
      editTaskInModel(
        e.target.dataset.id,
        this.editTaskTitle.value,
        this.editTaskDescription.value,
        this.editTaskDueDate.value,
        this.editTaskNotes.value
      );
      this.editTaskModalContainer.classList.remove("show");
      if (
        this.mainContainerTopText.textContent === "Today" ||
        this.mainContainerTopText.textContent === "All Tasks"
      ) {
        this.view.newTask.classList.add("hide");
      } else {
        this.newTask.classList.remove("hide");
      }
    });
  }

  deleteProjectFromView(deleteProjectFromModel) {
    this.mainContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "projectsDeleteButton") {
        deleteProjectFromModel(parseInt(e.target.parentNode.dataset.id));
        e.target.parentNode.remove();
      }
    });
  }
  deleteTaskFromView(deleteTaskFromModel) {
    this.mainContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "tasksDeleteButton") {
        deleteTaskFromModel(parseInt(e.target.parentNode.dataset.id));
        e.target.parentNode.remove();
      }
    });
  }

  updateControllerPriority(updateModelPriority) {
    this.mainContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "lowPriority") {
        updateModelPriority(
          e.target.closest(".tasksDisplay").dataset.id,
          "low"
        );
      } else if (e.target.className === "mediumPriority") {
        updateModelPriority(
          e.target.closest(".tasksDisplay").dataset.id,
          "medium"
        );
      } else if (e.target.className === "highPriority") {
        updateModelPriority(
          e.target.closest(".tasksDisplay").dataset.id,
          "high"
        );
      }
    });
  }

  updateControllerCompleteStatus(updateModelCompleteStatus) {
    this.mainContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        e.target.className === "tasksCheckBox" &&
        e.target.style.backgroundColor === ""
      ) {
        updateModelCompleteStatus(
          e.target.closest(".tasksDisplay").dataset.id,
          true
        );
      } else if (e.target.className === "tasksCheckBox") {
        updateModelCompleteStatus(
          e.target.closest(".tasksDisplay").dataset.id,
          false
        );
      }
    });
  }

  updateControllerCurrentProject(updateModelCurrentProject) {
    this.projectsContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "projectsSidebarButton") {
        console.log("asdf");
        updateModelCurrentProject(e.target.dataset.id);
        this.newTask.classList.remove("hide");
      }
    });
  }

  updateControllerAllProjects(updateModelAllProjects) {
    this.allProjects.addEventListener("click", (e) => {
      this.mainContainerTopText.textContent = "All Projects";
      this.newTask.classList.add("hide");
      updateModelAllProjects();
    });
  }

  updateControllerAllTasks(updateModelAllTasks) {
    this.allTasks.addEventListener("click", (e) => {
      this.mainContainerTopText.textContent = "All Tasks";
      this.newTask.classList.add("hide");
      updateModelAllTasks();
    });
  }

  updateControllerTodayTasks(updateModelTodayTasks) {
    this.todayButton.addEventListener("click", (e) => {
      this.mainContainerTopText.textContent = "Today";
      this.newTask.classList.add("hide");
      updateModelTodayTasks();
    });
  }

  clickOutsideCloseModal() {
    this.mainContainer.addEventListener("click", (e) => {
      if (!e.target.closest(this.taskModal)) {
        console.log("asdf");
        this.taskModalContainer.classList.remove("show");
      }
    });
  }
}

export { View };
