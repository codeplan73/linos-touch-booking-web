import React from "react";

const MapLocation = () => {
  return (
    <div className="hidden md:flex md:w-6/12 h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.4107102148555!2d-0.03663322382151673!3d51.45061531485064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602383dfca95d%3A0x7a4fc9bfc715e136!2s103%20Crofton%20Park%20Rd%2C%20London%20SE4%201AJ%2C%20UK!5e0!3m2!1sen!2sng!4v1711034098989!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        //   referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation;
