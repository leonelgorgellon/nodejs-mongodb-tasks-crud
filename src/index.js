import app from "./app";
import './database'
import {PORT} from './config'

//arranca la aplicación
app.listen(PORT);
console.log("Server on port", PORT);
