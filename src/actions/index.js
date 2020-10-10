let nextTodoId = 3;

export const addTodo = ([name, comment, date]) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        name,
        comment,
        date
    }
};

export const toggleTodo = (id) => {
    return {
        type: "REMOVE_COMMENT",
        id
    }
};

export const onchangeName = (name) => {
    return {
        type: "CHANGE_NAME",
        name
    }
};

export const onchangeComment = (comment) => {
    return {
        type: "CHANGE_COMMENT",
        comment
    }
}