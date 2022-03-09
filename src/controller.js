import { Project } from "./project.js";
import { Task } from "./task.js";
import { Model } from "./model.js";
import { View } from "./view.js";
import parseISO from "date-fns/parseISO";
import isToday from "date-fns/isToday";
import {createIdForArrayElements } from "./idFunction"

class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.view.sendControllerProjectData(this.addProjectToModel.bind(this));
    this.view.sendControllerEditProjectData(this.editProjectInModel.bind(this));
    this.view.sendControllerTaskData(this.addTaskToModel.bind(this));
    this.view.sendControllerEditTaskData(this.editTaskInModel.bind(this));
    this.view.deleteProjectFromView(this.deleteProjectFromModel.bind(this));
    this.view.deleteTaskFromView(this.deleteTaskFromModel.bind(this));
    this.view.updateControllerPriority(this.updateModelPriority.bind(this));
    this.view.updateControllerCompleteStatus(
      this.updateModelCompleteStatus.bind(this)
    );
    this.view.updateControllerCurrentProject(
      this.updateModelCurrentProject.bind(this)
    );
    this.view.updateControllerAllProjects(
      this.updateModelAllProjects.bind(this)
    );
    this.view.updateControllerAllTasks(this.updateModelAllTasks.bind(this));
    this.view.updateControllerTodayTasks(this.updateModelTodayTasks.bind(this));
  }

  initDefaultProject() {
    const defaultProject = new Project();
    this.model.array.push(defaultProject);
    this.model.currentProject = defaultProject;
    defaultProject.title = "Default";
    createIdForArrayElements(this.model.array);
    this.view.renderProjectsSidebar(this.model.array);
    this.view.renderCurrentProject(this.model.currentProject);
  }
  addProjectToModel(title) {
    const newProject = new Project();
    this.model.array.push(newProject);
    newProject.title = title;
    createIdForArrayElements(this.model.array);
    this.model.currentProject = newProject;
    this.view.renderProjectsSidebar(this.model.array);
    this.view.renderCurrentProject(this.model.currentProject);
    this.view.renderTasks(this.model.currentProject.array);
  }

  editProjectInModel(id, title) {
    this.model.array.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.title = title;
      }
    });
    this.view.renderAllProjects(this.model.array);
    this.view.renderProjectsSidebar(this.model.array);
  }

  deleteProjectFromModel = (id) => {
    this.model.array = this.model.array.filter(function (e) {
      return e.id !== parseInt(id);
    });
    this.view.renderAllProjects(this.model.array);
    this.view.renderProjectsSidebar(this.model.array);
  };
  addTaskToModel(title, description, dueDate, notes) {
    let newTask = new Task();
    this.model.currentProject.array.push(newTask);
    this.model.taskArray.push(newTask);
    newTask.title = title;
    createIdForArrayElements(this.model.taskArray);
    newTask.project = this.model.currentProject.title;
    newTask.description = description;
    newTask.dueDate = dueDate;
    newTask.notes = notes;
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }
  editTaskInModel(id, title, description, dueDate, notes) {
    this.model.taskArray.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.title = title;
        e.description = description;
        e.dueDate = dueDate;
        e.notes = notes;
      }
    });
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }
  deleteTaskFromModel(id) {
    this.model.taskArray = this.model.taskArray.filter(function (e) {
      return e.id !== parseInt(id);
    });
    this.model.currentProject.array = this.model.currentProject.array.filter(
      function (e) {
        return e.id !== parseInt(id);
      }
    );
    this.model.todayTaskArray = this.model.todayTaskArray.filter(
      function (e) {
        return e.id !== parseInt(id);
      }
    );
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }

  updateModelPriority(id, viewPriority) {
    this.model.taskArray.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.priority = viewPriority;
      }
    });
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }
  updateModelCompleteStatus(id, status) {
    this.model.taskArray.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.complete = status;
        console.log(status);
      }
    });
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }

  updateModelCurrentProject(id) {
    this.model.array.forEach((e) => {
      if (parseInt(id) === e.id) {
        this.model.currentProject = e;
        return this.model.currentProject;
      }
    });
    this.view.renderTasks(this.model.currentProject.array);
    this.view.renderCurrentProject(this.model.currentProject);
  }

  updateModelAllProjects() {
    this.view.renderAllProjects(this.model.array);
  }
  updateModelAllTasks() {
    this.view.renderTasks(this.model.taskArray);
  }

  updateModelTodayTasks() {
    this.model.todayTaskArray = this.model.taskArray.filter((e) => {
      const parsedDate = parseISO(e.dueDate);
      return isToday(parsedDate)
    });
    this.view.renderTasks(this.model.todayTaskArray)
  }
}
export { Controller };
