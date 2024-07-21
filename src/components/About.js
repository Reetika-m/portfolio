import React from 'react';
import './About.css';
import html from '../assets/HTML5_Badge (1).svg';
import css from '../assets/css-3 (1).svg';
import bootstrap from '../assets/github (1).svg';
import javascript from '../assets/javascript.svg';
import R from '../assets/react.svg';
const About=()=>{
return(
    <section id="about">
<span className='aboutTitle'>What I Know</span>
<span className='aboutDesc'> I am a skilled and passionate web designer I love turning ideas into visually appealing,functional web experience </span>
<div className='aboutBars'>
<div className='aboutBar'>
 <img src={html} alt="HTML" className='aboutBarImg'/>
 <div className='aboutBarText'>
    <h2>HTML</h2>
    <p>Hypertext Markup Language</p>
    </div>
    </div>
    <div className='aboutBar'>
 <img src={css} alt="CSS" className='aboutBarImg'/>
 <div className='aboutBarText'>
    <h2>CSS</h2>
    <p>Cascading style sheet</p>
    </div>
    </div>
    <div className='aboutBar'>
 <img src={bootstrap} alt="BOOTSTRAP" className='aboutBarImg'/>
 <div className='aboutBarText'>
    <h2>GitHub</h2>
    <p>GitHub</p>
    </div>
    </div>
    <div className='aboutBar'>
 <img src={javascript} alt="JavaScript" className='aboutBarImg'/>
 <div className='aboutBarText'>
    <h2>JS</h2>
    <p>JavaScript</p>
    </div>
    </div>


    <div className='aboutBar'>
 <img src={R} alt="React" className='aboutBarImg'/>
 <div className='aboutBarText'>
    <h2>React</h2>
    <p>React.js</p>
    </div>
    </div>
    </div>
    </section>
)

}
export default About;