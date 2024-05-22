import React, { useState } from 'react';
import '../styles/Home.css'; // Make sure to name your CSS file accordingly
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [prompt,setPrompt]=useState("");
  const [allDocs,setAllDocs]=useState([]);

  const handleClick=async()=>{
    console.log(prompt)
    const user=await axios.post('http://localhost:8000/api/dr/',{prompt})
    setAllDocs(user.data)
    console.log(user.data)
  }
  return (

    <div className="cosmo-chat">

      <aside className="sidebar">
        <div className="sidebar-up">
          <img className='image' src="src/assets/color_logo.webp" />
          <div className="sidebar-item">New Chat</div>
          <div className="sidebar-item">Chat History</div>
          <div className="sidebar-item">All Agents</div>
        </div>
        <div className="sidebar-down">
          <div className="sidebar-item">Settings</div>
          <div className="sidebar-item">Logout</div>
        </div>
      </aside>

      <main className="main-content">
        <header className="welcome-header">
          <h1>Welcome to Cosmo👋</h1>
        </header>

        <div className=" w-[777.6px] mb-4 flex gap-4 px-6 py-4 rounded-md border-[1px] shadow-md ">
          <input className='py-3 px-4 outline-none bg-transparent text-slate-200' type="text" placeholder="Ask anything to Cosmo..." value={prompt} onChange={e=>setPrompt(e.target.value)} />
          <button onClick={handleClick}><IoSearch className='text-xl '/></button>
        </div>

        <div className='drs'>
          {allDocs && allDocs.map((doc,index)=>(
            <Link key={index} to={`/drdetails/:${doc._id}`} className='drcards'><ProfileCard doc={doc} /></Link>
          )
        )}
          
          {/* <Link to={'/drdetails/:drId'} className='drcards'><ProfileCard /></Link> */}
        </div>
      </main>

    </div>
  );

}
const ProfileCard = ({doc}) => {
  return (
    <div className="profile-card">
      <div className="w-20 h-20 mr-4 overflow-hidden rounded-full object-center">
        <img className='w-20 h-20 ' src="src/assets/demodr.jpg" alt="logo" />
      </div>

      <div className="info-section">
        <h2 id="dr-name">Name : {doc && doc.name}</h2>
        <p id="dr-experience">Year of Experience : {doc && doc.years_of_experience}</p>
        <p id="dr-location">Location : {doc && doc.location.city}</p>
        <p id="dr-fees">consultation Fee :{doc && doc.consultation_fee}</p>
        <div className="rating-section">
          <span>{526+Math.floor(Math.random()*800)} Patient Stories</span>
        </div>
      </div>

      <div className="booking-button-section">
        <div href={`/drdetails/:${doc._id}`} >Book Appointment</div>
      </div>
    </div>
  );
};


export default Home;
