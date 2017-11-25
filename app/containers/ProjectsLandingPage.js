import React from "react"
import {
  AppbarCustom,
  ContainerText,
  Footer,
  ImageBlock,
  ProjectImages
} from "../components"

var imgContent = require('../assets/images/bedswing2-welcome-short.png');//require the image, with url-loader, you will get the base64 encoded string

// Remove In Production
const projectData = [
	{
		"projectName": "myName",
    'imgName': 'bedswing2-welcome-short.png',
		"title": "title"
	}
]

const blockList = projectData.map((x, index) => {
  return (
    <ImageBlock key={index}
              projectName={x.projectName}
               imgName={x.imgName}
               projectTitle="title"/>    
  )
})
const ProjectLandingPage = () => {

	return (
    <div class="project-landing-page">
      <AppbarCustom />
      <div className="project-list">
        {blockList}
      </div>      
      <Footer />
    </div>
	)
}

export default ProjectLandingPage
