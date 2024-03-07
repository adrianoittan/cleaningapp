import React, { useEffect } from "react";
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import './components/css/emailform.css';

const App = () => {
  

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients></Clients>
          <CTA />
          <div classname="contactInfo">
          <div classname='emailMe'>
          <div className="emailForm">
            <form id="contact-form">
              <input type="hidden" name="contact_number" />
              <input type="text" name="name" autoComplete="off" placeholder="Name" required />
              <input type="email" name="email" autoComplete="off" placeholder="Email" required />
              <input type="text" name="subject" autoComplete="off" placeholder="Subject" required />
              <input className="message" type="text" name="message" autoComplete="off" placeholder="Message" required />
              <input type="submit" value="Send" style={{ backgroundColor: '#112a63', color: 'white' }} />
            </form>
          </div>
         </div> 
         </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
