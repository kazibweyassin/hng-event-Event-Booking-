import React from 'react';
import { CiMapPin } from 'react-icons/ci';

const EventDetails = () => {
  return (
    <section className=''>

    <div className="bg-gradient-to-t from-stone-900 to-cyan-900 p-4 rounded shadow text-center space-y-2 mb-6">
      <h1 className="text-center text-xl font-bold text-cyan-400 font-road-rage">
        Techember Fest '25
      </h1>
      <p className="text-gray-300">
        Join us for an unforgettable experience at <br /> Techember Fest! Secure your spot now.
      </p>
      <div>
        <p className="text-gray-300 flex items-center justify-center">
          <CiMapPin className="mr-2 text-lg" />
          Event Location || <span className="font-semibold">March 15, 2025 | 7:08 PM</span>
        </p>
      </div>
    </div>    
    </section>

  );
};

export default EventDetails;
