import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Config, Dragging } from 'types';

import { getFieldConfig } from '../../utils/configUtils';
import { pureShouldComponentUpdate } from '../../utils/renderUtils';

type RuleContainerProps = {
  id: string;
  config: Config;
  path: any;
  operator?: string;
  field?: string;
  fieldFunc?: string;
  actions: any; // {removeRule: Funciton, setField, setOperator, setOperatorOption, setValue, setValueSrc, ...}
  onDragStart?: () => void;
  value?: any; // depends on widget
  valueSrc?: any;
  valueError?: any;
  operatorOptions?: any;
  reordableNodesCnt?: number;
  parentField?: string; // from RuleGroup
  // connected:
  dragging?: Dragging;
  isDraggingTempo?: boolean;
};

export default (Rule: ReactElement<any>) => {
  class RuleContainer extends Component<RuleContainerProps> {
    constructor(props: RuleContainerProps) {
      super(props);

      this.dummyFn.isDummyFn = true;
    }

    dummyFn = () => {};

    removeSelf = () => {
      this.props.actions.removeRule(this.props.path);
    };

    setField = (field) => {
      this.props.actions.setField(this.props.path, field);
    };

    setFieldFunc = (fieldFunc) => {
      this.props.actions.setFieldFunc(this.props.path, fieldFunc);
    };

    setOperator = (operator) => {
      this.props.actions.setOperator(this.props.path, operator);
    };

    setOperatorOption = (name, value) => {
      this.props.actions.setOperatorOption(this.props.path, name, value);
    };

    setValue = (delta, value, type, __isInternal) => {
      this.props.actions.setValue(this.props.path, delta, value, type, __isInternal);
    };

    setValueSrc = (delta, srcKey) => {
      this.props.actions.setValueSrc(this.props.path, delta, srcKey);
    };

    shouldComponentUpdate(nextProps, nextState) {
      const prevProps = this.props;
      const prevState = this.state;

      let should = pureShouldComponentUpdate(this)(nextProps, nextState);
      if (should) {
        if (prevState == nextState && prevProps != nextProps) {
          const draggingId = nextProps.dragging.id || prevProps.dragging.id;
          const isDraggingMe = draggingId == nextProps.id;
          const chs = [];
          for (const k in nextProps) {
            let changed = nextProps[k] != prevProps[k];
            if (k == 'dragging' && !isDraggingMe) {
              changed = false; // dragging another item -> ignore
            }
            if (changed) {
              chs.push(k);
            }
          }
          if (!chs.length) should = false;
        }
      }
      return should;
    }

    render() {
      const isDraggingMe = this.props.dragging.id == this.props.id;
      const fieldConfig = getFieldConfig(this.props.field, this.props.config);
      const { showErrorMessage } = this.props.config.settings;
      const isInDraggingTempo = !isDraggingMe && this.props.isDraggingTempo;

      const { valueError } = this.props;
      const oneValueError =
        (valueError &&
          valueError
            .toArray()
            .filter((e) => !!e)
            .shift()) ||
        null;
      const hasError = oneValueError != null && showErrorMessage;

      return (
        <div
          className={classNames(
            'group-or-rule-container',
            'rule-container',
            hasError ? 'rule-with-error' : null
          )}
          data-id={this.props.id}
        >
          {[
            isDraggingMe ? (
              <Rule
                key="dragging"
                id={this.props.id}
                isDraggingMe
                isDraggingTempo
                dragging={this.props.dragging}
                setField={this.dummyFn}
                setFieldFunc={this.dummyFn}
                setOperator={this.dummyFn}
                setOperatorOption={this.dummyFn}
                removeSelf={this.dummyFn}
                setValue={this.dummyFn}
                setValueSrc={this.dummyFn}
                selectedField={this.props.field || null}
                selectedFieldFunc={this.props.fieldFunc || null}
                parentField={this.props.parentField || null}
                selectedOperator={this.props.operator || null}
                value={this.props.value || null}
                valueSrc={this.props.valueSrc || null}
                valueError={this.props.valueError || null}
                operatorOptions={this.props.operatorOptions}
                config={this.props.config}
                reordableNodesCnt={this.props.reordableNodesCnt}
                totalRulesCnt={this.props.totalRulesCnt}
              />
            ) : null,
            <Rule
              key={this.props.id}
              id={this.props.id}
              isDraggingMe={isDraggingMe}
              isDraggingTempo={isInDraggingTempo}
              onDragStart={this.props.onDragStart}
              removeSelf={isInDraggingTempo ? this.dummyFn : this.removeSelf}
              setField={isInDraggingTempo ? this.dummyFn : this.setField}
              setFieldFunc={isInDraggingTempo ? this.dummyFn : this.setFieldFunc}
              setOperator={isInDraggingTempo ? this.dummyFn : this.setOperator}
              setOperatorOption={
                isInDraggingTempo ? this.dummyFn : this.setOperatorOption
              }
              setValue={isInDraggingTempo ? this.dummyFn : this.setValue}
              setValueSrc={isInDraggingTempo ? this.dummyFn : this.setValueSrc}
              selectedField={this.props.field || null}
              selectedFieldFunc={this.props.fieldFunc || null}
              parentField={this.props.parentField || null}
              selectedOperator={this.props.operator || null}
              value={this.props.value || null}
              valueSrc={this.props.valueSrc || null}
              valueError={this.props.valueError || null}
              operatorOptions={this.props.operatorOptions}
              config={this.props.config}
              reordableNodesCnt={this.props.reordableNodesCnt}
              totalRulesCnt={this.props.totalRulesCnt}
            />,
          ]}
        </div>
      );
    }
  }

  const ConnectedRuleContainer = connect((state) => {
    return {
      dragging: state.dragging,
    };
  })(RuleContainer);
  ConnectedRuleContainer.displayName = 'ConnectedRuleContainer';

  return ConnectedRuleContainer;
};
