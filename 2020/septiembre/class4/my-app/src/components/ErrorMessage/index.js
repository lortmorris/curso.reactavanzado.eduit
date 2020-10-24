import React from 'react';

function ErrorMessage({
  error,
}) {
  return (<span style={{ color: 'red' }}>{`${error}`}</span>);
}

export default ErrorMessage;
