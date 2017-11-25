import React from "react"
import config from '../config/config'
import {
  AppbarCustom,
  ContainerText,
  Footer,
  ImageBlock,
  ProjectImages
} from "../components"

// Remove In Production
const projectData = Object.keys(config.projectImages).map((key) => {
  return {
    'projectName': key,
    'imgPath': `${config.baseUrl}/${key}/${config.projectImages[key][0]}`,
    'title': config.projectTitles[key]
  }
})


const blockList = projectData.map((x, index) => {
  return (
    <ImageBlock key={index}
              projectName={x.projectName}
               imgPath={x.imgPath}
               projectTitle={x.title}/>    
  )
})
const ProjectLandingPage = () => {

	return (
    <div className="project-landing-page">
      <AppbarCustom />
      <div className="project-list">
        {blockList}
      </div>      
      <Footer />
    </div>
	)
}

export default ProjectLandingPage
