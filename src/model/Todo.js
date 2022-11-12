const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength:2,
        maxlength:30,
    },
    description: {
        type: String,
        required: true,
        minlength:2,
        maxlength:100,
    },
    _id: {
        type: String,
        required: true,
    }
    
},
{timestamps: true}
);

const todoModel = model("todos", todoSchema);

module.exports = todoModel;