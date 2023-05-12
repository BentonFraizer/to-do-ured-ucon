import { Task } from '../types';

type Action =
  | {
      type: 'TASKS_INIT';
      payload: Task[];
    }
  | {
      type: 'TASK_ADD';
      payload: Task;
    }
  | {
      type: 'TASK_DELETE';
      payload: string;
    };

export default Action;
