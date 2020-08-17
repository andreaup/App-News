import React from 'react';

import {createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import reducer from "./reducers/reducers";

import Header from './components/header'
import Articles from './components/articles';
import Categories from './components/categories';
import MainRouting from './components/MainRouting'



const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Header/>
      <Categories/>
      <MainRouting/>
      <Articles/>
    </div>
    </Provider>
  );
}

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Provider store = {store}>
//     <App/>
//   </Provider>,
//   rootElement
// );

