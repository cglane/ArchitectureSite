import React from 'react';
import Container from 'muicss/lib/react/container';

class ProjectReference extends React.Component {
  render() {
    return (
        <div className="project-reference">
            <h3> Design Focus </h3>
             <Container className="project-reference-block" fluid={true}>
             <div className="text-right">
               <h3>{this.props.projectOne.name}</h3>
               <p>{this.props.projectOne.text}</p>
               </div>
             <div><img src={this.props.projectOne.img}/> </div>
      </Container>
        <Container className="project-reference-block" fluid={true}>
            <div> <img src={this.props.projectTwo.img}/> </div>
            <div className="text-left">
              <h3>{this.props.projectTwo.name}</h3>
              <p>{this.props.projectTwo.text}</p>
              </div>
      </Container>
    <Container className="project-reference-block" fluid={true}>
          <div className="text-right">
            <h3>{this.props.projectThree.name}</h3>
            <p>{this.props.projectThree.text}</p>
            </div>
          <div> <img src={this.props.projectThree.img}/> </div>
     </Container>
        </div>
    );
  }
}
export default ProjectReference