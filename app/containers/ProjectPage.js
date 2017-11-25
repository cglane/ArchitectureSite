import React from 'react';
import Button from 'muicss/lib/react/button';
import {
  AppbarCustom,
  ContainerText,
  Footer,
  CounterCarousel
} from '../components'

const projectPageText = () => {
  return (
    <div>
          <p>
     Das Hotel Wedina ist ein Boutique-Hotel, welches aus 5 einzelnen Häusern besteht. Das Wedina hat sich der Literatur verschrieben und veranstaltet regelmässig Lesungen mit namhaften Schriftstellern.
    </p>
    <br/>
    <p>
    Das Haupthaus, das Rote Haus“, war sehr in die Jahre gekommen, eine Sanierung war überfällig.
    </p>
    <br/>
    </div>
  )
}

const ProjectPage = (props) => {
  const projectName = props.match.params.projectName
  const imagePaths = ['bedswing2-welcome-short.png', 'bedswing2-welcome-short.1.png']

  return (
    <div className="project-name">
        <AppbarCustom />
        <h1>{projectName}</h1>   
        <CounterCarousel imagePaths={imagePaths}/>
      <ContainerText  text={projectPageText()}/>
      <Footer />
    </div>
  );
};

export default ProjectPage;
