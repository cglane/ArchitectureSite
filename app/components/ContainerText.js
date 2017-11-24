import React from 'react';
import Container from 'muicss/lib/react/container';

class ContainerText extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <div>{this.props.text}</div>
      </Container>
    );
  }
}
export default ContainerText