import express from "express";
//aca hacemos que entienda express el html que le pasamos de la carpeta view
import {create} from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

//esto es para indicar donde esta la carpeta de VIEWS
app.set("views", path.join(__dirname, "views"));

//para indicar que motor de plantillas vamos a estar utilizando
//le indicamos q son hbs en vez de html ya que usamos esas plantillas
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);


app.set("view engine", ".hbs");

//middleares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(indexRoutes);

//static files
//asi a traves de app hacemos que la carpeta public se pueda leer. 
app.use(express.static(path.join(__dirname,"public")));

export default app;
