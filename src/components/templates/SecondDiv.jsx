import React from 'react'


export default props =>
    <div className='contain'>
        <h1><i className="fa fa-angle-left"></i>/ <i className="fa fa-angle-right"></i> Skills</h1>
        <div className='skills-content'>
            <div className='languages-content'>
                <h2>Languages</h2>
                <ul className='tree'>
                    <li>JavaScript</li>
                    <ul>
                        <li>ES6</li>
                        <li>Node.js</li>
                    </ul>
                    <li>CSS</li>
                    <ul>
                        <li>SASS</li>
                    </ul>
                    <li>HTML5</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className='libraries-content'>
                <h2>Libraries</h2>
                <ul className='tree'>
                    <li>React</li>
                    <li>Webpack</li>
                    <li>Gulp</li>
                    <li>Express</li>
                    <li>Vue.js</li>
                    <li>Jquery</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className='sql-content'>
                <h2>DataBases</h2>
                <ul className='tree'>
                    <li>MySQL</li>
                    <li>Microsoft SQL Server</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    </div>
