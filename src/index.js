const openTask = document.querySelector('#open-task');
const closeTask = document.querySelector('#close-task');
const taskModalContainer = document.querySelector('#task-modal-container');
const openProject = document.querySelector('#open-project');
const closeProject = document.querySelector('#close-project');
const projectModalContainer = document.querySelector('#project-modal-container');


openTask.addEventListener('click', () => {
    taskModalContainer.classList.add('show')
});

closeTask.addEventListener('click', () => {
    taskModalContainer.classList.remove('show')
});

openProject.addEventListener('click', () => {
    projectModalContainer.classList.add('show')
});

closeProject.addEventListener('click', () => {
    projectModalContainer.classList.remove('show')
});