import AppAction from './types/AppAction';
import AppState from './types/AppState';

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TASKS_INIT':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'TASK_ADD':
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
  }
  return state;
};

export default reducer;
