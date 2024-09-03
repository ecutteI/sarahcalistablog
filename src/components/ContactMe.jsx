import React from 'react';
import { FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Me!</h2>
      <p className="text-lg leading-relaxed mb-4">
        If you have any questions or need further assistance, feel free to reach out.
      </p>

      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="flex items-center mb-2 md:mb-0">
          <FaInstagram className="mr-2 text-2xl" />
          <a href="https://www.instagram.com/sarahcalist" target="_blank" rel="noopener noreferrer">
            My Instagram
          </a>
        </div>

        <div className="flex items-center ml-4 md:ml-0">
          <FaFacebook className="mr-2 text-2xl" />
          <a href="https://www.threads.net/@sarahcalist" target="_blank" rel="noopener noreferrer">
           My Thread Profile
          </a>
        </div>

        <div className="flex items-center ml-4 md:ml-0">
          <FaPhone className="mr-2 text-2xl" />
          <a href="tel:+6281268800695">+6281268800695</a>
        </div>
      </div>

      {/* Additional Contact Information */}
      {/* Add more details as needed */}
    </div>
  );
};

export default ContactMe;