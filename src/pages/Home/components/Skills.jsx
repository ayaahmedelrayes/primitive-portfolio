import React from 'react'

const Skills = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center bg-white px-10'>
      <h2 className='text-4xl font-bold text-slate-600 '>Technical Skills</h2>
      <ul>
        <li className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:bg-blue-600 hover:text-white transition-all cursor-default  my-8">HTML5</li>
        <li  className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:bg-blue-600 hover:text-white transition-all cursor-default  my-8">CSS3</li>
        <li  className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:bg-blue-600 hover:text-white transition-all cursor-default   my-8">Bootstrap</li>
        <li className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:bg-blue-600 hover:text-white transition-all cursor-default  my-8">GIT&Githup</li>
        <li  className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:bg-blue-600 hover:text-white transition-all cursor-default my-8">SASS</li>
        <li  className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:bg-blue-600 hover:text-white transition-all cursor-default my-8">Mongo DB</li>
        <li  className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:bg-blue-600 hover:text-white transition-all cursor-default my-8">javascript</li>

      </ul>
    </div>
  )
}

export default Skills
