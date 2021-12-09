import Vue from 'vue';
import * as types from './mutation-types';
import defaultState from './state';
const { toast } = defaultState;

export const CLEAR_STATE = ({ commit }) => commit(types.CLEAR_STATE);
export const SHOW_TOAST = ({ commit }, config) => {
  const { type, message, options } = config;
  commit(types.TOAST, options || {});
  switch (type) {
    case 'warning':
      Vue.$toast.warning(message || toast.options);
      break;
    case 'error':
      Vue.$toast.error(message || toast.options);
      break;
    case 'success':
      Vue.$toast.success(message || toast.options);
      break;
    default:
      Vue.$toast.info(message || toast.options);
  }
};

export const TOGGLE_THEME = ({ commit }) => commit(types.TOGGLE_THEME);
