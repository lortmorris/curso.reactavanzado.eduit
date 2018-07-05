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
  initAppState,
}) => (
	<div>
		<Title title="TODOS App" color="red" />
    <div>Error en request</div>
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
    <div>
        <button onClick={initAppState}>Initial State</button>
    </div>
	</div>
);


const mapStateToProps = state => ({
  todos: state.todos,
});

const mapActionsToProps = dispatch => ({
  update: () => {},
  addNewTaskHandler: action => {
    dispatch({ type: 'TODOSLIST_ADD_REQUESTED', payload: action });
  },
  removeTaskHandler: id => dispatch(removeTodoList(id)),
  removeTodo: (listId, id) => dispatch(removeTodo(listId, id)),
  toggleTodo: (listId, id) => dispatch(toggleTodo(listId, id)),
  initAppState: () => dispatch({ type: 'INIT_APP_STATE' }),
});

export default connect(mapStateToProps, mapActionsToProps)(TodosList);
