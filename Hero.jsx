import React from 'react'
import { FaFacebook, FaTiktok, FaTelegram } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-image-container">
          <img src="/profile.jpg" alt="Daniel Kabe" className="profile-image" />
        </div>
        <h1 className="hero-title">
          <span className="gradient-text">DANIEL KABE</span>
        </h1>
        <p className="hero-subtitle">Web Designer & AI Developer</p>
        <p className="hero-description">
          Computer Science student passionate about creating innovative web solutions and exploring artificial intelligence.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>

        <div className="social-links">
          <a href="https://www.tiktok.com/@harmeekoo100" target="_blank" rel="noopener noreferrer" title="TikTok - @harmeekoo100">
            <FaTiktok />
          </a>
          <a href="https://www.facebook.com/biyyaafuu.kabbee" target="_blank" rel="noopener noreferrer" title="Facebook - Biyyaafuu Kabbee">
            <FaFacebook />
          </a>
          <a href="https://t.me/pappy35" target="_blank" rel="noopener noreferrer" title="Telegram - @pappy35">
            <FaTelegram />
          </a>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  )
}

export default Hero
