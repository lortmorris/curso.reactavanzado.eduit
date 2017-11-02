import React from 'react';
import SubTitle from '../SubTitle.jsx';
import Todos from '../Todos/index.jsx';
import AddTodoList from '../AddTodoList/index.jsx';
import { removeTodoList } from '../../actions';
class TodosListComponent extends React.Component{
  constructor(props){
    super(props);
    this.removeHandler = this.removeHandler.bind(this);
  }

  removeHandler(e){
    e.preventDefault();
    this.props.dispatch(removeTodoList(this.props.todosListId));
    this.props.updateHandler();
  }

  render(){
    return (<div className="todos-list-component">
      <SubTitle subtitle={this.props.title} />
      <a className="remove" href="" onClick={this.removeHandler}>[X]</a>
      <AddTodoList dispatch={this.props.dispatch} todosListId={this.props.todosListId} updateHandler={this.props.updateHandler} />
      <Todos todos={this.props.todos} dispatch={this.props.dispatch} todosListId={this.props.todosListId} updateHandler={this.props.updateHandler} />
    </div>);
  }
}

export default TodosListComponent;
