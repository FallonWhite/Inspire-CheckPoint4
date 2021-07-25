import TasksController from "./Controllers/TasksController.js";
import QuotesController from "./Controllers/QuotesController.js";
import ImagesController from "./Controllers/ImagesController.js";

class App {
  tasksController = new TasksController();
  quotesController = new QuotesController();
  imagesController = new ImagesController();

}

window["app"] = new App();
