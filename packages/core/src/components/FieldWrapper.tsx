import React, { PureComponent } from 'react';
import { Config } from 'types';

import Col from './Col';
import Field from './Field';

type FieldWrapperProps = {
  config: Config;
  selectedField?: string;
  parentField?: string;
  setField: () => void;
  classname: string;
  readonly?: boolean;
};

export default class FieldWrapper extends PureComponent<FieldWrapperProps> {
  render() {
    const {
      config,
      selectedField,
      setField,
      parentField,
      classname,
      readonly,
    } = this.props;
    return (
      <Col className={classname}>
        {config.settings.showLabels && (
          <label className="rule--label">{config.settings.fieldLabel}</label>
        )}
        <Field
          config={config}
          selectedField={selectedField}
          parentField={parentField}
          setField={setField}
          customProps={config.settings.customFieldSelectProps}
          readonly={readonly}
        />
      </Col>
    );
  }
}
