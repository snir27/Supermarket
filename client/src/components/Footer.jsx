import "../styles/Footer.css";
import React from 'react';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <section>
          Contact us: 
          </section>
          <section>
          <AiFillPhone />  +972 (0)54-5174462
        </section>
         <section>
          <AiFillMail /> contact@supermarket.com
      </section>
    </footer>
  );
}

export default Footer
