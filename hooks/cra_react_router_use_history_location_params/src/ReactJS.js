import React from 'react';
import { useHistory } from 'react-router-dom'

const ReactJS = () => {

    const history = useHistory();

    const handleOnClick = () => {
        const location = {
            pathname: '/redux',
            state: {
                isActive: true,
            },
        };
        history.push(location);
    }

    return (
        <article>
            <h2>ReactJS</h2>
            <button onClick={handleOnClick}>Idź do Redux</button>
        </article>
    );
};

export default ReactJS;