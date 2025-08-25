import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Task Manager</h1>
			<Link href="/tasks">
				<button type="button">Go to Tasks</button>
			</Link>
		</div>
	);
}
