import React from 'react'
import { FaFacebook, FaTiktok, FaTelegram, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
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
        <p className="footer-text">
          Made with <FaHeart className="heart" /> by Daniel
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
