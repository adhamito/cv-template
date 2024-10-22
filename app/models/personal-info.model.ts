export class PersonalInfoModel {
  name: string;
  title: {
    front: string;
    back: string;
    full: string;
  };
  contactDetails: ContactDetailsModel;
  about: string;
}
export class ContactDetailsModel {
  phone: string;
  email: string;
  location: string;
}
