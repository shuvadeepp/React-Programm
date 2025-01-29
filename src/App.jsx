import React, { useState } from 'react' ;
import './App.css';
import FuncComponent from './Components/FuncComponent.jsx';
import ClassComponent from './Components/ClassComponent.jsx';
import ProfileComponent from './Components/ProfileComponent.jsx';
import Greeting from './Components/Greeting.jsx';
import CheckPrime from './components/CheckPrime.jsx';
import CheckPalimdrome from './Components/Palimdrome.jsx';
import LeapYear from './Components/LeapYear.jsx';
import FullPiramid from './Components/FullPiramid.jsx';
import MyNavbar from './assets/Header/MyNavbar.jsx';

function App() {
  const [name, setName] = useState('shuvadeep');
  return (
    <>
      <MyNavbar/>
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

        {/* <CheckPrime/> */}
        {/* <CheckPalimdrome/> */}
        {/* <LeapYear/> */}
        {/* <MathTable/> */}
        {/* <ReverseString/> */}
        <FullPiramid/>

      </>
  )
}

export default App;
