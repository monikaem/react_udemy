import {ADD, EDIT, REMOVE} from './appActions';


const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        case EDIT:
            return state.map(elementToEdit => {
                // if (elementToEdit.id !== action.payload.id) {
                //     return elementToEdit;
                // }
                const {name, last, age, opinion} = action.payload
                return ({
                    name,
                    last,
                    age,
                    opinion,
                    id: elementToEdit.id,
                })
            });
        case REMOVE:
            return state.filter(elementToRemove => elementToRemove.id !== action.payload.id);
        default:
            console.warn('nie ma takiej akcji');
            return state;
    }
}


export default appReducer;