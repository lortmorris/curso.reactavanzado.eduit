import React from 'react';
import { toggleTodo, removeTodo } from '../../actions';

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  clickHandler(e){
    e.preventDefault();
    this.props.dispatch(toggleTodo(this.props.todosListId, this.props.id));
  }

  removeHandler(e){
    e.preventDefault();
    this.props.dispatch(removeTodo(this.props.todosListId, this.props.id));
  }
  render(){
    const {completed, title } = this.props;
    return (
      <li>
        <a style={{color: `${completed ? 'blue' : 'red'}`}} href="" onClick={this.clickHandler}>{title}</a>
        <a href="" onClick={this.removeHandler}>[X]</a>
      </li>
    );
  }
}


export default Todo;
