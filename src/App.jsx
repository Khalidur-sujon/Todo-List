import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		// if user type any task input, then add that task
		if (newTask.trim() !== "") {
			const newTaskObject = {
				id: Date.now(),
				title: newTask,
			};
			setTasks((prevTasks) => {
				const newTasks = [...prevTasks, newTaskObject];
				localStorage.setItem("tasks", JSON.stringify(newTasks));
				return newTasks;
			});
			setNewTask("");
		}
	};

	const handleChange = (e) => {
		setNewTask(e.target.value);
	};

	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
		setTasks(storedTasks);
	}, []);

	return (
		<div className="w-[600px] mt-8 ">
			<h1 className="text-center text-4xl font-bold mb-[40px]">
				Todo List App
			</h1>

			<div className="w-full flex flex-col items-center gap-[20px] ">
				<TodoForm
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					newTask={newTask}
				/>

				<TodoList tasks={tasks} />
			</div>
		</div>
	);
};

export default App;
