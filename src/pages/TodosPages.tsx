import React, {useEffect, useState} from 'react';
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import {ITodo} from "../interfaces/interfaces";

declare var confirm: (question: string) => boolean;

const TodosPages: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }

    // setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev]);
  };

  const onToggleCheck = (id: number) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo;
      })
    });
  };

  const onRemoveHandler = (id: number) => {
    const shouldRemove = confirm('Вы уверены, что хотите дудалить элемент?');
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };
  return (
      <React.Fragment>
        <div className='container'>
          <TodoForm onAdd={addHandler} />

          <TodoList
              todos={todos}
              onToggleCheck={onToggleCheck}
              onRemoveHandler={onRemoveHandler}
          />
        </div>
      </React.Fragment>
  );
};

export default TodosPages;