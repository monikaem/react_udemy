import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser, editUser} from './appActions';


const Form = ({name = '', last = '', age = 18, opinion = '', callback, id}) => {
    const [nameInput, setNameInput] = useState(name)
    const [lastInput, setLastInput] = useState(last)
    const [ageInput, setAgeInput] = useState(age)
    const [opinionInput, setOpinionInput] = useState(opinion)

    const onNameChange = (e) => setNameInput(e.target.value)
    const onLastChange = (e) => setLastInput(e.target.value)
    const onAgeChange = (e) => setAgeInput(e.target.value)
    const onOpinionChange = (e) => setOpinionInput(e.target.value)


    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newPersonObject = {
            name: nameInput,
            last: lastInput,
            age: ageInput,
            opinion: opinionInput,
            id,
        }
        id ? dispatch(editUser(newPersonObject)) : dispatch(addUser(newPersonObject));

        if (id) {
            callback();
        }
        setNameInput(name);
        setLastInput(last);
        setAgeInput(age);
        setOpinionInput(opinion);

    }




    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Imię:
                <input
                    type="text"
                    value={nameInput}
                    onChange={onNameChange}
                />
            </label>
            <br/>
            <label>
                Nazwisko:
                <input
                    type="text"
                    value={lastInput}
                    onChange={onLastChange}
                />
            </label>
            <br/>
            <label>
                   Wiek:
                    <input
                        type="number"
                        value={ageInput}
                        onChange={onAgeChange}
                        min="10"
                        max="100"
                    />
            </label>
            <br/>
            <label>
                Twoja opinia:
                <br/>
                <textarea
                    value={opinionInput}
                    onChange={onOpinionChange}
                    placeholder="Napisz swoją opinię..."
                />
            </label>
            <br/>
            <button type="submit">{id ? 'Edytuj' : 'Dodaj'}</button>
        </form>
    )
}


export default Form;