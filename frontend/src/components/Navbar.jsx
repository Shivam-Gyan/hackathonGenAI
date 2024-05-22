import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  const Logout=()=>{
    localStorage.removeItem("user","")
  }

  return (
    <div className='w-full sticky top-0 bg-slate-200 flex py-6 items-center justify-around'>

      {/* brand logo and name */}
      <Link to={'/'}
        className='text-xl flex items-center gap-4 font-bold tracking-wider '
      >
        {/* image of logo */}
        <div
          className='h-10 border-[1px] border-slate-400 w-10 rounded-full '
        >
          <img src='https://www.pngmart.com/files/21/Hospital-PNG-HD.png' alt="logo" />
        </div>
        kareAI
      </Link>

      <div className='flex gap-6 items-center'>

        {/* home page navigation */}
        <NavLink to={'/'}
          className={({ isActive }) => (
            `text-md tracking-wider hover:text-blue-500 font-medium ${isActive ? "text-blue-700" : ""}`
          )}>
          Home
        </NavLink>

        {/* get all doctor */}
        <NavLink to={'/doctor'}
          className={({ isActive }) => (
            `text-md tracking-wider hover:text-blue-500 font-medium ${isActive ? "text-blue-700" : ""}`
          )}>
          Doctors
        </NavLink>

        {/* book appointment */}
        <NavLink to={'/'}
          className={({ isActive }) => (
            `text-md tracking-wider hover:text-blue-500 font-medium ${isActive ? "text-blue-700" : ""}`
          )}>
          Book Appointment
        </NavLink>


        {/* if user exist then show profile */}
        {user &&
          <Link to={'/profile'} className='h-10 border-[1px] border-slate-400 w-10 rounded-full ' >
            <img src='https://cdn4.iconfinder.com/data/icons/professions-2-2/151/73-256.png' alt="profile" />
          </Link>
        }

        {/* showing logout and login if user exist */}

        {!user ?
          <Link
            to={'/login'}
            className='px-4 py-2 bg-slate-800 hover:bg-slate-600 text-md text-white rounded-md font-bold'
          >
            Login
          </Link> :

          <Link
            onClick={Logout}
            className='px-4 py-2 bg-slate-800 hover:bg-slate-600 text-md text-white rounded-md font-bold'
          >
            Logout
          </Link>
        }


      </div>

    </div>
  )
}

export default Navbar