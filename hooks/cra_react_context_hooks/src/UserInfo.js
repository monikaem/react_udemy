import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const UserInfo = () => {

    const { isUserLogged } = useContext(AppContext)

         const userLoggedInfo = isUserLogged
             ? 'zalogowanny'
             : 'niezalogowany';
        return (
            <div>
                <p>Użytkownik jest {userLoggedInfo}</p>
            </div>
        )
}

export default UserInfo;