import TasksController from "./Controllers/TasksController.js";
import QuotesController from "./Controllers/QuotesController.js";
import ImagesController from "./Controllers/ImagesController.js";
//import Weather from "./Models/Weather.js";

class App {
  tasksController = new TasksController();
  quotesController = new QuotesController();
  imagesController = new ImagesController();
  //weathersController = new WeathersController();

}

window["app"] = new App();
