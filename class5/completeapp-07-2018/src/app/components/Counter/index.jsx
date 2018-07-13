import React from 'react';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';
import { Button, Alert } from 'reactstrap';

const Counter = ({ x, setX, showName, display, list }) => (
  <div>
      <span>{x}</span>
      <Button onClick={() => setX(n => n + 1)}>[+]</Button>
      <Button onClick={() => setX(n => n - 1)}>[-]</Button>
      <Button color="danger" onClick={() => showName(n => n - 1)}>Show</Button>
      <div>
      {display && (<Alert color="primary">Me estoy mostrando</Alert>)}
      </div>
      <div>
          <ul>
            {list.map(l => (<li>{l}</li>))}
          </ul>
      </div>
  </div>
);


export default compose(
  withState('x', 'setX', 0),
  withState('display', 'setDisplay', false),
  withHandlers({
    showName: props => event => {
      props.setDisplay(!props.display);
    }
  }),
  withProps(props => ({
    list: [],
  })),
  lifecycle({
    componentDidMount() {
    console.info('el componente fue montado');
    this.setState({ list: [1, 2, 3, 4, 5] });
  }
  })
)(Counter);
