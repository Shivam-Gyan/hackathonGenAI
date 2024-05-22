import React, { useEffect, useState } from 'react'
import '../styles/DrDetails.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Doctor = () => {
    const [docs, setDoc] = useState([]);

    const handleClick = async () => {
        const user = await axios.get('http://localhost:8000/api/dr/')
        setDoc(user.data)
    }
    useEffect(() => {
        handleClick()
    }, [])
    return (
        <div className='w-full bg-slate-800 flex flex-col justify-center items-center py-10'>
            {docs && docs.map((doc, index) => (
                <div key={index} className="profile-card">
                    <div className="w-20 h-20 mr-4 overflow-hidden rounded-full object-center">
                        <img className='w-20 h-20 ' src="https://tse4.mm.bing.net/th?id=OIP.Kmt2ZxosnmX9NIMeirkSLQHaIR&pid=Api&P=0&h=180" alt="logo" />
                    </div>

                    <div className="info-section">
                        <h2 id="dr-name ">Name : {doc && doc.name}</h2>
                        <p id="dr-experience">Year of Experience : {doc && doc.years_of_experience}</p>
                        <p id="dr-location">Location : {doc && doc.location.city}</p>
                        <p id="dr-fees">consultation Fee :{doc && doc.consultation_fee}</p>
                        <div className="rating-section">
                            <span>{526 + Math.floor(Math.random() * 800)} Patient Stories</span>
                        </div>
                    </div>

                    <div className="booking-button-section">
                        <button className='px-4 py-3 bg-slate-800 text-white' ><Link to={`/drdetails/:${doc._id}`}>Book Appointment</Link></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Doctor