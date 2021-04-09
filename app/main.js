import TodosController from "./Controllers/TodosController.js";

class App {
  todosController = new TodosController();
}

window["app"] = new App();
