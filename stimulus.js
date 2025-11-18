import { Application } from "https://unpkg.com/@hotwired/stimulus?module";

// Controller-Imports (lokale Dateien)
import HelloController from "./controllers/hello.js";

const application = Application.start();

// Registrierung — der String ist der Name, der in data-controller verwendet wird
application.register("hello", HelloController);
