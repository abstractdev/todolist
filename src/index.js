
import {Controller} from './controller.js'

const app = new Controller()
app.view.renderNewProjectModal();
app.view.renderNewTaskModal();
app.initDefaultProject();