import { Action } from '../types/index';
import { State } from '../types/index';

const reducer = (state: State, action: Action): State => {
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

    case 'TASK_DELETE':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'TASK_CHANGE':
      return {
        ...state,
        tasks: [...state.tasks].map((task) => {
          if (task.id !== action.payload.id) {
            return task;
          } else {
            return action.payload;
          }
        }),
      };
  }
  return state;
};

export default reducer;
