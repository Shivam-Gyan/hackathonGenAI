// React Component JSX
import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import "../styles/DrDetails.css"; // Make sure to create this CSS file

const DrDetails = () => {
  const [dr,setDr]=useState([])
  const {drId}=useParams();
  console.log(drId)

  const searchDr=async()=>{
    const _id=drId.split(":")[1]
    const dr=await axios.post("http://localhost:8000/api/dr/get",{
      _id
    })

    console.log(dr.data);
    setDr(dr.data)
  }

  useEffect(()=>{
    searchDr();
  },[])



  return (
    <div id="doctor-profile-container">
      <div id="profile-section">
        <div id="doctor-info">
          <ProfileCard dr={dr} />
        </div>

        {/* <div className="clinic-info">
          <h3>Clinic Address</h3>
          <p>Timings</p>
          <button>Book Online Appointment</button>
        </div> */}
      </div>

      <div className="appointment-section">
        <AppointmentComponent/>
      </div>
    </div>
  );
};


function AppointmentComponent() {
  return (
    <div className="clinic-appointment">

      <div className="header">
        <h1>Clinic Appointment</h1>
        <span className="price-tag">Rs 2000</span>
      </div>

      <div className="date-picker">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" />
      </div>

      <div className="time-picker">
        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time" />
      </div>




      <div className="date-tabs">
        <button className="date-tab">Today</button>
        <button className="date-tab">Tomorrow</button>
        <button className="date-tab">Fri, 24 May</button>
      </div>

      <div className="time-slots">
        <div className="morning-slots">
          <h3>Morning</h3>
          <button className="time-slot">11:30 AM</button>
          <button className="time-slot">11:45 AM</button>
        </div>
        <div className="afternoon-slots">
          <h3>Afternoon</h3>
          <button className="time-slot">12:00 PM</button>
          <button className="time-slot">12:15 PM</button>
        </div>
      </div>
    </div>
  );
}



const ProfileCard = ({dr}) => {
  return (
    <div id="profile-card">
      <div id="img">
        <img src="https://tse4.mm.bing.net/th?id=OIP.Kmt2ZxosnmX9NIMeirkSLQHaIR&pid=Api&P=0&h=180" alt="Profile" id="profile-image" />
      </div>

      <div className="profile-header">
        <h1>{dr && dr.name} </h1>
        <p>BDS, MDS - Conservative Dentistry & Endodontics,</p>
        <p>MDS - Implantologist, Cosmetic/Aesthetic Dentist</p>
        <p>
          <strong>{dr && dr.years_of_experience}+ years Experience Overall </strong>
        </p>

        <div className="profile-body">
          <div className="rating-verified">
            Trusted Care. Lasting Smiles.
            <div className="verified-checkmark">98% (293 ratings) Verified</div>
          </div>
          <p>
            Dr {dr && dr.name} is a principal dentist at The Dental Roots Gurgaon
            providing patients with treatment involving all aspects of dentistry
            including Single Sitting Root Canal, more...
          </p>
        </div>
      </div>
    </div>
  );

  
};

export default DrDetails;
