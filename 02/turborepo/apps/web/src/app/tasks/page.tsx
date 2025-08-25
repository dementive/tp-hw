import { revalidatePath } from "next/cache";
import type { JSX } from "react";
import type { Task } from "types";

async function getTasks(): Promise<Task[]> {
	const res = await fetch("http://localhost:3001/tasks", { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Failed to fetch tasks");
	}

	return res.json();
}

async function createTask(formData: FormData): Promise<void> {
	"use server";

	const title = formData.get("title");
	if (!title) {
		return;
	}

	await fetch("http://localhost:3001/tasks", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ title }),
	});

	revalidatePath("/tasks");
}

export default async function TasksPage(): Promise<JSX.Element> {
	const tasks: Task[] = await getTasks();

	return (
		<main style={{ padding: "2rem" }}>
			<h1>Task List</h1>
			<ul>
				{tasks.map((task: Task) => (
					<li key={task.id}>{task.title}</li>
				))}
			</ul>

			<h2>Add a New Task</h2>
			<form action={createTask}>
				<input
					type="text"
					name="title"
					placeholder="New task title"
					required
					style={{ marginRight: "1rem" }}
				/>
				<button type="submit">Add Task</button>
			</form>
		</main>
	);
}
