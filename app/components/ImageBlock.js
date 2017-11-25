import React from "react"
import Panel from "muicss/lib/react/panel"
import {baseUrl} from '../config/config'


class ImageBlock extends React.Component {
	render() {    
		return (
      <div className="img-block">
        {/* Content goes here */}
          <a href={`/my-projects/${this.props.projectName}`} >
          <img src={this.props.imgPath} />
          <h4> {this.props.projectTitle}</h4>
        </a>
      </div>
		)
	}
}

export default ImageBlock