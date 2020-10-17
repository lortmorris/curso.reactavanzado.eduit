import React, {
  useState,
  useEffect,
} from 'react';

import {
  fetchusers,
  saveuser,
  removeuser,
} from '../../api/users';

import UserItem from '../../components/UserItem';

import Screen from '../../components/Screen';
import UsersAddForm from '../../components/UsersAddForm';

function Users() {
  const [users, setUsers] = useState([]);

  const [init, setInit] = useState(false);
  const [error, setError] = useState('');

  async function removeUserHandle(id) {
    try {
      console.info('removing: ', id, users);
      await removeuser(id);
      setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.info('remove user error: ', err);
      setError('Error eliminando usuario');
    }
  }
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

  async function addUser(data) {
    try {
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
    <Screen
      error={error}
      title="Usuarios"
      modal
    >
      <UsersAddForm addUserHandle={addUser} />
      <div>
        <ul>
          {users.map((user) => (
            <UserItem
              key={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              _id={user._id}
              removeHandle={removeUserHandle}
            />
          ))}
        </ul>
      </div>
    </Screen>
  );
}

export default Users;
