import React, {
  useState,
  useEffect,
} from 'react';

function UsersDropdown({
  users = [],
  onChange,
}) {
  const [value, setValue] = useState();

  function _change(_id) {
    onChange(users.filter((user) => user._id === _id).pop());
  }

  function handleChange(evt) {
    setValue(evt.target.value);
    _change(evt.target.value);
  }

  useEffect(() => {
    if (users.length > 0) {
      setValue(users[0]._id);
      _change(users[0]._id);
    }
  }, [users]);

  return (
    <select onChange={handleChange} value={value}>
      {users.map((user) => (
        <option key={user._id} value={user._id}>{`${user.firstName} ${user.lastName}`}</option>
      ))}
    </select>
  );
}

export default UsersDropdown;
