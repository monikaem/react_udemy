import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Form from './Form'
import PeopleList from "./PeopleList";


function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <h1>Lista osób</h1>
      <Form/>
      <PeopleList/>
    </div>
      </Provider>
  );
}

export default App;
