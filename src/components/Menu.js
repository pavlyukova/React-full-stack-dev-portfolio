import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Menu() {
  return (
    <section className="section-menu mb-40">
      <div className="menu-wrapper">
        <ul>
          <li>
            <AnchorLink href='#work'>work</AnchorLink>
          </li>
          <li>
            <AnchorLink href='#projects'>projects</AnchorLink>
          </li>
          <li>
            <AnchorLink href='#gallery'>gallery</AnchorLink>
          </li>
          <li>
            <AnchorLink href='#contacts'>contacts</AnchorLink>
          </li>
        </ul>
      </div>
    </section>

  );
}

export default Menu;
