const TodoForm = ({ handleSubmit, handleChange, newTask }) => {
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={newTask}
				onChange={handleChange}
				placeholder="Add New Task"
				className="p-2 border rounded-lg w-64 mr-2"
			/>

			<button
				type="submit"
				className="bg-blue-500 rounded-lg p-2 text-white"
			>
				Add Task
			</button>
		</form>
	);
};

export default TodoForm;
