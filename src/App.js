import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from "redux";
import RootReducer from "./reducers/RootReducer";
import {Provider} from 'react-redux'
const store = createStore(RootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <App/>
      </Provider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
