import React, { PureComponent, ReactElement } from 'react';

import OperatorOptionsContainer from './containers/OperatorOptionsContainer';

type OperatorOptionsProps = {
  config: any;
  name: string;
  children?: ReactElement<any>;
};
@OperatorOptionsContainer
export default class OperatorOptions extends PureComponent<OperatorOptionsProps> {
  render() {
    const { name, children } = this.props;
    return (
      <div className={`rule--operator rule--operator--${name.toUpperCase()}`}>
        {children}
      </div>
    );
  }
}
