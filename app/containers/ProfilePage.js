import React from 'react';
import Button from 'muicss/lib/react/button';
import {
  AppbarCustom,
  ContainerText,
  Footer,
  AwardsBlock
} from '../components'

const profilePageText = () => {
	return (
    <p>
     VDL Associates, LLC is a design firm specializing in Residential and Commercial Architecture, including Renovations and Historic Restoration. Established in 1996 in the heart of Historic Charleston, the firm’s projects can be found all over the Coastal Carolina region as well as throughout the Southeast.
    </p>
  )
}
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <AppbarCustom />
      <ContainerText text={profilePageText()}/>
      <AwardsBlock />
      <Footer />
    </div>
  );
};

export default ProfilePage;
