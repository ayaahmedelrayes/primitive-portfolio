import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center px-10 py-5 bg-transparent" >
      <ul>
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">ABOUT </li>
        <li className="hover:text-blue-600 cursor-pointer">Skills</li>
        <li className="hover:text-blue-600 cursor-pointer">Education</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
