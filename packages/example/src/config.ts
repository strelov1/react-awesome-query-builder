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
    longValue: {
      label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since t',
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
