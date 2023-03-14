import { useState } from 'react'
import './App.css'
import { AiFillLinkedin } from 'react-icons/ai';


function App() {
    return (
      <div className='card'>
        <div>
          <img src='./images/IMG_5934.jpg' className='profile-img'/>
            <text className='rectangle'></text>  
            <text className='elias-palmer'>Elias Palmer</text>
            <text className='occupation'>Frontend Developer</text>
            <text className='website-link' href='#'>eliaspalmer.website</text>
            <button className='email-btn'><img src='./images/Mail.png' />Email</button>
            <button className='linked-in-btn'><AiFillLinkedin style={{fontSize: "16px", color: "white"}}/>LinkedIn</button>
            <text className='about-title'>About</text>
            <text className='about-content'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</text>
            <text className='interests-title'>Interests</text>
            <text className='interests-content'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</text>
            <footer>
              <div className='icon-position'>
                <img src='./images/GitHub.png' className='icon'/>
                <img src='./images/Facebook.png' className='icon'/>
                <img src='./images/Instagram.png' className='icon' />
                <img src='./images/twitter.png' className='icon' />
              </div>
            </footer>
        </div>
      </div>
    )
}

export default App
