import './App.css';
import React, { PureComponent } from 'react';
import { AppContext, defaultObject} from "./AppContext";
import UserInfo from "./UserInfo";
import Button from "./Button";

class App extends PureComponent {

    state = {
        isUserLogged: defaultObject.isUserLogged,
        isUserAdult: true,
    }
    handleToggleStateIsLogged = () => this.setState(prevState => ({
        isUserLogged: !prevState.isUserLogged,
    }));
    handleToggleStateIsAdult = () => this.setState(prevState => ({
        isUserAdult: !prevState.isUserAdult,
    }));

  render () {
    return (

        <div className="App">
            <AppContext.Provider value={{
                isUserLogged: this.state.isUserLogged,
                toggleLoggedState: this.handleToggleStateIsLogged,
            }}>
            <UserInfo/>
            <Button/>
            </AppContext.Provider>
            <AppContext.Provider value={{
                isUserLogged: this.state.isUserAdult,
                toggleLoggedState: this.handleToggleStateIsAdult,
            }}>
                <UserInfo/>
                <Button/>
            </AppContext.Provider>
        </div>
    );
  }


}

export default App;
