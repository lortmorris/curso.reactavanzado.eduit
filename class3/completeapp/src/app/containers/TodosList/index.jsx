import React from 'react';
import Title from '../../components/Title/index.jsx';
import TodosListComponent from '../../components/TodosListComponent/index.jsx';
import AddTodoList from '../../components/AddTodoList/index.jsx';
import { compose, mapProps, withState } from 'recompose';
/*
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
*/

const internalCounter = (props) => {
	console.info(props);
	return (
	  <div>
	    Count: {props.counter}
	    <button onClick={() => props.setValue(n => n + 1)}>Increment</button>
	    <button onClick={() => props.setValue(n => n - 1)}>Decrement</button>
	  </div>);
}

const Counters = [withState('temp', 'setValue', 0),
	withState('win', 'setValue', 0),
	withState('avg', 'setValue', 0)].map(internalCounter)



const TodosList = () => (<div>
	{Counters.map(c => <div key={Math.random()}>{c}</div>)}
	</div>);
export default TodosList;
