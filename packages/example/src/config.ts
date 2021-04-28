import { BasicConfig } from '@react-query-builder/core';

const config = {
  ...BasicConfig,
  fields: {
    user: {
      label: 'User',
      tooltip: 'Group of fields',
      type: '!struct',
      subfields: {
        firstName: {
          label2: 'Username',
          type: 'text',
          excludeOperators: ['proximity'],
          tableName: 't2.fristName',
          fieldSettings: {
            validateValue: (val: any, fieldSettings: any) => {
              return val.length < 10;
            },
          },
          mainWidgetProps: {
            valueLabel: 'Name',
            valuePlaceholder: 'Enter name',
          },
        },
        login: {
          type: 'text',
          tableName: 't2.login',
          excludeOperators: ['proximity'],
          fieldSettings: {
            validateValue: (val: any, fieldSettings: any) => {
              return (
                val.length < 10 && (val === '' || val.match(/^[A-Za-z0-9_-]+$/) !== null)
              );
            },
          },
          mainWidgetProps: {
            valueLabel: 'Login',
            valuePlaceholder: 'Enter login',
          },
        },
      },
    },
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
      label: 'LOWER',
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    UPPER: {
      label: 'UPPER',
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    TRIM: {
      label: 'TRIM',
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    LENGTH: {
      label: 'LENGTH',
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    TO_DATE: {
      label: 'TO_DATE',
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    LAST_DAY: {
      label: 'LAST_DAY',
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    // two args
    DATEDIFF: {
      label: 'DATEDIFF',
      returnType: 'text',
      args: {
        enddate: {
          label: 'end date',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        startdate: {
          label: 'start date',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    DATE_ADD: {
      label: 'DATE_ADD',
      returnType: 'text',
      args: {
        enddate: {
          label: 'end date',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        days: {
          label: 'days',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    DATE_SUB: {
      label: 'DATE_SUB',
      returnType: 'text',
      args: {
        enddate: {
          label: 'end date',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        days: {
          label: 'days',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    ADD_MOUNTHS: {
      label: 'ADD_MOUNTHS',
      returnType: 'text',
      args: {
        startdate: {
          label: 'startdate',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        days: {
          label: 'days',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    // three args
    SUBSTR: {
      label: 'SUBSTR',
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        start: {
          label: 'start',
          type: 'text',
          valueSources: ['value'],
        },
        length: {
          label: 'length',
          type: 'text',
          valueSources: ['value'],
        },
      },
    },
    REGEXP_EXTRACT: {
      label: 'SUBSTR',
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        pattern: {
          label: 'Pattern',
          type: 'text',
          valueSources: ['value'],
        },
        index: {
          label: 'index',
          type: 'text',
          valueSources: ['value'],
        },
      },
    },
    REGEXP_REPLACE: {
      label: 'SUBSTR',
      returnType: 'text',
      args: {
        str: {
          label: 'String',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        pattern: {
          label: 'Pattern',
          type: 'text',
          valueSources: ['value'],
        },
        replacement: {
          label: 'replacement',
          type: 'text',
          valueSources: ['value'],
        },
      },
    },
    COALESCE: {
      label: 'COALESCE',
      returnType: 'text',
      args: {
        val1: {
          label: 'val1',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        val2: {
          label: 'val2',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        val3: {
          label: 'val3',
          type: 'text',
          valueSources: ['value', 'field'],
        },
        val4: {
          label: 'val4',
          type: 'text',
          valueSources: ['value', 'field'],
        },
      },
    },
    EXPRESSION: {
      label: 'EXPRESSION',
      returnType: 'text',
      args: {
        expr: {
          label: 'expr',
          type: 'text',
          valueSources: ['value'],
        },
      },
    },
  },
};

export default config;
