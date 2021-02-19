import {createContext, useState} from 'react';



export const AppContext = createContext();

const AppProvider = ({children}) => {
    const toggleLoggedState = () => setIsUserLogged(prevValue => !prevValue);
    const [isUserLogged, setIsUserLogged] = useState(false);
    return (
        <AppContext.Provider value={{ isUserLogged, toggleLoggedState }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppProvider;