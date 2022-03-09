import { Project } from "./project.js";
import { Task } from "./task.js";

class Model {
  constructor(currentProject) {
    this._project = new Project();
    this._task = new Task();
    this._array = [];
    this._taskArray = [];
    this._todayTaskArray = [];
    this._currentProject = currentProject;
  }

  get project() {
    return this._project;
  }
  set project(userProject) {
    this._project = userProject;
  }
  get task() {
    return this._task;
  }
  set task(userTask) {
    this._task = userTask;
  }
  get title() {
    return this._title;
  }
  set title(userTitle) {
    this._title = userTitle;
  }
  get array() {
    return this._array;
  }
  set array(userProjectArray) {
    this._array = userProjectArray;
  }
  get taskArray() {
    return this._taskArray;
  }
  set taskArray(userTaskArray) {
    this._taskArray = userTaskArray;
  }
  get todayTaskArray() {
    return this._todayTaskArray;
  }
  set todayTaskArray(userTodayTaskArray) {
    this._todayTaskArray = userTodayTaskArray;
  }
  get currentProject() {
    return this._currentProject;
  }
  set currentProject(userCurrentProject) {
    this._currentProject = userCurrentProject;
  }
}

export { Model };
