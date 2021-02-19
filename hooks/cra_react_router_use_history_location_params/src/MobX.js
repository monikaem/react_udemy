import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MobX = () => {

    const [inputData, setInputData] = useState('');
    const history = useHistory();
    const handleOnChange = (e) => {
        setInputData(e.target.value);
    }

    const handleOnClick = () => {
        const location = {
            pathname: `/typescript/${inputData}`,
        }
        history.push(location);
    }
    
    return (
        <article>
            <h2>MobX</h2>
            <input
            onChange={handleOnChange}
            type="text"
                value={inputData}
            />
            <button onClick={handleOnClick}>Wyślij params do TypeScript</button>
        </article>
    );
};

export default MobX;