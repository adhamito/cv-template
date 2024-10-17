import { FC } from "react";
import { ContactDetailsModel } from "../models";
type ContactDetailsProps = {
  contactDetails: ContactDetailsModel;
};

const ContactDetails: FC<ContactDetailsProps> = ({ contactDetails }) => {
  return (
    <section className=" rounded-lg max-w-md mb-2 text-black ">
      <h2 className="text-2xl font-bold mb-4 text-start">Contact Details</h2>
      <div className="">
        <div>
          <h3 className="text-lg font-bold">Phone</h3>
          <p className="text-gray-800">{contactDetails.phone}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">E-mail</h3>
          <p className="text-gray-700">{contactDetails.email}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="text-gray-700">{contactDetails.location}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
