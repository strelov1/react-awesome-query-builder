import { BasicConfig } from '@react-query-builder/core';

const config = {
  ...BasicConfig,
  fields: {
    qty: {
      label: 'qty',
      type: 'text',
    },
    test: {
      label: 'test',
      type: 'text',
    },
  },
  funcs: {
    LOWER: {
      label: 'Lowercase',
      mongoFunc: '$toLower',
      jsonLogic: 'toLowerCase',
      jsonLogicIsMethod: true,
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
  },
};

export default config;
