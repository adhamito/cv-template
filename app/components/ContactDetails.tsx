import { FC } from "react";
import { ContactDetailsModel } from "../models";
import { SectionTitle } from "./atoms/SectionTitle";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
type ContactDetailsProps = {
  contactDetails: ContactDetailsModel;
};

const ContactDetails: FC<ContactDetailsProps> = ({ contactDetails }) => {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contactDetails.location
  )}`;
  return (
    <section className="  max-w-md mb-2">
      <SectionTitle title="Contact Details" />
      <div className="">
        <div className="flex items-center space-x-4">
          <FaPhone className="text-blue-500" size={30} />

          <div>
            <h3 className="text-lg font-bold">Phone</h3>
            <a
              href={`tel:${contactDetails.phone}`}
              className="hover:underline"
            >
              {contactDetails.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="" size={30} />

          <div>
            <h3 className="text-lg font-semibold">E-mail</h3>
            <a
              href={`mailto:${contactDetails.email}`}
              className="hover:underline"
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
              className="hover:underline"
            >
              {contactDetails.location}
            </a>
          </div>
        </div>
        {contactDetails.linkedin && (
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-[#0077B5]" size={30} />

            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {contactDetails.linkedin.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        )}
        {contactDetails.github && (
          <div className="flex items-center space-x-4">
            <FaGithub className="text-gray-200" size={30} />

            <div>
              <h3 className="text-lg font-semibold">GitHub</h3>
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {contactDetails.github.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactDetails;
