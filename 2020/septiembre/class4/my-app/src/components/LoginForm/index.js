import React, {
  useState,
} from 'react';

function LoginForm({ submitHandle }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function localHandle(evt) {
    evt.preventDefault();
    submitHandle(username, password);
  }

  return (
    <div>
      <form onSubmit={localHandle}>
        <p>
          <input type="text" name="username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
        </p>
        <p>
          <input type="password" name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
        </p>
        <p>
          <button type="submit">Ingresar</button>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
