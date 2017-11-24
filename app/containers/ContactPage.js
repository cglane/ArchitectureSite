import React from 'react';
import Button from 'muicss/lib/react/button';
import {
  AppbarCustom,
  Footer,
  ContactBlock,
} from '../components'


const ContactPage = () => {
  return (
    <div>
      <AppbarCustom />
      <ContactBlock  />
      <Footer />
    </div>
  );
};

export default ContactPage;
