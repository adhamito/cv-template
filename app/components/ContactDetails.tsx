import { FC } from "react";
import { ContactDetailsModel } from "../models";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
type ContactDetailsProps = {
  contactDetails: ContactDetailsModel;
};

const ContactDetails: FC<ContactDetailsProps> = ({ contactDetails }) => {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contactDetails.location
  )}`;
  return (
    <section className="  max-w-md mb-2 text-black ">
      <h2 className="text-2xl font-bold mb-2 text-center">Contact Details</h2>
      <div className="">
        <div className="flex items-center space-x-4">
          <FaPhone className="text-blue-500" size={30} />

          <div>
            <h3 className="text-lg font-bold">Phone</h3>
            <a
              href={`tel:${contactDetails.phone}`}
              className="text-gray-800 hover:underline"
            >
              {contactDetails.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-gray-700" size={30} />

          <div>
            <h3 className="text-lg font-semibold">E-mail</h3>
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-gray-700 hover:underline"
            >
              {contactDetails.email}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-red-500" size={30} />

          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:underline"
            >
              {contactDetails.location}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
