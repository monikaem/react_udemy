import { useState } from 'react';
import {useDispatch} from "react-redux";


import Form from './Form';
import {deleteRate} from "./actions/appActions";

const Element = ({author, comment, id, rate}) => {
    const [isVisibleForm, setIsVisibleForm] = useState(false);

    const toggleElements = () => setIsVisibleForm(prev => !prev);

    const dispatch = useDispatch();

    const formOrButtonElement = isVisibleForm
        ? (
            <Form
                author={author}
                callback={toggleElements}
                comment={comment}
                id={id}
                rate={rate}
            />
        ) : (
            <>
            <button onClick={toggleElements}>
                Edytuj książkę
            </button>
            <button onClick={() => dispatch(deleteRate(id))}>Usuń książkę</button>
            </>
        );

    return (
        <li>
            <p>Autor oceny: {author}</p>
            <p>Ocena: {rate}</p>
            <p>Komentarz: {comment}</p>
            {formOrButtonElement}
        </li>
    );
};

export default Element;