const todos = (state = [], action) => {

    switch(action.type) {

        case "ADD_TODO":
            if (action.name != "" & action.comment != "") {
            var dateNow = new Date();
            var month =["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
            return {
                comments: [
                ...state.comments,
                {
                    id: action.id,
                    name: action.name,
                    comment: action.comment,
                    date: dateNow.getDate() + "." + month[dateNow.getMonth()] + "." + dateNow.getFullYear()
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
            console.log("редьюсер - Удаление комментария")
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