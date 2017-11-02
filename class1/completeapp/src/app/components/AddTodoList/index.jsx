import React from 'react';
import { addTodoList, addTodo } from '../../actions';

class AddTodoList extends React.Component {
  constructor(props){
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      input: '',
      todosListId: this.props.todosListId || null,
    };
  }

  submit(e){
    e.preventDefault();
    this.props.dispatch(this.state.todosListId !== null ?
      addTodo(this.state.todosListId, this.state.input) :
      addTodoList(this.state.input));
    this.setState({input: ''});
  }
  changeHandler(e) {
    this.setState({input: e.target.value});
  }

  render(){
    return (
      <form onSubmit={this.submit}>
        <p>
        {`${this.state.todoListId !== null ? 'Task' : 'TodoList'}`}: <input type="text" value={this.state.input} onChange={this.changeHandler} />
        <input type="submit" value="Add+" />
        </p>
      </form>
    );
  }
}

export default AddTodoList;
