import React from 'react';
import Button from 'muicss/lib/react/button';
import {
  AppbarCustom,
  Footer,
  ContactBlock,
} from '../components'


const ContactPage = () => {
  return (
    <div classNAme="contact-page">
      <AppbarCustom />
      <ContactBlock  />
      <Footer />
    </div>
  );
};

export default ContactPage;
