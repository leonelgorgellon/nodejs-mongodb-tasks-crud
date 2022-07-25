//creamos rutas
import { Router } from "express";

import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

//para guardar
router.post("/tasks/add", createTask);

//edit
router.get("/tasks/:id/edit", renderTaskEdit);

//creamos un routeador de tipo post para tomar las actualizaciones de edit
router.post("/tasks/:id/edit", editTask);

//eliminar
router.get("/tasks/:id/delete", deleteTask);

//done, se pone /tasks/:id/toggleDone porqe va de true a false o alreves, cambia el estado
router.get("/tasks/:id/toggleDone", taskToggleDone);

export default router;
