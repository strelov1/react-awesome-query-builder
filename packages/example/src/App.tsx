import React, { useState } from 'react';
import { Query, Builder, Utils } from '@react-query-builder/core';
import config from './config';

import './style.scss';

const App = () => {
  const [tree, setTree] = useState<any>(
    Utils.loadTree({ id: Utils.uuid(), type: 'group' })
  );

  const onChange = (immutableTree: any) => {
    setTree(immutableTree);
  };

  const renderBuilder = (props: any) => (
    <div className="query-builder-container" style={{ padding: '10px' }}>
      <div className="query-builder qb-lite">
        <Builder {...props} />
      </div>
    </div>
  );

  return (
    <div>
      <Query {...config} value={tree} onChange={onChange} renderBuilder={renderBuilder} />
      <div className="query-builder-result">
        <div>
          SQL where: <pre>{JSON.stringify(Utils.sqlFormat(tree, config))}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
