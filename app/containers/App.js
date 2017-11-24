import React from 'react';
import Button from 'muicss/lib/react/button';
import {
  AppbarCustom,
  ContainerText,
  Footer,
  ContactBlock,
  AutomaticCarousel
} from '../components'

const loadingPageText = () => {
  return (
    <p>
     Text
    </p>
  )
}
const App = () => {
  return (
    <div>
      <AutomaticCarousel />
      <AppbarCustom />
      <ContainerText text={loadingPageText()}/>
      <ContactBlock  />
      <Footer />
    </div>
  );
};

export default App;
