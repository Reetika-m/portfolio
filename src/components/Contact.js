import React from 'react'
import './Contact.css'
import linkedin from '../assets/linkedin (1).svg'
import github from '../assets/github.svg';
import instagram from '../assets/instagram (1).svg';
import facebook from '../assets/facebook.svg';
function Contact(){
    return(
        <div>
            <section id='contact'>
                <div id='social'>
                    <h1 className='socialTitle'>Social</h1>
                    <p className='socialDesc'>Here You Can Contact Me</p>
                    <div className='socialImgs'>
                        <a href='#'><img src={linkedin} alt='LinkedIn ' className='socialImg'/></a>
                        <a href='#'><img src={github} alt='GitHub ' className='socialImg'/></a>
                        <a href='#'><img src={instagram} alt='Instagram ' className='socialImg'/></a>
                        <a href='#'><img src={facebook} alt='Facebook '  className='socialImg'/></a>



                    </div>
                </div>
                <div id ='contactPage'>
                    <h1 id='contactTitle'>Contact Me</h1>
                    <p classname='contactDesc'>Feel Free To Contact Me</p>
                    <form className='contactForm'>
                        <input type='text' className='name' placeholder='Your Name'/>
                        <input type='email' className='email' placeholder='Your Email'/>
                        <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                        <button type='submit' value="Send" className='submitBtn'>Submit</button>
                    

                    </form>
                </div>
                
            </section>

        </div>
    )
}
export default Contact