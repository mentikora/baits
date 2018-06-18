import React from 'react';

import { VsoConsumer } from '../contexts/vso';

export const injectData = keys => Component => props => (
  <VsoConsumer>
    {({ vso, loading }) => {
      const data = vso ? (keys ? keys.reduce((d, k) => Object.assign(d, { [k]: vso[k] }), {}) : {}) : null;

      return (
        <Component data={data} loading={loading} {...props} />
      );
    }}
  </VsoConsumer>    
);
