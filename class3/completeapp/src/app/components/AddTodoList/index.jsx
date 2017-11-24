import React from 'react';
import { compose, withState, withProps } from 'recompose';
import { addTodoList, addTodo } from '../../actions';

const AddTodoList = ({ submit, value, changeValue, todoListId }) => {
//  console.info(submit, value, changeValue, todoListId);
  return (
    <form onSubmit={submit}>
      <p>
      {`${todoListId !== null ? 'Task' : 'TodoList'}`}: <input type="text" value={value} onChange={ evt => changeValue(evt.target.value) } />
      <input type="submit" value="Add+" />
      </p>
    </form>
  );
}

export default compose(
  withState('value', 'changeValue', ''),
  withProps(props => ({ todoListId: props.todoListId, submit: props.handlerAdd }))
)(AddTodoList);
