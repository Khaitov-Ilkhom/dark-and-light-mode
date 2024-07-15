const initialState = {
    theme: localStorage.getItem("theme") || "ligth"
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME": {
            localStorage.setItem("theme", action.payload)
            return {
                theme: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default reducer
export {initialState}