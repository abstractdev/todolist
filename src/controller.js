import { Project } from "./project.js";
import { Task } from "./task.js";
import { Model } from "./model.js";
import { View } from "./view.js";

class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.view.sendControllerProjectData(this.addProjectToModel.bind(this));
    this.view.sendControllerTaskData(this.addTaskToModel.bind(this));
    this.view.sendControllerEditTaskData(this.editTaskInModel.bind(this));
    this.view.deleteProjectFromView(this.deleteProjectFromModel.bind(this));
    this.view.deleteTaskFromView(this.deleteTaskFromModel.bind(this));
    this.view.updateControllerPriority(this.updateModelPriority.bind(this));
    this.view.updateControllerCompleteStatus(this.updateModelCompleteStatus.bind(this));
    this.view.updateControllerCurrentProject(this.updateModelCurrentProject.bind(this));
    this.view.updateControllerAllProjects(this.updateModelAllProjects.bind(this));
  }


  initDefaultProject() {
    const defaultProject = new Project();
    this.model.array.push(defaultProject);
    this.model.currentProject = defaultProject;
    defaultProject.title = 'Default';
    defaultProject.id = this.model.array.indexOf(defaultProject);
    this.view.renderProjectsSidebar(this.model.array);
    this.view.renderCurrentProject(this.model.currentProject);
  }
  addProjectToModel(title) {
    const newProject = new Project();
    this.model.array.push(newProject);
    newProject.title = title;
    newProject.id = this.model.array.indexOf(newProject);
    this.model.currentProject = newProject
    this.view.renderProjectsSidebar(this.model.array);
    this.view.renderCurrentProject(this.model.currentProject);
    this.view.renderTasks(this.model.currentProject.array);
  }

  deleteProjectFromModel = (id) => {
    this.model.array = this.model.array.filter(function (e) {
      return e.id !== parseInt(id);
    });
    this.view.renderProjectsSidebar(this.model.array);
  };
  addTaskToModel(title, description, dueDate, notes) {
    let newTask = new Task();
    this.model.currentProject.array.push(newTask);
    newTask.title = title;
    newTask.id = this.model.currentProject.array.indexOf(newTask);
    newTask.project = this.model.currentProject.title;
    newTask.description = description;
    newTask.dueDate = dueDate;
    newTask.notes = notes;
    this.view.renderTasks(this.model.currentProject.array);
    console.log(newTask.project);
  }
  editTaskInModel(id, title, description, dueDate, notes) {
    this.model.currentProject.array.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.title = title;
        e.description = description;
        e.dueDate = dueDate;
        e.notes = notes;
      }
  })
  this.view.renderTasks(this.model.currentProject.array);
}
  deleteTaskFromModel(id) {
    this.model.currentProject.array = this.model.currentProject.array.filter(function (e) {
      return e.id !== parseInt(id);
    });
    this.view.renderTasks(this.model.currentProject.array);
  }

  updateModelPriority(id, viewPriority) {
    this.model.currentProject.array.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.priority = viewPriority;
      }
    });
    this.view.renderTasks(this.model.currentProject.array);
  }
  updateModelCompleteStatus(id, status) {
    this.model.currentProject.array.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.complete = status;
        console.log(status);
      }
    });
    this.view.renderTasks(this.model.currentProject.array);
  }

  updateModelCurrentProject(id) {
    this.model.array.forEach((e) => {
      if (parseInt(id) === e.id) {
        this.model.currentProject = e
        return this.model.currentProject;
      }
    });
    this.view.renderTasks(this.model.currentProject.array);
    this.view.renderCurrentProject(this.model.currentProject);
  }

  updateModelAllProjects() {
    this.view.renderAllProjects(this.model.array);
  }
}
export { Controller };
