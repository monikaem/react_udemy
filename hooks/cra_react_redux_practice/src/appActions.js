export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';


export const addUser = ({name, last, age, opinion}) => {
    return {
        type: ADD,
        payload: {
            name,
            last,
            age,
            opinion,
            id: Math.floor(Math.random() * 2000)
        }
    }
}

export const editUser = ({name, last, age, opinion, id}) => {
    return {
        type: EDIT,
        payload: {
            name,
            last,
            age,
            opinion,
            id,
        }
    }
}

export const removeUser = ({id}) => {
    return {
        type: REMOVE,
        payload: {
            id,
        }
    }
}

