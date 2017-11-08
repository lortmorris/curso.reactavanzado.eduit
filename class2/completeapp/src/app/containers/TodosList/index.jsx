import React from 'react';
import Title from '../../components/Title/index.jsx';
import TodosListComponent from '../../components/TodosListComponent/index.jsx';
import AddTodoList from '../../components/AddTodoList/index.jsx';

const TodosList = ({ todos, dispatch, update }) => (
	<div>
		<Title title="TODOS App" color="red" />
		<AddTodoList dispatch={dispatch} updateHandler={update} />
		{todos.map(list => (
			<TodosListComponent
			todos={list.todos}
			title={list.title}
			key={list.id}
			todosListId={list.id}
			dispatch={dispatch}
			updateHandler={update}
			/>
		))}
	</div>
);

export default TodosList;
