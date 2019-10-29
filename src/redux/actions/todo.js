export function setTodoItem(text) {
    return {
        type: 'SET_TODO_ITEM',
        payload: text
    }
}

export function addTodo() {
    return {
        type: 'ADD_TODO'
    }
}