import express from 'express';
import type { Task } from 'types';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

let tasks: Task[] = [
  { id: 0, title: 'Learn Everything' },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask: Task = { id: tasks.length, ...req.body };
  tasks.push(newTask);
  res.status(200).send('Successfully pushed task.');
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
