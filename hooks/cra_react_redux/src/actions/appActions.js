export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';


export const addRate = ({author, comment, rate}) => ({
    type: ADD,
        payload: {
            author,
            comment,
            rate,
            id: Math.floor(Math.random() * 1234),
    }
});

export const deleteRate = (id) => ({
    type: DELETE,
        payload: {
            id,
    }
})

export const editRate = ({author, comment, rate, id}) => ({
    type: EDIT,
        payload:
            rate,
            author,
            comment,
            id,
});





//przykladowy obiekt action
// {
//     type: ADD,
//         payload: {
//             author: 'Jan Kowalski',
//             rate: 5,
//             comment: 'Bardzo dobra ksiazka',
//         }
// }