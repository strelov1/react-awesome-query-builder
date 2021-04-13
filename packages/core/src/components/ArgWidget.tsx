import React, { PureComponent } from 'react';
import Widget from './Widget';

type ArgWidgetProps = {
  funcKey: string;
  argKey: string;
  setValue: () => void;
  setValueSrc: () => void;
  readonly?: boolean;
};

export default class ArgWidget extends PureComponent<ArgWidgetProps> {
  setValue = (_delta, value, _widgetType) => {
    const { setValue, argKey } = this.props;
    setValue(argKey, value);
  };

  setValueSrc = (_delta, valueSrc, _widgetType) => {
    const { setValueSrc, argKey } = this.props;
    setValueSrc(argKey, valueSrc);
  };

  render() {
    return (
      <Widget
        {...this.props}
        setValue={this.setValue}
        setValueSrc={this.setValueSrc}
        isFuncArg
      />
    );
  }
}
