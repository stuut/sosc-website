import React from 'react'
import Link from 'gatsby-link'


const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://gihub.com/so-sc">GitHub</a>
          <a href="https://instagram.com/so-sc">Instagram</a>
          <a href="https://linkedin.com/so-sc">LinkedIn</a>
        </div>
        <div className="column">
          <a href="https://gihub.com/so-sc">Community Guide lines</a>
          <a href="https://instagram.com/so-sc">Code of Conduct</a>
        </div>
        <div className="column">
          <p>
            <strong>Sahyadri Open-Source Community</strong><br/>
            Sahyadri College of Engineering and Management,
            Adyar, Mangalore - 575007 IN<br/><br/>
            sosc@sahyadri.edu.in<br/>
            +91 9539518599
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>SOSC © 2018</p>
    </div>
  </footer>
)

export default Footer