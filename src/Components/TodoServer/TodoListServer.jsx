import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  	fetchTodos,
 	addTodo,
  	deleteTodo,
  	updateTodo,
} from '../../reducer';
import { setSearchTerm, toggleSort } from '../../uiSlice';
import styles from './TodoListServer.module.css';

export const TodoListServer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const searchTerm = useSelector((state) => state.ui.searchTerm);
  const isSorted = useSelector((state) => state.ui.isSorted);

  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTodos = isSorted
    ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
    : filteredTodos;

  const handleAddTodo = () => {
	if (newTodo.trim()) {
	  dispatch(addTodo(newTodo));
	  setNewTodo('');
	}
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Список дел Redux</h1>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Найти задачу..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className={styles.input}
        />
        <button onClick={() => dispatch(toggleSort())} className={styles.button}>
          {isSorted ? 'По времени добавления' : 'Сортировка по алфавиту'}
        </button>
      </div>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Добавьте новую задачу..."
		  value={newTodo}
		  onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddTodo();
          }}
          className={styles.input}
        />
      </div>
      <ul className={styles.list}>
        {sortedTodos.map((todo) => (
          <li key={todo.id} className={styles.listItem}>
            <input
              type="text"
              value={todo.title}
              onChange={(e) =>
                dispatch(updateTodo({ id: todo.id, title: e.target.value }))
              }
              className={styles.todoText}
            />
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className={styles.deleteButton}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
