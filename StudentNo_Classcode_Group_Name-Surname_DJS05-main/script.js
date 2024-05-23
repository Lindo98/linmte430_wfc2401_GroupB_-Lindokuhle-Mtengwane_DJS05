const initialState = { count: 0 };
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const resetButton = document.getElementById("reset");
const saveButton = document.getElementById("save");

let currentState = initialState;

const subscribers = [];
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

const render = () => {
  document.getElementById("count-el").innerText = currentState.count;
};

// Dispatches an action to update the current state and triggers a re-render and notification of subscribers.

const dispatch = (action) => {
  currentState = reducer(currentState, action);
  render();
  notifySubscribers();
};

// Notifies all subscribers by calling their respective functions.

const notifySubscribers = () => {
  subscribers.forEach((subscriber) => subscriber());
};

addButton.addEventListener("click", () => dispatch({ type: "ADD" }));
subtractButton.addEventListener("click", () => dispatch({ type: "SUBTRACT" }));
resetButton.addEventListener("click", () => dispatch({ type: "RESET" }));

saveButton.addEventListener("click", () => {
  console.log("New state:", currentState);
});

render();
