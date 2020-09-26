import React from 'react';
import { connect } from 'react-redux';
import Title from '../../components/Title/index.jsx';
import TodosListComponent from '../../components/TodosListComponent/index.jsx';
import AddTodoList from '../../components/AddTodoList/index.jsx';
import { removeTodoList, toggleTodo, removeTodo } from '../../actions';


const TodosList = ({
  todos,
  update,
  removeTaskHandler,
  addNewTaskHandler,
  removeTodo,
  toggleTodo,
}) => (
	<div>
		<Title title="TODOS App" color="red" />
		<AddTodoList updateHandler={update} addNewTaskHandler={addNewTaskHandler} />
		{todos.map(list => (
			<TodosListComponent
			todos={list.todos}
			title={list.title}
			key={list.id}
			todosListId={list.id}
			removeTaskHandler={removeTaskHandler}
			addNewTaskHandler={addNewTaskHandler}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
			/>
		))}
	</div>
);


const mapStateToProps = state => ({
  todos: state.todos,
});

const mapActionsToProps = dispatch => ({
  update: () => {},
  addNewTaskHandler: action => dispatch(action),
  removeTaskHandler: id => dispatch(removeTodoList(id)),
  removeTodo: (listId, id) => dispatch(removeTodo(listId, id)),
  toggleTodo: (listId, id) => dispatch(toggleTodo(listId, id)),
});

export default connect(mapStateToProps, mapActionsToProps)(TodosList);
