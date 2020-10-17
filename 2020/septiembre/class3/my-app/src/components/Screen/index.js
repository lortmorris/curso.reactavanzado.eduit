import React from 'react';

import ErrorMesage from '../ErrorMessage';

function Screen({
  children,
  error = '',
  title,
  modal,
}) {
  return (
    <div className={modal ? 'modal' : 'screen'}>
      {title && (<h1>{title}</h1>)}
      {children}
      {error !== '' && <ErrorMesage error={error} />}
    </div>
  );
}

export default Screen;
