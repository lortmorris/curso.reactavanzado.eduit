import React from 'react';

function UserItem({
  firstName,
  lastName,
  email,
  _id,
  removeHandle,
}) {
  return (
    <li>
      {`${firstName} ${lastName} (${email})`}
      <button type="button" onClick={() => removeHandle(_id)}>[-]</button>
    </li>
  );
}

export default UserItem;
