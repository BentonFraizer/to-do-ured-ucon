export type Task = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

export type TaskId = Task['id'];
