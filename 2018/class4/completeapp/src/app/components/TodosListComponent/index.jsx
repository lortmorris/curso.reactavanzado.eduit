import React from 'react';
import SubTitle from '../SubTitle.jsx';
import Todos from '../Todos/index.jsx';
import AddTodoList from '../AddTodoList/index.jsx';

const TodosListComponent = ({ title, todosListId, todos, handlerAdd, removeTodoList }) =>  (
    <div className="todos-list-component">
    <SubTitle subtitle={title} />
    <a className="remove" href="" onClick={removeTodoList(todosListId)}>[X]</a>
    <AddTodoList todosListId={todosListId} handlerAdd={handlerAdd} />
    <Todos todos={todos} todosListId={todosListId}  />
    </div>
  );


export default TodosListComponent;
