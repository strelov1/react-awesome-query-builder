import React, { PureComponent, ReactElement } from 'react';
import { Config } from 'types';
import WidgetContainer from './containers/WidgetContainer';
import Col from './Col';

type WidgetProps = {
  config: Config;
  name: string;
  children?: ReactElement<any>;
};
@WidgetContainer
export default class Widget extends PureComponent<WidgetProps> {
  render() {
    const { name, children } = this.props;
    return (
      <Col
        className={`rule--widget rule--widget--${name.toUpperCase()}`}
        key={`widget-col-${name}`}
      >
        {children}
      </Col>
    );
  }
}
