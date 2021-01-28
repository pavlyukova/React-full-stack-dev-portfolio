import React from 'react';

function Contacts () {
  return (
    <section className="section-contact mb-40" id="contact">
      <div className="container">
        <div className="contact-form">
          <form className="row">
            <div className="contact-name">
              <label htmlFor="name">name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="contact-email">
              <label htmlFor="email">email:</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="contact-message col-md-12">
              <label htmlFor="message">message:</label>
              <textarea id="message" rows="4" cols="50" placeholder=""></textarea>
            </div>
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Contacts;
