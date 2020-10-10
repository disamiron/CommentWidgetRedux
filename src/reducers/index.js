const todos = (state = [], action) => {

    switch(action.type) {

        case "ADD_TODO":
            if (action.name != "" & action.comment != "") {
            return {
                comments: [
                ...state.comments,
                {
                    id: action.id,
                    name: action.name,
                    comment: action.comment,
                    date: action.date
                }],
                form: {
                    name: '',
                    comment: ''
                }
            }} else {
                alert("Заполните поле формы")
                return state;
            }

        case "REMOVE_COMMENT":
            return {
                comments: state.comments.filter((todo) => todo.id !== action.id),
                form: {
                    name: state.form.name,
                    comment: state.form.comment
                }
            }
        
        case "CHANGE_NAME":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    name: action.name,
                    comment: state.form.comment
                }
            }

        case "CHANGE_COMMENT":
            return {
                comments: [
                ...state.comments
                ],
                form: {
                    name: state.form.name,
                    comment: action.comment
                }
            }

        default:
            return state;
    }
}

export default todos;