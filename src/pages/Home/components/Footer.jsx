import React from 'react'

import githubIcon from '../../../assets/githup.png'
import linkedinIcon from '../../../assets/linkedin.png'

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-800 text-white py-10 px-6 mt-10">
      
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        
        <div className='text-center md:text-left space-y-2'>
          <h3 className="text-xl font-bold text-slate-700">Contact Me</h3>
          <p>📞 Phone: 01017730994</p>
          <p>📧 Email: ayaahmedelrayes@gmail.com</p>
        </div>

        
        <div className="flex gap-6 items-center">
          <a href='https://github.com/ayaahmedelrayes' target='_blank' >
            <img 
              src={githubIcon} 
              alt="github" 
              className="w-8 h-8 hover:scale-110 transition-transform " 
            />
          </a>
          
          <a href='https://www.linkedin.com/in/aya-ahmed-002610325/' target='_blank'>
            <img 
              src={linkedinIcon} 
              alt="linkedin" 
              className="w-8 h-8 hover:scale-110 transition-transform" 
            />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer