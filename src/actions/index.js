let nextTodoId = 3;

export const addTodo = ([name, comment]) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        name,
        comment
    }
};

export const toggleTodo = (id) => {
    console.log("экшн - Удаление комментария")
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