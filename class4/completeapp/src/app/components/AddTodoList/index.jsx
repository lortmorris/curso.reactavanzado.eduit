import React from 'react';
import { compose, withState, withProps } from 'recompose';

const AddTodoList = ({ value, changeValue, handlerAdd,  todoListId }) => (
  <form onSubmit={handlerAdd(todoListId, value)}>
    <p>
    {`${todoListId !== null ? 'Task' : 'TodoList'}`}: <input type="text" value={value} onChange={ evt => changeValue(evt.target.value) } />
    <input type="submit" value="Add+" />
    </p>
  </form>
);


export default compose(
  withState('value', 'changeValue', ''),
  withProps(props => ({ todoListId: props.todoListId || null, handlerAdd: props.handlerAdd }))
)(AddTodoList);
