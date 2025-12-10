import React from 'react';
import { InlineWidget } from 'react-calendly';
import "./Booking.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Booking = () => {
  return (
    <div>
      <Nav />

      <div className="booking-page">
        <h1>Book a Session</h1>
        <p>Select a time that works for you. Payment is collected at booking.</p>

        <InlineWidget
          url="https://calendly.com/mmcmullinyohe"
          styles={{ height: '800px' }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
