import React from 'react';
import {ITodo, TodoListProps } from '../../interfaces/interfaces';
import './TodoList.css';

const TodoList: React.FC<TodoListProps> = ({todos, onToggleCheck, onRemoveHandler}) => {
  if (!todos.length) {
    return <p className='center'>Пока дел нет</p>
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();

    onRemoveHandler(id);
  }

  return (
    <ul>
      {todos.map((todo: ITodo) => {
        return (
          <li className={`todo ${todo.completed ? 'complete' : ''}`} key={todo.id}>
            <label>
              <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={onToggleCheck.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className='material-icons red-text'
                onClick={(e) => removeHandler(e, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  );
};

export default TodoList;