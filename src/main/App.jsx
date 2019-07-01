
import React from 'react'
import './App.scss'
import RightSide from '../components/templates/RightSide'
import FirstDiv from '../components/templates/FirstDiv'
import SecondtDiv from '../components/templates/SecondDiv'
import ThirdDiv from '../components/templates/ThirdDiv'
import FourthDiv from '../components/templates/FourthDiv'


export default props =>
    <div className="app">
        <RightSide id='me'>
            <FirstDiv />
        </RightSide>
        <RightSide id='skills'><SecondtDiv /></RightSide>
        <RightSide id='repository'>
            <ThirdDiv />
        </RightSide>
        <RightSide id='contact'>
            <FourthDiv />
        </RightSide>
    </div>