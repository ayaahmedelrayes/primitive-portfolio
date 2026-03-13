import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen'>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-800 relative inline-block my-8">
          About me</h2>
          <div className ="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
      <p>
        I'm a passionate Full Stack Developerin building web applications. I specialize in creating responsive, user-friendly interfaces and robust backend systems. My journey in web development started with a curiosity about how websites work, and it has evolved into a career I truly love.

I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices. When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring new web technologies
      </p>
      </div>
      <a className=" inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all active:scale-95 duration-300  my-8"
  href="./components/Day1.pdf"
  download="./components/Day1.pdf">
    Download CV</a>
    </div>
  )
}

export default About
