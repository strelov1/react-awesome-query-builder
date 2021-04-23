import React, { PureComponent } from 'react';
import { Map } from 'immutable';
import { Config } from 'types';

import FuncSelect from './FuncSelect';
import Col from './Col';

type FuncWidgetProps = {
  config: Config;
  field: string;
  operator: any;
  customProps?: any;
  value?: any;
  setValue: any;
  readonly?: boolean;
};

export default class FieldFuncWidget extends PureComponent<FuncWidgetProps> {
  setFunc = (funcKey) => {
    this.props.setValue(funcKey);
  };

  renderFuncSelect = () => {
    const { config, field, operator, customProps, value, readonly } = this.props;
    const funcKey = value ? new Map().set('func', value).get('func') : null;
    const selectProps = {
      value: funcKey,
      setValue: this.setFunc,
      config,
      field,
      operator,
      customProps,
      readonly,
    };
    const { showLabels, funcLabel } = config.settings;
    const widgetLabel = showLabels ? (
      <label className="rule--label">{funcLabel}</label>
    ) : null;

    return (
      <Col key="func" className="rule--func">
        {widgetLabel}
        <FuncSelect {...selectProps} />
      </Col>
    );
  };

  render() {
    console.log('CONFIG', this.props.config.funcs);
    return <Col className="rule--func--wrapper">{this.renderFuncSelect()}</Col>;
  }
}
