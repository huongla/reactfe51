import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BaiTapLayout1 from './Components/BaiTapLayoutComponent/BaiTapLayout1';
import DemoStateFul from './Components/DemoStateFul';
import DemoStateless from './Components/DemoStateless';
import Databinding from './Databinding/Databinding';
import HandEvent from './HandleEvent/HandEvent';

function App() {
  return (
    <div className="App">
      {/* <DemoStateless/>
      <DemoStateFul/> */}
      {/* <BaiTapLayout1/> */}
      {/* <Databinding /> */}
      <HandEvent />
    </div>
  );
}

export default App;
