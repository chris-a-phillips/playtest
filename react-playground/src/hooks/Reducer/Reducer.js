import React, { useState, useReducer } from 'react';
import Todo from './Todo';

// this ACTIONS variable will help with keeping code clean and not having random strings everywhere
export const ACTIONS = {
	ADD_TODO: 'add-todo',
	TOGGLE_TODO: 'toggle-todo',
	DELETE_TODO: 'delete-todo'
};

// arguments are state (whatever the current state is) and dispatch function
// action is essentially what we call to update our current state
function reducer(todos, action) {
	// switch will look for the action type and then do what you want it to depending on that action
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, newTodo(action.payload.name)];
		case ACTIONS.TOGGLE_TODO:
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete}
				}
				return todo
			})
		case ACTIONS.DELETE_TODO:
			return todos.filter(todo => todo.id !== action.payload.id)
		default:
			return todos
	}
}

function newTodo(name) {
	return { id: Date.now(), name: name, complete: false };
}


const Reducer = () => {
    // useReducer variables "state", "dispatch", and "reducer" are always the same
	// last argument of useReducer will be objects that will chnge
	const [todos, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState('');
    
	function handleSubmit(e) {
        e.preventDefault();
		// the type is being passed in (essentially what we want to do)
		// the payload is being passed in (essentially the variable names of the function)
		dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
		setName('');
	}
    
	console.log(todos)

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
			<div>
				{todos.map((todo) => {
					return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>;
				})}
			</div>
		</div>
	);
};

export default Reducer;
