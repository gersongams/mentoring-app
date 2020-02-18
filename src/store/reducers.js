import { TOGGLE_SIDEBAR } from "./actions";

const INITIAL_STATE = {
  showSidebar: true
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        showSidebar: !state.showSidebar
      };
    default:
      return state;
  }
};

export { reducer, INITIAL_STATE };

