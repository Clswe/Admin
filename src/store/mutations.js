import { cloneDeep } from 'lodash';
import * as types from './mutation-types';
import defaultState from './state';

export default {
  [types.TOAST] (state, config) {
    const _state = cloneDeep(defaultState);
    state.toast = {
      ..._state.toast.options,
      ...(config.options || {})
    };
  },

  [types.TOGGLE_THEME] (state) {
    const _state = cloneDeep(defaultState);
    const newTheme = !_state.dark;
    state.dark = newTheme;
    window.localStorage.setItem('dark', newTheme);
  },

  [types.CLEAR_STATE] (state) {
    const _state = cloneDeep(defaultState);
    Object.keys(state).forEach(key => {
      state[key] = cloneDeep(_state[key]);
    });
  }
};
