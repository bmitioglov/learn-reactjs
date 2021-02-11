import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyHeaderWithCreateElement from "./components/ClassComponentWithCreateElement";
import MyFunctionalHeader from "./components/FunctionalComponent";
import MyPureHeader from "./components/PureComponent";



function App() {
  return (
    <div className="App">
        <MyHeaderWithCreateElement/>
        <MyFunctionalHeader title="World"/>
        <MyPureHeader/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
