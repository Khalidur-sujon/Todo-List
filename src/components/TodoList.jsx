/* eslint-disable react/prop-types */

const TodoList = ({ tasks }) => {
	return (
		<table className="w-full border-collapse rounded-lg ">
			<thead>
				<tr className="bg-gray-200 font-medium">
					<th className="p-2 border">Task/Tasks</th>
					<th className="p-2 border">Priority</th>
					<th className="p-2 border">Status</th>
					<th className="p-2 border">Actions</th>
				</tr>
			</thead>

			<tbody>
				{tasks.map((task) => (
					<tr key={task.id}>
						<td className="p-2 border text-center">
							<span>{task.title}</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TodoList;
