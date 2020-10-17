import React from 'react';

function UsersDropdown({
  users = [],
}) {
  return (
    <select>
      {users.map((user) => (
        <option value={user._id}>{`${user.firstName} ${user.lastName}`}</option>
      ))}
    </select>
  );
}

export default UsersDropdown;
