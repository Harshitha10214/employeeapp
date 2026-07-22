

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Allemp from './Allemp';
import View1 from './View1';
import Modemp from './Modemp';
import Showemp from './Showemp';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/Login' exact Component={Login}></Route>
        <Route path='/Register' exact Component={Register}></Route>
        <Route path='/empdata' exact Component={Allemp}></Route>
        <Route path="/oneemp/:id" exact Component={View1}></Route>
        <Route path="/modemp/:id" exact Component={Modemp}></Route>
        <Route path='/show/:id' exact Component={Showemp}></Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
