import React from 'react';
import data from './data.json'; 

const ContactDetails = () => {
  return (
    <section className=" rounded-lg max-w-md mb-4 ">
      <h2 className="text-2xl font-bold mb-4 text-start">Contact Details</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold">Phone</h3>
          <p className="text-gray-800">{data.personalInfo.contactDetails.phone}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">E-mail</h3>
          <p className="text-gray-700">{data.personalInfo.contactDetails.email}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="text-gray-700">{data.personalInfo.contactDetails.location}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
