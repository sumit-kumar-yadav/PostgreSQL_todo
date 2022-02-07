import { Request, Response, NextFunction } from 'express';
const Category = require('../../../models/category');
const Task = require('../../../models/todo');

const fetchTasks = async (req: Request , res: Response)=>{
    try{
        // Find all the contact lists and return them
        let tasks = await Task.findAll({ include: Category });

        return res.status(200).json({
            message: "All tasks",
            data: tasks
        });

    }catch(err){
        console.log("Error in fetching tasks", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

const fetchCategories = async (req: Request, res: Response) => {
    try {
        // Find all the contact lists and return them
        let categories = await Category.findAll();

        return res.status(200).json({
            message: "All categories",
            data: categories
        });
    } catch (err) {
        console.log("Error in fetching categories", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

const createTask = async (req: Request, res: Response) => {
    try {
        console.log("Inside the body", req.body);

        // Create a contact
        let task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            category_id: req.body.category_id
        });
        

        return res.status(200).json({
            message: "New task created",
            data: task.toJSON()
        });

    } catch (err) {
        console.log("Error in creating a contact", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

const createCategory =async (req: Request, res: Response) => {
    try {
        console.log("Inside the createCategory", req.body);

        // Create a contact
        let category = await Category.create({
            type: req.body.type
        });
        
        return res.status(200).json({
            message: "New category created",
            data: category.toJSON()
        });
    } catch (err) {
        console.log("Error in creating category", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// const deleteTask = async (req: Request, res: Response) => {
//     try {
//         let contact = await Task.findByPk(req.params.id);
//         if(contact) await contact.destroy();
        
//         return res.status(200).json({
//             message: "Task is deleted",
//             data: contact
//         });
//     } catch (error) {
//         console.log("Error in creating a contact", error);
//         return res.status(500).json({
//             message: "Internal server error"
//         });
//     }
// }

// const updateTask =async (req: Request, res: Response) => {
//     try {
//         await Task.update(req.query, {
//             where: {
//               id: req.params.id
//             }
//           });

//         return res.status(200).json({
//             message: "Task is updated",
//             data: true
//         });

//     } catch (error) {
//         console.log("Error in updating the contact", error);
//         return res.status(500).json({
//             message: "Internal server error"
//         });
//     }
// }

module.exports = {
    createTask,      // C
    createCategory,
    fetchTasks,      // R
    fetchCategories,
    // updateTask,      // U
    // deleteTask,      // D
}