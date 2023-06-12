import React, { useEffect, useState } from 'react';
import './App.css';
import './mainpagemobile.css'
import logo from './images/logo.png';
import main from './images/main.png';
import oli from './images/oli.jpg';
import asma from './images/asma.jpg';
import menu from './images/menu.png';
import coach from './images/coach.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
      setIsMinimized(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  }

  return (
    <div>
    <div className={`top-bar${isScrolled ? ' scrolled' : ''}`}>
    <div className={`top-bar-content${isMinimized ? ' minimized' : ''}`}>
    <div className="logo-container">
    <img src={logo} className={`logo${isScrolled ? ' scrolled' : ''}`} alt="Logo" />
  </div>

          <div className="buttonslayout">
            <button className={`Home${isScrolled ? ' scrolled' : ''}`}>Home</button>
            <button className={`About-Us${isScrolled ? ' scrolled' : ''}`}>About-Us</button>
            <button className={`Help${isScrolled ? ' scrolled' : ''}`}>Help</button>
            <button className={`Privacy${isScrolled ? ' scrolled' : ''}`}>Privacy</button>
          </div>
      
          
          <img src={menu} alt="Menu logo" className='menu-logo' onClick={togglePanel}/>
        
    <button className = "login"> Join us!</button>
    </div>
   </div>
   <div className={`side-panel${isPanelOpen ? ' open' : ''}`}>
   <div className='side-panel'>
          <div className="buttonslayout-mobile">
            <button className={`Home${isScrolled ? ' scrolled' : ''}`}>Home</button>
            <button className={`About-Us${isScrolled ? ' scrolled' : ''}`}>About-Us</button>
            <button className={`Help${isScrolled ? ' scrolled' : ''}`}>Help</button>
            <button className={`Privacy${isScrolled ? ' scrolled' : ''}`}>Privacy</button>
          </div>
          </div>
          </div>

   <div className="layout">
    <div className="main-image">
      <h1 className="find-coach-header">Find your coach</h1>
      <div className="search-container">
        <div className="searchbar1">
  <input type="text" placeholder="Enter your Location" className="search-field"></input>
  <button className="search-button">Search</button>
  </div>
  <h1 className="find-coach-or">Already have a coach?</h1>
  <div className="searchbar2">
  <input type="text" placeholder="Coach Name" className="search-coach"></input>
  <button className="search-button-for-coach">Search</button>
  
</div>
<div className="radio-buttons">
    <label>
      <input type="radio" name="coach-type" value="boxing" />
      Boxing
    </label>
    <label>
      <input type="radio" name="coach-type" value="workouts" />
      Workouts
    </label>
    <label>
      <input type="radio" name="coach-type" value="MMA" />
      MMA
    </label>
    <label>
      <input type="radio" name="coach-type" value="other" />
      Other
    </label>
  </div>
</div>
      <img src={main} alt="Main Image" className='mainimage'/>
    </div>
    <img src={coach} alt= "what-we-do-img" className='what-we-do-img'/>
    <div className= "what-we-do">
      <h2>What we do</h2>
      <p>At OA Fitness, our mission is to connect clients with the perfect coach who matches their specific interests and goals.
         We understand that finding the right coach can make all the difference in achieving
          fitness success, whether it's in boxing, workouts, MMA, or any other discipline.
           That's why we've developed a comprehensive platform that enables clients to easily 
           locate and connect with qualified coaches in their local area or closest proximity.</p>

<p>With OA Fitness, the search for a coach that aligns with your interests becomes effortless. Our user-friendly interface allows you 
  to browse through a wide range of coaches, each specializing in different fitness areas, ensuring that you find the 
  perfect match for your needs. Whether you're a beginner looking to start your fitness journey or an experienced athlete 
  aiming to take your skills to the next level, we have the right coach for you.</p>
       </div>
    <div className="profileimage">
      <img src={asma} className="asma" />
      <img src={oli} className="oli" />
    </div>
    <div className="container2"> 
      <h2>About Us</h2>
      <p> Hi there! We are Olivier and Asma, two boxing enthusiasts 
        with years of experience in the ring. Hailing from France, 
        we have dedicated ourselves to the sport and honed our skills over the years. 
        Now, we have come together to create this website with a clear objective in mind: 
        to help you find the perfect coach who suits your specific needs. Whether you're a beginner 
        looking to learn the ropes or an experienced boxer aiming to take your skills to the next level,
        we are here to guide you on your boxing journey. With our expertise and passion for the sport, we are committed
        to providing you with the best possible recommendations and support. 
        Let's lace up our gloves and embark on this exciting adventure together!</p>
    </div>
  </div>
</div>
  );
}

export default App;
