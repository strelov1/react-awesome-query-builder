import React, { PureComponent, ReactElement } from 'react';

import { getOperatorConfig } from '../../utils/configUtils';

type OperatorOptionsContainerProps = {
  config: any;
  operatorOptions: any;
  selectedField: string;
  selectedOperator: string;
  readonly?: boolean;
  // actions
  setOperatorOption: () => void;
};

export default (OperatorOptions: ReactElement<any>) => {
  return class OperatorOptionsContainer extends PureComponent<OperatorOptionsContainerProps> {
    render() {
      const {
        readonly,
        config,
        operatorOptions,
        selectedOperator,
        selectedField,
        setOperatorOption,
      } = this.props;

      if (!selectedOperator) {
        return null;
      }
      const operatorDefinitions = getOperatorConfig(
        config,
        selectedOperator,
        selectedField
      );
      if (typeof operatorDefinitions.options === 'undefined') {
        return null;
      }

      const { factory: optionsFactory, ...optionsProps } = operatorDefinitions.options;

      return (
        <OperatorOptions name={selectedOperator} config={config}>
          {optionsFactory({
            ...optionsProps,
            config,
            field: selectedField,
            operator: selectedOperator,
            options: operatorOptions,
            setOption: setOperatorOption,
            readonly: readonly || false,
          })}
        </OperatorOptions>
      );
    }
  };
};
