import React, {
  useState,
  useEffect,
} from 'react';

import {
  fetchusers,
  saveuser,
  removeuser,
} from '../../api/users';

function Users() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [init, setInit] = useState(false);
  const [error, setError] = useState('');

  async function fetchUsers() {
    try {
      setInit(true);
      const data = await fetchusers();
      setUsers(data.docs);
    } catch (err) {
      setError('Error cargando datos');
      console.info('error fetchUsers: ', err);
    }
  }

  async function addUser() {
    try {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };

      const nData = await saveuser(data);
      setUsers([...users, nData]);
    } catch (err) {
      setError('Error insertando usuario');
      console.info('Error insert user: ', err);
    }
  }

  useEffect(() => {
    if (!init) fetchUsers();
  }, [init]);

  return (
    <div>
      <h2>Users</h2>
      <div>
        <input type="text" name="firstName" value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
        <input type="text" name="lastName" value={lastName} onChange={(evt) => setLastName(evt.target.value)} />
        <input type="text" name="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
        <input type="password" name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <li>{`${user.firstName} ${user.lastName}`}</li>
          ))}
        </ul>
      </div>
      {error !== '' && (<span style={{ color: 'red' }}>{`${error}`}</span>)}
    </div>
  );
}

export default Users;
