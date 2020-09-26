import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import Title from '../../components/Title/index.jsx';
import TodosListComponent from '../../components/TodosListComponent/index.jsx';
import AddTodoList from '../../components/AddTodoList/index.jsx';


const TodosList = ({ todos, handlerAdd }) => (
	<div>
		<Title title="TODOS App" color="red" />
		<AddTodoList handlerAdd={handlerAdd} />
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
		handlerAdd: (props) => e => {
			e.preventDefault();
			return console.info(' testing: ', props);
    	this.props.dispatch(this.state.todosListId !== null ?
      addTodo(this.state.todosListId, this.state.input) :
      addTodoList(this.state.input));
    	this.setState({input: ''});
		}
	})
)(TodosList);
