import React, {
  useState,
} from 'react';

function UsersAddFormn({
  addUserHandle,
}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    addUserHandle(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="firstName" value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
        </p>
        <p>
          <input type="text" name="lastName" value={lastName} onChange={(evt) => setLastName(evt.target.value)} />
        </p>
        <p>
          <input type="text" name="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
        </p>
        <p>
          <input type="password" name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
        </p>
        <p>
          <button type="submit">[+]</button>
        </p>
      </form>
    </div>
  );
}

export default UsersAddFormn;
