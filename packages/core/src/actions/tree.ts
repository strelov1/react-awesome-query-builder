import Immutable from 'immutable';
import uuid from '../utils/uuid';
import { defaultRuleProperties, defaultGroupProperties } from '../utils/defaultUtils';
import * as constants from '../constants';

/**
 * @param {object} config
 * @param {Immutable.Map} tree
 */
export const setTree = (config, tree) => ({
  type: constants.SET_TREE,
  tree,
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {Immutable.Map} properties
 */
export const addRule = (config, path, properties) => ({
  type: constants.ADD_RULE,
  path,
  id: uuid(),
  properties: defaultRuleProperties(config).merge(properties || {}),
  config,
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 */
export const removeRule = (config, path) => ({
  type: constants.REMOVE_RULE,
  path,
  config,
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {Immutable.Map} properties
 */
export const addGroup = (config, path, properties) => ({
  type: constants.ADD_NEW_GROUP,
  path,
  properties: defaultGroupProperties(config).merge(properties || {}),
  config,
});

/**
 * @param {object} config
 * @param {Immutable.List} path
 */
export const removeGroup = (config, path) => ({
  type: constants.REMOVE_GROUP,
  path,
  config,
});

/**
 * @param {object} config
 * @param {Array} fromPath
 * @param {Array} toPath
 * @param {String} placement, see constants PLACEMENT_*
 */
export const moveItem = (config, fromPath, toPath, placement) => ({
  type: constants.MOVE_ITEM,
  fromPath: new Immutable.List(fromPath),
  toPath: new Immutable.List(toPath),
  placement,
  config,
});
