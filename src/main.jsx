import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { TodoListServer } from './Components/TodoServer/TodoListServer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<div className="container">
			<Provider store={store}>
    			<TodoListServer />
  			</Provider>
		</div>
	</React.StrictMode>,
);
