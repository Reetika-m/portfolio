import React from 'react';
import "./Intro.css";
import btnImg from '../assets/hireme.png';
import reactLogo from '../assets/react.svg'
import { Link } from 'react-scroll';

function Intro() {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                
                <span className='introText'>
                    I'm <span className='introName'>Reetika</span>
                    <br/>
                    
                    Web Developer.
                </span>
                <p className='introPara'>
                    I have honed my skills in HTML, CSS, 
                    <br />
                    JavaScript and frameworks like React and Node.js.
                    <br />
                    My focus is on creating responsive, user-friendly websites.
                </p>
                <Link to="targetSection" smooth={true} duration={500}>
                    <button className='btn2'>
                        <img src={btnImg} alt='Hire me' className='btnImg2' />
                        Hire me
                    </button>
                </Link>
            </div>
            <img src={reactLogo} alt="React Logo" className='logo2'/>
            
        </section>
 );
}

export default Intro;