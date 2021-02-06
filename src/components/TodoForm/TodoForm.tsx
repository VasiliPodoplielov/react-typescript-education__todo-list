import React, {useState} from 'react';
import { TodoFormProps } from '../../interfaces/interfaces';
import './TodoForm.css';
import { KEY_ENTER } from './TodoFormConstants';



const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
  const [title, setTitle] = useState<string>('');

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onKeyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === KEY_ENTER) {
      onAdd(title);

      setTitle('');
    }
  };

  return (
    <div>
      <div className="input-field form-wrapper">
        <input
          type="text"
          id='title'
          placeholder='Введите название дела'
          value={title}
          onChange={onchangeHandler}
          onKeyPress={onKeyPressHandler}
          autoComplete='off'
        />
        <label htmlFor="title" className='active'>
          Введите название дела
        </label>
      </div>
    </div>
  );
};

export default TodoForm;