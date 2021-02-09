import React from 'react';
import '../styles/LoginPage.css'

const LoginPage = () => {
    return (
        <div className="login">
            <label htmlFor="">Podaj login:
            <input type="text"/>
            </label>
        <br/>
            <label htmlFor="">Podaj hasło:
                <input type="password"/>
            </label>
            <br/>
            <button>Zaloguj</button>
        </div>
    )
}


export default LoginPage;