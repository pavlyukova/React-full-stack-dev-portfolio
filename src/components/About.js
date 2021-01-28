import React from 'react';

function About() {
  return (
    <section className="section-about mb-40">
      <div className="about-wrapper">
        <div className="row">
          <div className="about-photo col-md-4">
            <div className="photo-wrapper">
              <img src="/images/photo.jpg" alt="Phillip Lakis" />
            </div>
          </div>
          <div className="about-info col-md-8">
            <h3>Phillip Lakis</h3>
            <span>Full Stack Developer • GPU Lover</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex
            ea commodo consequat. </p>
            <div>
              <ul className="social-links">
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.svg" alt="linkedin" /></a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><img src="/images/github.svg" alt="github" /></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/images/twitter.svg" alt="twitter" /></a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="/images/instagram.svg"  alt="instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}

export default About;
