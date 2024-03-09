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
          <div className="contactInfo">
          <h2 className="text-white text-4xl font-bold mb-6">Contact Us</h2>
            <div className="emailMe flex flex-col text-left w-60vw p-12">
              <div className="emailTitle font-rajdhani"></div>
              <div className="emailForm flex flex-col bg-gray-200 p-12">
                <form id="contact-form">
                  <input type="hidden" name="contact_number" />
                  <input type="text" name="name" autoComplete="off" placeholder="Name" required className="w-full h-16 px-8 text-gray-800 text-base border border-gray-300 bg-white focus:outline-none focus:border-blue-500 transition duration-300" />
                  <input type="email" name="email" autoComplete="off" placeholder="Email" required className="w-full h-16 px-8 mt-4 text-gray-800 text-base border border-gray-300 bg-white focus:outline-none focus:border-blue-500 transition duration-300" />
                  <input type="text" name="subject" autoComplete="off" placeholder="Subject" required className="w-full h-16 px-8 mt-4 text-gray-800 text-base border border-gray-300 bg-white focus:outline-none focus:border-blue-500 transition duration-300" />
                  <input className="message w-full h-40 px-8 mt-4 text-gray-800 text-base border border-gray-300 bg-white focus:outline-none focus:border-blue-500 transition duration-300" type="text" name="message" autoComplete="off" placeholder="Message" required />
                  <input type="submit" value="Send" className="w-full h-16 mt-4 px-8 font-bold text-white bg-blue-700 border-2 border-blue-700 rounded-lg cursor-pointer transition duration-300 hover:text-blue-700 hover:bg-transparent" />
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
