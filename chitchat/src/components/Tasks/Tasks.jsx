import React, {useState} from 'react';
import Task from './Task';

const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = (e) => {
		e.preventDefault();
		const ID = document.getElementById('inp').dataset.id;
		setTasks([...tasks, {id: ID, title: document.getElementById('inp').value}]);
		document.getElementById('inp').value = '';
	};
	const deleteHandler = (id) => setTasks(tasks.filter((item) => item.id !== id));
	const editHandler = (id, newValue) => {
		tasks
			.filter((item) => item.id === id)
			.map((item) => {
				return item.id === id ? setTasks([...tasks, {id, title: newValue}]) : null;
			});
	};

	return (
		<div className='col-md-7 col-xs-12 col-md-offset-2'>
			<form action='' className='input_form'>
				<input id='inp' type='text' name='task' className='task_input' data-id={`TASK-${Date.now()}`} />

				<button onClick={(e) => addTask(e)} type='submit' name='submit' id='add_btn' className='add_btn'>
					Add Task
				</button>
			</form>

			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Task</th>
						<th style={{width: 60}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((item) => (
						<Task {...item} deletedItem={deleteHandler} editedValue={editHandler} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Tasks;
