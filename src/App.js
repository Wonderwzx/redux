import logo from './logo.svg';
import './App.css';
import reducer from "./redux/reducer";
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import AddPerson from "./components/AddPerson";
import Persons from "./components/Persons";

const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <h2>Adding person and deleting person</h2>
            <div>
                <AddPerson />
                <Persons />
            </div>
        </Provider>
    );
};

export default App;


// const store = createStore(reducer);
//
// function App() {
//   return (
//     <div className="App">
//       <h2>Adding person and deleting person</h2>
//       <Persons />
//     </div>
//   );
// }
//


