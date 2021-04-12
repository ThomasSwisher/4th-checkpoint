import QuoteController from "./Controllers/QuoteController.js";
import TodosController from "./Controllers/TodosController.js";
import BackgroundController from "./Controllers/BackgroundController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  todosController = new TodosController();
  quoteController = new QuoteController();
  backgroundController = new BackgroundController();
  weatherController = new WeatherController();
}

window["app"] = new App();
