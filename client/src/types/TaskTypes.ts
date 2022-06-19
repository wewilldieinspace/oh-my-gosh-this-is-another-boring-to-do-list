export interface TaskType {
  title: string,
  body: string,
  status: 0 | 1 | 2,
  finish_date: string | null,
  task_id: number,
  id: number
}
