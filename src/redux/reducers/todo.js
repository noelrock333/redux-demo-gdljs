const initialState = {
    todoItem: '',
    todoList: []
};

function reducer(currentState = initialState, { type, payload }) {
    switch(type) {
        case 'SET_TODO_ITEM': {
            return {
                ...currentState,
                todoItem: payload
            }
        }
        case 'ADD_TODO': {
            return {
                ...currentState,
                todoItem: '',
                todoList: [...currentState.todoList, currentState.todoItem]
            }
        }
        default: {
            return currentState;
        } 
    }
}

export default reducer;