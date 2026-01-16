import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <SiCss3 />, color: '#1572B6' },
    { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Database', icon: <FaDatabase />, color: '#CC2927' },
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
