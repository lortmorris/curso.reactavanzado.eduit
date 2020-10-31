import React from 'react';

import { AppConsumer } from '../../AppContext';

function Home() {
  return (
    <AppConsumer>
      {
        (context) => (
          <h2>
            {console.info('context: ', context)}
            {`${context.theme}`}
          </h2>
        )
      }
    </AppConsumer>
  );
}

export default Home;
