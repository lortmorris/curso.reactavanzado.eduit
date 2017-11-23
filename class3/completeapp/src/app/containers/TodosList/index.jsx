import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import Title from '../../components/Title/index.jsx';
import TodosListComponent from '../../components/TodosListComponent/index.jsx';
import AddTodoList from '../../components/AddTodoList/index.jsx';


const TodosList = ({ todos, update }) => (
	<div>
		<Title title="TODOS App" color="red" />
		<AddTodoList updateHandler={update} />
		{todos.map(list => (
			<TodosListComponent
			todos={list.todos}
			title={list.title}
			key={list.id}
			todosListId={list.id}
			/>
		))}
	</div>
);



export default compose(
	connect(state => ({
		todos: state.todos,
	})),
	withHandlers({
		update: props => console.info(props),
	})
)(TodosList);
