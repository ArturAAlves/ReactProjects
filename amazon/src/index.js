import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.scss"
import { StateProvider } from './StateProvider';
import reducer, { initialState } from "./reducer.js"



ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>

    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
