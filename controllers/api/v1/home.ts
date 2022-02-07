import { Request, Response, NextFunction } from 'express';
const Category = require('../../../models/category');
const Task = require('../../../models/todo');

const fetchTasks = async (req: Request , res: Response)=>{
    try{
        // This creates the table if it doesn't exist (and does nothing if it already exists)
        await Task.sync();

        // Find all the contact lists and return them
        let tasks = await Task.findAll();

        return res.status(200).json({
            message: "All tasks",
            data: tasks
        });

    }catch(err){
        console.log("Error in home controller", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// const createTask =async (req: Request, res: Response) => {
//     try {
//         // console.log("Inside the body", req.body);

//         // This creates the table, dropping it first if it already existed
//         await Task.sync();

//         // Create a contact
//         let contact = await Task.create({
//             name: req.body.name,
//             mobile_no: req.body.mobileNo
//         });
        
//         contact = contact.toJSON();
//         // console.log("New contact created: ", contact);
//         return res.status(200).json({
//             message: "New contact created",
//             data: contact
//         });

//     } catch (err) {
//         console.log("Error in creating a contact", err);
//         return res.status(500).json({
//             message: "Internal server error"
//         });
//     }
// }

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
    // createTask,      // C
    fetchTasks,      // R
    // updateTask,      // U
    // deleteTask,      // D
}