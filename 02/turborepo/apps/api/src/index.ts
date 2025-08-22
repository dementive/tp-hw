import express from 'express';
import cors from 'cors';
import type { Task } from 'types';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let tasks: Task[] = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  console.log("Adding task...");
  const newTask: Task = { id: tasks.length, ...req.body };
  tasks.push(newTask);
  console.log(tasks);
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
