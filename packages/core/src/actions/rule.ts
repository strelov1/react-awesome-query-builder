import * as constants from '../constants';

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} field
 */
export const setField = (config, path, field) => ({
  type: constants.SET_FIELD,
  path,
  field,
  config,
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} field
 */
export const setFieldFunc = (config, path, field) => ({
  type: constants.SET_FIELD_FUNC,
  path,
  field,
  config,
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} operator
 */
export const setOperator = (config, path, operator) => ({
  type: constants.SET_OPERATOR,
  path,
  operator,
  config,
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {integer} delta
 * @param {*} value
 * @param {string} valueType
 * @param {boolean} __isInternal
 */
export const setValue = (config, path, delta, value, valueType, __isInternal) => ({
  type: constants.SET_VALUE,
  path,
  delta,
  value,
  valueType,
  config,
  __isInternal,
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {integer} delta
 * @param {*} srcKey
 */
export const setValueSrc = (config, path, delta, srcKey) => ({
  type: constants.SET_VALUE_SRC,
  path,
  delta,
  srcKey,
  config,
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} name
 * @param {*} value
 */
export const setOperatorOption = (config, path, name, value) => ({
  type: constants.SET_OPERATOR_OPTION,
  path,
  name,
  value,
  config,
});
