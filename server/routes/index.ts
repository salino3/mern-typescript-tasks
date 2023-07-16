import {Router} from 'express';
import Task from '../models/task';

const router = Router();
 
router.get("/", (req, res) => {
  res.send(
    `<h1>Hello World!</h1>`
    );
});
  
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();

   try { 
    res.json(tasks);
   } catch (error) {
     return res.status(500).send(error);
   }
  
}); 

router.post("/tasks", async (req, res) => {
 const {title, description} = req.body;
 
 try {
    const task = new Task({ title, description });
    await task.save();
    res.json(task);
  } catch (error) {
    return res.status(500).send(error);
  }
});
 
router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if(!task) return res.status(404).json({msg: "Task not found"});

     res.send(task);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
   try {
     const task = await Task.findByIdAndDelete(req.params.id);

     if (!task) return res.status(404).json({ msg: "Task not found" });
 
     return res.json(task);
   } catch (error) {
     return res.status(500).send(error);
   }
  res.send("Delete a task!");
});

router.put("/tasks/:id", async (req, res) => {
 try {
    const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(taskUpdated);
 } catch (error) {
  console.error(error);
  }  
});

export default router;
  