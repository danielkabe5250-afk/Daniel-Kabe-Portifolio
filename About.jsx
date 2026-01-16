import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-card">
            <div className="card-icon">🎓</div>
            <h3>Education</h3>
            <div className="education-item">
              <h4>Madda Walabu University</h4>
              <p>Bachelor of Computer Science</p>
              <span className="year">3rd Year Student</span>
              <span className="location">Bale, Robe, Oromia</span>
            </div>
            <div className="education-item">
              <h4>Regasa Bulto Secondary School</h4>
              <p>Grade 9-12</p>
            </div>
            <div className="education-item">
              <h4>Abebe Kolu Elementary School</h4>
              <p>Grade 1-8</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">👨‍💻</div>
            <h3>Who I Am</h3>
            <p className="about-text">
              I'm <strong>Daniel Kabe</strong>, a passionate Computer Science student at Madda Walabu University. 
              Born in West Shewa (Ambo), Jeldu Woreda, I've been fascinated by technology and problem-solving 
              from an early age.
            </p>
            <p className="about-text">
              Currently in my 3rd year, I specialize in <strong>Web Design</strong> and <strong>AI Development</strong>, 
              creating innovative solutions that make a real impact. I believe in continuous learning and 
              turning ideas into reality through code.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h3>My Passion</h3>
            <div className="passion-list">
              <div className="passion-item">
                <span className="passion-icon">🌐</span>
                <div>
                  <h4>Website Design</h4>
                  <p>Creating beautiful, responsive, and user-friendly websites</p>
                </div>
              </div>
              <div className="passion-item">
                <span className="passion-icon">🤖</span>
                <div>
                  <h4>AI Development</h4>
                  <p>Building intelligent systems and exploring machine learning</p>
                </div>
              </div>
              <div className="passion-item">
                <span className="passion-icon">💡</span>
                <div>
                  <h4>Problem Solving</h4>
                  <p>Finding creative solutions to complex challenges</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">📍</div>
            <h3>Location</h3>
            <div className="location-info">
              <p><strong>Born:</strong> West Shewa (Ambo), Jeldu Woreda, Oromia</p>
              <p><strong>Current:</strong> Bale, Robe, Oromia, Ethiopia</p>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">3rd</div>
            <div className="stat-label">Year CS Student</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">Passion for Learning</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
