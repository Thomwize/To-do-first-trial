const Todo = require("../model/Todo");

//get all todo
exports.getAllTodos = async (req, res)=>{
    try{

        let todos = await Todo.find();
        if(todos.length=== 0)
        returnres.status(404).json({
            success:false,
            message: "No Todos were found"
        });
        res.status(200).json({
            success: true,
            message: "Todos found",
            todos,
        })
    } catch(error){
        res.status(500).json({
            success:false,
            message: "internal server error",
            error: error.message,
        })
    }
}
//get a single todo
exports.getTodo = async(req, res)=>{
    try{
        let id = {_id: req.params.id};
        let todo = await Todo.findOne(id)
        if(!todo) return res.status(404).json({
            success: false,
            message: 'Todo not found',
        })
        res.status(200).json({
            success: true,
            message: "Todo found",
            todo
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}

//create user

exports.createTodo = async (req,res)=>{
    try{
        let todo = await req.body;
    let created = await Todo.create(todo)
    if(!created) return res.status(400).json({
        success: false,
        message: "Todo not created"
    })
    return res.status(200).json({
        success: true,
        message: "Todo created successfully",
        todo: created
    })
    }catch(error){
        res.status(500).json({
            success:false,
            message: "internal server",
            error: error.message,
        })
    }
}
//update todo

//delete todo
