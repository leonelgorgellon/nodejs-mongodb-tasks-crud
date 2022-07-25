import { Schema, model } from "mongoose";
//esquema es la forma en la que definimos que queremos guardar dentro de mongo db
//model es como colocarle un nombre a nuestro conjunto de propiedades que queremos guardar
//campos /tabla

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        trim: true
    }, 
    description:{
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
},{
    //permite agregarle una propiedad update / create
    timestamps: true,
    versionKey: false
})

export default model('Task', taskSchema)
