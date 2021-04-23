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
    // longValue: {
    //   label:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since t",
    //   type: 'text',
    // },
  },
  funcs: {
    LOWER: {
      label: 'Lowercase',
      returnType: 'text',
      sqlFormatValue: (val, fieldDef, wgtDef, op, opDef) => {
        console.log('SQL', val, fieldDef, wgtDef, op, opDef);
        return SqlString.escape(val);
      },
      args: {
        first: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        second: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    EXPRESION: {
      label: 'EXPRESION',
      returnType: 'text',
      sqlFormatValue: (val, fieldDef, wgtDef, op, opDef) => {
        console.log('SQL', val, fieldDef, wgtDef, op, opDef);
        return SqlString.escape(val);
      },
      args: {
        first: {
          label: 'String',
          type: 'text',
          valueSources: ['value'],
        },
      },
    },
  },
};

export default config;
