import React, {
  useState,
} from 'react';

function TodoAddForm({
  handle,
}) {
  const [name, setName] = useState('');

  function onSubmitHandle(e) {
    e.preventDefault();
    handle(name);
    setName('');
  }

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <input type="text" name="todoname" id="todoname" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onSubmitHandle}>
          Add+
        </button>
      </form>
    </div>
  );
}

export default TodoAddForm;
