import {ADD, EDIT, REMOVE} from "./appActions";

export const validateForm = store => next => action => {
    console.log(action);
    if (action.type === ADD && !action.payload.name.length) {
        alert('Musisz podać imię')
        return;
    } else if (action.type === EDIT && !action.payload.name.length) {
        alert('Musisz podać imię')
        return;
    }
    next(action);
}