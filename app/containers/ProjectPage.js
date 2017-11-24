import React from 'react';
import Button from 'muicss/lib/react/button';
import {
  AppbarCustom,
  ContainerText,
  Footer,
} from '../components'


const ProjectPage = () => {
  return (
    <div>
        <AppbarCustom />
        {/* <h1>{this.props.projectName}</h1>    */}
      <ContainerText  />
      <Footer />
    </div>
  );
};

export default ProjectPage;
