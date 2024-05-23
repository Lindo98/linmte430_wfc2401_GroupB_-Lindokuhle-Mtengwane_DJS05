const initialState = { count: 0 };
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const resetButton = document.getElementById("reset");

/**
 * Reduces the state based on the given action.
 *
 * @param {Object} state - The current state (default: initialState).
 * @param {Object} action - The action object.
 * @param {string} action.type - The type of the action.
 * @return {Object} The new state after applying the action.
 */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { count: state.count + 1 };
    case "SUBTRACT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};
