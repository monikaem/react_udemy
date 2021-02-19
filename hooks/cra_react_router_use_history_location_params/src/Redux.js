import React from 'react';
import {useHistory, useLocation} from "react-router-dom";


const Redux = () => {

    const history = useHistory();
    const location = useLocation();
    console.log(history)
    const handleOnClick = () => history.goBack();

    const isActive = Boolean(location.state && location.state.isActive);

    return (
        <article>
            <h2>Redux</h2>
            <p>Przeslana informacja isActive: {String(isActive)}</p>
            <button onClick={handleOnClick}>Wróć do poprzedniej strony</button>
        </article>
    );
};

export default Redux;