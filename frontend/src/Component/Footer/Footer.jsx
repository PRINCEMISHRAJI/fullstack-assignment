import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-section">
        <h3>Abstract</h3>
        Branches
      </div>
      <div className="footer-section">
        <h3>Resources</h3>
        <div>Blog</div>
        <div>Help Center</div>
        <div>Release Notes</div>
        <div>Status</div>
      </div>
      <div className="footer-section">
        <h3>Community</h3>
        <div>Twitter</div>
        <div>LinkedIn</div>
        <div>Facebook</div>
        <div>Dribbble</div>
        <div>Podcast</div>
      </div>
      <div className="footer-section">
        <h3>Company</h3>

        <div>About Us</div>
        <div>Careers</div>
        <div>Legal</div>
        <h4>Contact Us</h4>
        info@abstract.com
      </div>
      <div className="copyright">
        <div className="logo">{/* Logo */}</div>
        <div> © Copyright 2022 </div>
        <div>Abstract Studio Design, Inc. </div>
        <div>All rights reserved</div>
      </div>
    </div>
  </footer>

  )
}

export default Footer