import React, { useState, useEffect } from 'react';
import { Task } from 'types'

const TasksPage: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);;
	const [newTaskTitle, setNewTaskTitle] = useState('');

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		const res = await fetch("http://localhost:3001/tasks");
		const data: Task[] = await res.json();
		console.log("Got tasks: ", data.length);
		setTasks(data);
	}

	const addTask = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!newTaskTitle.trim()) return;


		console.log("Adding new task: ", newTaskTitle);
		const res = await fetch("http://localhost:3001/tasks", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify( { title: newTaskTitle } ),
		});

		const newTask: Task = await res.json();
		console.log("New task ID: ", newTask.id);

		setTasks((prev) => [...prev, newTask]);
		setNewTaskTitle('');
	}

	return (
		<div>
			<h1>Task List</h1>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						{task.title}
					</li>
				))}
			</ul>

			<form onSubmit={addTask}>
				<input
					type="text"
					value={newTaskTitle}
					onChange={(e) => setNewTaskTitle(e.target.value)}
					placeholder="New task title"
				/>
				<button type="submit">Add Task</button>
			</form>
		</div>
	);
};

export default TasksPage;
