import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen'>
      <div className="md:w-1/2 space-y-6 text-center md:text-left ">
      <h1 className="text-5xl md:text-6xl font-semibold text-slate-800 leading-tight">
          Hello, I'm <span className="text-blue-600 font-bold">Aya</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium">
           MEARN Full Stack Developer& ITI Scholar
        </p>
        <div className='w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-lg'>
            <img
            src="data:image/png;base64,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"
            alt='photo'
            className="w-full h-full object-cover"
            />
        </div>
        <a className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all active:scale-95 duration-300  my-8" href="#footer"
  >Get in touch</a>
   
      </div>
    </div>
  )
}

export default Hero
