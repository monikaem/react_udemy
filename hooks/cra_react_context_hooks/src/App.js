import Button from './Button';
import UserInfo from './UserInfo';
import AppProvider from "./AppContext";
import './App.css'



const App = () => {

    return (
        <div className='App'>
            <AppProvider>
                <UserInfo />
                <Button />
            </AppProvider>
        </div>
    );

}

export default App;