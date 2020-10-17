import React from 'react';

import ErrorMesage from '../ErrorMessage';

function Screen({
  children,
  error = '',
  title,
  modal,
  loading = false,
}) {
  return (
    <div className={modal ? 'modal' : 'screen'}>
      <>
        {!loading && (
          <>
            {title && (<h1>{title}</h1>)}
            {children}
          </>
        )}

        {loading && (
          <span>Cargando...</span>
        )}

        {error !== '' && <ErrorMesage error={error} />}
      </>
    </div>
  );
}

export default Screen;
