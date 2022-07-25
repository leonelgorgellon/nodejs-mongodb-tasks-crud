import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  //hacemos consulta para ver las tareas realizadas.

  const tasks = await Task.find().lean();

  //le pasamos un objeto para mostrar en el index el listado de tareas
  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body); //req.body es para recibir los datos que se enviaron.

    await task.save(); //se le agrega la palabra awit porque esto es asincrono

    res.redirect("/"); //redirecciona al inicio
  } catch (error) {
    console.log(error);
  }
};

//consulta tarea, luego renderiza formulario para poder ediarlo
export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean(); //asi es para traernos la id, osea nos va a traer una tarea cargada

    res.render("edit", { task }); //le pasamos el task
  } catch (error) {
    console.log(error.message);
  }
};

//actualiza
export const editTask = async (req, res) => {
  const { id } = req.params; //extraigo

  //desde el modelo de tarea, busco una tarea y actualices , y la tarea que paso viene por parte de req.param.id
  await Task.findByIdAndUpdate(id, req.body); //req.body son los datos actualizados.

  res.redirect("/");
};

//eliminar
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

//done, se pone toggleDone porqe va de true a false o alreves
export const taskToggleDone = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save();

  res.redirect("/");
};
