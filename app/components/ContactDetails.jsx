import React from "react";
import data from "./data.json";

const ContactDetails = () => {
  return (
    <section className=" rounded-lg max-w-md mb-2 text-white ">
      <h2 className="md:text-2xl text-base font-bold mb-2 text-start">
        Contact Details
      </h2>
      <div className="">
        <div>
          <h3 className="md:text-lg text-sm font-bold">Phone</h3>
          <p className="text-gray-400 md:text-lg text-xs">
            {data.personalInfo.contactDetails.phone}
          </p>
        </div>
        <div>
          <h3 className="md:text-lg text-sm font-semibold">E-mail</h3>
          <p className="text-gray-400 md:text-lg text-xs">
            {data.personalInfo.contactDetails.email}
          </p>
        </div>
        <div>
          <h3 className=" font-semibold md:text-lg text-sm">Location</h3>
          <p className="text-gray-700 md:text-lg text-xs">
            {data.personalInfo.contactDetails.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
