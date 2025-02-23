import React, { useState, useContext  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
 

import Dashboard from './Components/Dashboard.jsx';
import FuncComponent from './Components/FuncComponent.jsx';
import ClassComponent from './Components/ClassComponent.jsx';
import ProfileComponent from './Components/ProfileComponent.jsx';
import Greeting from './Components/Greeting.jsx';

import CheckPrime from './components/CheckPrime.jsx';
import CheckPalimdrome from './Components/Palimdrome.jsx';
import LeapYear from './Components/LeapYear.jsx';
import MathTable from './Components/MathTable.jsx';
import ReverseString from './Components/ReverseString.jsx';
import FullPiramid from './Components/FullPiramid.jsx'; 
import MejorityElement from './Components/MejorityElement.jsx'; 
import SinglePyramid from './Components/SinglePyramid.jsx';   
import Customhook from './Components/Customhook.jsx';   
import SendForm from './Components/SendForm.jsx';   
import Counter from './Components/CounterWithMemo.jsx';   
import CounterSimple from './Components/CounterSimple.jsx';   


function App() {
  const [name, setName] = useState('shuvadeep');
 
  return (
    <> 
 
        {/* <FuncComponent/>
        <ClassComponent/> 
        
        <ProfileComponent 
          Name="shuvadeep" 
          Age="29" 
          Profession="Software Engg"
        />

        <Greeting name={name} />;
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */} 

        <BrowserRouter> 
        <Dashboard/>
          <Routes> 
            <Route path="/prime" element={<CheckPrime />} />
            <Route path="/palimdrome" element={<CheckPalimdrome />} />
            <Route path="/Leapyear" element={<LeapYear />} />
            <Route path="/Mathtable" element={<MathTable />} />
            <Route path="/Reversestring" element={<ReverseString />} />
            <Route path="/Fullpiramid" element={<FullPiramid />} />
            <Route path="/MejorityElement" element={<MejorityElement />} />
            <Route path="/SinglePyramid" element={<SinglePyramid />} /> 
            <Route path="/customhook" element={<Customhook />} /> 
            <Route path="/sendform" element={<SendForm />} /> 
            <Route path="/Counter" element={<Counter />} /> 
            <Route path="/CounterSimple" element={<CounterSimple />} /> 
          </Routes> 
        </BrowserRouter>
      </>
  )
}

export default App;
