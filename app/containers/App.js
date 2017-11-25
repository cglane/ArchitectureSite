import React from "react";
import $ from "jquery";
import style from "../assets/scss/main.scss";
import {
  AppbarCustom,
  ContainerText,
  Footer,
  ContactBlock,
  AutomaticCarousel,
  ProjectReference
} from "../components"

$(document).ready(function () {
	$("html, body").animate({
	scrollTop: $(".app-bar").offset().top
}, "slow")
  let lastScroll = 0
  $(window).scroll(function () {
  var thisScroll = $(this).scrollTop();    
	if ($(this).scrollTop() > 1000) {
    if (lastScroll < thisScroll) {
      $(".app-bar").css({"position": "fixed", "top": 0, width: "100%"}).fadeIn()      
    } else {
      $(".app-bar").css({"position": "fixed", "top": 0, width: "100%"}).fadeOut()
    }
  } else {
	  $(".app-bar").css({"position": "relative"}).fadeIn()
   }
   lastScroll = thisScroll;
})
})

const loadingPageText = () => {
	return (
    <p>
     VDL Associates, LLC is a design firm specializing in Residential and Commercial Architecture, including Renovations and Historic Restoration. Established in 1996 in the heart of Historic Charleston, the firm’s projects can be found all over the Coastal Carolina region as well as throughout the Southeast.
    </p>
  )
}
const imagePaths = ["bedswing2-welcome-short.png", "bedswing2-welcome-short.1.png"]
const projectReference = {
	"projectOne": {
	"name": "Historic",
	"text": "The firm has also been a recipient of the following prestigious awards: AIA Robert Mills Honor Award, The Historic Charleston Foundation's Whitelaw Founders Award, Several Preservation Society Caropolis Awards",
	"img": "http://virginiadawsonlanearchitect.com/albums/Meeting42/IMG_6730.JPG"
},
	"projectTwo": {
	"name": "Residential",
	"text": "Lorem Ipsum",
	"img": "http://virginiadawsonlanearchitect.com/albums/Meeting42/IMG_6730.JPG"
}, 
	"projectThree": {
	"name": "Commercial",
	"text": "Lorem Ipsum",
	"img": "http://virginiadawsonlanearchitect.com/albums/Meeting42/IMG_6730.JPG"
}
}
const App = () => {
	return (
    <div className="app">
      <h3 className="vdl-name"> 
        <span className='vdl'>VDL </span>
        <span className="associates">Associates LLC </span>
      </h3>
      <AutomaticCarousel imagePaths={imagePaths} />
      <AppbarCustom />
      <ContainerText text={loadingPageText()}/>
      <ProjectReference {...projectReference} />
      <ContactBlock/>
      <Footer />
    </div>
  )
};

export default App
