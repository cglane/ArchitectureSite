import React from 'react';
import Button from 'muicss/lib/react/button';
import {
  AppbarCustom,
  ContainerText,
  Footer,
} from '../components'


const ProfilePage = () => {
  return (
    <div className="profile-page">
      <AppbarCustom />
      <ContainerText  />
      <Footer />
    </div>
  );
};

export default ProfilePage;
