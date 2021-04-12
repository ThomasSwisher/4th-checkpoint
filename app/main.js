import QuoteController from "./Controllers/QuoteController.js";
import TodosController from "./Controllers/TodosController.js";
import BackgroundController from "./Controllers/BackgroundController.js";
import TempController from "./Controllers/TempController.js";

class App {
  todosController = new TodosController();
  quoteController = new QuoteController();
  backgroundController = new BackgroundController();
  tempController = new TempController();
}

window["app"] = new App();
