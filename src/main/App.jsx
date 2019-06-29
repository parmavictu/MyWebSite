import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'


import React from 'react'
import './App.scss'
import RightSide from '../components/templates/RightSide'
import FirstDiv from '../components/templates/FirstDiv'
import SecondtDiv from '../components/templates/SecondDiv'
import ThirdDiv from '../components/templates/ThirdDiv'
import FourthDiv from '../components/templates/FourthDiv'


export default props =>
    <div className="app">
        <img src="../assets/imgs/computers.png" alt="computer-img" className='visible-lg-block'/>
        <RightSide id='me'>
            <FirstDiv/>
        </RightSide>
        <RightSide id='skills'/>
        <RightSide id='repository'>
            <ThirdDiv/>
        </RightSide>
        <RightSide id='contact'/>
    </div>