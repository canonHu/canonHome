import './index.css';
import React from 'react';
import routes from './router'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './store/redurces';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { renderRoutes } from "react-router-config";

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* kick it all off with the root route */}
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
