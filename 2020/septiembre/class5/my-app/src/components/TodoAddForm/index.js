import React, {
  useState,
} from 'react';

import UsersDropDown from '../UsersDropdown';

function TodoAddForm({
  handle,
  users = [],
}) {
  const [name, setName] = useState('');
  const [user, setUser] = useState();
  function onSubmitHandle(e) {
    e.preventDefault();
    handle(name, user);
    setName('');
    setUser();
  }
  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <input type="text" name="todoname" id="todoname" value={name} onChange={(e) => setName(e.target.value)} />
        <UsersDropDown users={users} onChange={setUser} />
        <button onClick={onSubmitHandle} type="submit">
          Add+
        </button>
      </form>
    </div>
  );
}

export default TodoAddForm;
