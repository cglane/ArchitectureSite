import React from 'react';
import Button from 'muicss/lib/react/button';
import config from '../config/config'
import {
  AppbarCustom,
  ContainerText,
  Footer,
  CounterCarousel
} from '../components'

const projectPageText = (x) => {
  return (
    <div>
          <p>
            "{config.projectText[x]}"
          </p>
    </div>
  )
}
const getProjectTitle = (x) => {
  return config.projectTitles[x]
}

const ProjectPage = (props) => {
  const projectName = props.match.params.projectName
  const imgPaths = config.projectImages[projectName].map((x) => {
    return `${config.baseUrl}/${projectName}/${x}`
  })  
  return (
    <div className="project-page">
        <AppbarCustom />
        <h1 className="project-name">{getProjectTitle(projectName)}</h1>   
        <CounterCarousel imagePaths={imgPaths}/>
      <ContainerText text={projectPageText(projectName)}/>
      <Footer />
    </div>
  );
};

export default ProjectPage;
