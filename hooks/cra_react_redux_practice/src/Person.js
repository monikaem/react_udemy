import React, {useState} from "react";
import Form from "./Form";
import {useDispatch} from "react-redux";
import {removeUser} from "./appActions";

const Person = ({name, last, age, opinion, id}) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const dispatch = useDispatch();

    const toggleFormVisibility = () => {
        setIsFormVisible(prev => !prev);
    }

    const formOrButtonElement = isFormVisible ? (
        <Form
            name={name}
            callback={toggleFormVisibility}
            last={last}
            id={id}
            opinion={opinion}
        />
    ) : (
        <>
        <button onClick={toggleFormVisibility}>Edytuj opinię</button>
        <button onClick={() => dispatch(removeUser({id}))}>Usuń opinię</button>
        </>
    );

    return (
        <li>
            <h3>{name} {last}</h3>
            <p>lat: {age}</p>
            <p>Uważa, że...<strong>{opinion}</strong></p>
            {formOrButtonElement}
        </li>
    )
}


export default Person;