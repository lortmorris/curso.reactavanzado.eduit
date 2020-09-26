import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { addTodoList, addTodo, removeTodoList } from '../../actions';
import Title from '../../components/Title/index.jsx';
import TodosListComponent from '../../components/TodosListComponent/index.jsx';
import AddTodoList from '../../components/AddTodoList/index.jsx';


const TodosList = ({ todos, handlerAdd, removeTodoList, requestError }) => (
	<div>
		{requestError && (<div>Se rompio el request</div>)}
		<Title title="TODOS App" color="red" />
		<AddTodoList handlerAdd={handlerAdd} />
		{todos.map(list => (
			<TodosListComponent
			todos={list.todos}
			title={list.title}
			key={list.id}
			todosListId={list.id}
			handlerAdd={handlerAdd}
			removeTodoList={removeTodoList}
			/>
		))}
	</div>
);



export default compose(
	connect(state => ({
		todos: state.todos,
		requestError: state.request.requestError,
	}),
	dispatch => ({
		addNewElement: (action) => dispatch(action),
		removeTodoList: id => (evt) => {
			evt.preventDefault();
			dispatch({ type: "REMOVE_TODOLIST_REQUESTED", payload: { id } })
			dispatch(removeTodoList(id))
		},
	})
	),
	withHandlers({
		handlerAdd: props => (todosListId, value) => e =>  {
			e.preventDefault();
			props.addNewElement(todosListId !== null ?
      addTodo(todosListId, value) :
      addTodoList(value));
		}
	})
)(TodosList);
