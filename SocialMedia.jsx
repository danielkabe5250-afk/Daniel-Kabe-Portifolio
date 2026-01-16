import React from 'react'
import { FaFacebook, FaTiktok, FaTelegram } from 'react-icons/fa'
import './SocialMedia.css'

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'TikTok',
      username: '@harmeekoo100',
      icon: <FaTiktok />,
      url: 'https://www.tiktok.com/@harmeekoo100',
      color: '#000000',
      gradient: 'linear-gradient(135deg, #00f2ea, #ff0050, #000000)'
    },
    {
      name: 'Facebook',
      username: 'Biyyaafuu Kabbee',
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/biyyaafuu.kabbee',
      color: '#1877F2',
      gradient: 'linear-gradient(135deg, #1877F2, #42a5f5)'
    },
    {
      name: 'Telegram',
      username: '@pappy35',
      icon: <FaTelegram />,
      url: 'https://t.me/pappy35',
      color: '#0088cc',
      gradient: 'linear-gradient(135deg, #0088cc, #29b6f6)'
    }
  ]

  return (
    <section id="social" className="social-media">
      <h2 className="section-title">Connect With Me</h2>
      <p className="social-subtitle">Follow me on social media for updates and content!</p>
      
      <div className="social-grid">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            style={{ '--social-gradient': social.gradient }}
          >
            <div className="social-icon">{social.icon}</div>
            <h3 className="social-name">{social.name}</h3>
            <p className="social-username">{social.username}</p>
            <span className="social-follow">Follow Me →</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default SocialMedia
