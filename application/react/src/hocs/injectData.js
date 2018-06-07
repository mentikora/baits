import React from 'react';

import { VsoConsumer } from '../contexts/vso';

export const injectData = keys => Component => props => (
  <VsoConsumer>
    {({ vso }) => {
      const data = vso ? keys.reduce((d, k) => Object.assign(d, { [k]: vso[k] }), {}) : null;

      return (
        <Component data={data} {...props} />
      );
    }}
  </VsoConsumer>    
);
