import React from 'react';
import { BasicConfig, Utils } from '@react-query-builder/core';
import MaterialWidgets from '../components/index';

const { SqlString } = Utils;

const {
  MaterialBooleanWidget,
  MaterialTextWidget,
  MaterialDateWidget,
  MaterialTimeWidget,
  MaterialDateTimeWidget,
  MaterialMultiSelectWidget,
  MaterialSelectWidget,
  MaterialNumberWidget,
  MaterialSliderWidget,
  MaterialRangeWidget,

  MaterialFieldSelect,
  MaterialConjs,
  MaterialButton,
  MaterialButtonGroup,
  MaterialValueSources,

  MaterialProvider,
  MaterialConfirm,
  MaterialUseConfirm,
} = MaterialWidgets;

const settings = {
  ...BasicConfig.settings,

  renderField: (props) => <MaterialFieldSelect {...props} />,
  renderOperator: (props) => <MaterialFieldSelect {...props} />,
  renderFunc: (props) => <MaterialFieldSelect {...props} />,
  renderConjs: (props) => <MaterialConjs {...props} />,
  renderButton: (props) => <MaterialButton {...props} />,
  renderButtonGroup: (props) => <MaterialButtonGroup {...props} />,
  renderValueSources: (props) => <MaterialValueSources {...props} />,
  renderProvider: (props) => <MaterialProvider {...props} />,
  renderConfirm: MaterialConfirm,
  useConfirm: MaterialUseConfirm,
};

const widgets = {
  ...BasicConfig.widgets,
  text: {
    ...BasicConfig.widgets.text,
    factory: (props) => <MaterialTextWidget {...props} />,
  },
  number: {
    ...BasicConfig.widgets.number,
    factory: (props) => <MaterialNumberWidget {...props} />,
  },
  multiselect: {
    ...BasicConfig.widgets.multiselect,
    factory: (props) => <MaterialMultiSelectWidget {...props} />,
  },
  select: {
    ...BasicConfig.widgets.select,
    factory: (props) => <MaterialSelectWidget {...props} />,
  },
  slider: {
    ...BasicConfig.widgets.slider,
    factory: (props) => <MaterialSliderWidget {...props} />,
  },
  boolean: {
    ...BasicConfig.widgets.boolean,
    factory: (props) => <MaterialBooleanWidget {...props} />,
  },
  date: {
    ...BasicConfig.widgets.date,
    factory: (props) => <MaterialDateWidget {...props} />,
  },
  time: {
    ...BasicConfig.widgets.time,
    factory: (props) => <MaterialTimeWidget {...props} />,
  },
  datetime: {
    ...BasicConfig.widgets.datetime,
    factory: (props) => <MaterialDateTimeWidget {...props} />,
  },

  rangeslider: {
    type: 'number',
    jsType: 'number',
    valueSrc: 'value',
    factory: (props) => <MaterialRangeWidget {...props} />,
    valueLabel: 'Range',
    valuePlaceholder: 'Select range',
    valueLabels: [
      { label: 'Number from', placeholder: 'Enter number from' },
      { label: 'Number to', placeholder: 'Enter number to' },
    ],
    formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
      return isForDisplay ? val : JSON.stringify(val);
    },
    sqlFormatValue: (val, fieldDef, wgtDef, op, opDef) => {
      return SqlString.escape(val);
    },
    singleWidget: 'slider',
    toJS: (val, fieldSettings) => val,
  },
};

const types = {
  ...BasicConfig.types,
  number: {
    ...BasicConfig.types.number,
    widgets: {
      ...BasicConfig.types.number.widgets,
      rangeslider: {
        opProps: {
          between: {
            isSpecialRange: true,
          },
          not_between: {
            isSpecialRange: true,
          },
        },
        operators: ['between', 'not_between', 'is_empty', 'is_not_empty'],
      },
    },
  },
};

export default {
  ...BasicConfig,
  types,
  widgets,
  settings,
};
