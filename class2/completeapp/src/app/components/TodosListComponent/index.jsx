import React from 'react';
import SubTitle from '../SubTitle.jsx';
import Todos from '../Todos/index.jsx';
import AddTodoList from '../AddTodoList/index.jsx';

class TodosListComponent extends React.Component{
  constructor(props){
    super(props);
    this.removeHandler = this.removeHandler.bind(this);
  }

  removeHandler(e){
    e.preventDefault();
    this.props.removeTaskHandler(this.props.todosListId);
  }

  render(){
    return (<div className="todos-list-component">
    <SubTitle subtitle={this.props.title} />
    <a className="remove" href="" onClick={this.removeHandler}>[X]</a>
    <AddTodoList todosListId={this.props.todosListId} addNewTaskHandler={this.props.addNewTaskHandler} />
    <Todos
      todos={this.props.todos}
      todosListId={this.props.todosListId}
      removeTodo={this.props.removeTodo}
      toggleTodo={this.props.toggleTodo}
      />
  </div>);
}
}

export default TodosListComponent;
