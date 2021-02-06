export interface TodoFormProps {
  onAdd(title: string): void
}

export type TodoListProps = {
  todos: ITodo[],
  onToggleCheck(id: number): void,
  onRemoveHandler(id: number): void,
}

export interface ITodo {
  title: string,
  id: number,
  completed: boolean,
}