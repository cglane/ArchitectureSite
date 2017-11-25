import React from 'react';
import Container from 'muicss/lib/react/container';

class AwardsBlock extends React.Component {
  render() {
    return (
      <Container className="awards-block" fluid={true}>
			<h3>
      The firm has also been a recipient of the following prestigious awards: 
			</h3>
			<p>
			AIA Robert Mills Honor Award 
			</p>
			<p>
			The Historic Charleston Foundation's Whitelaw Founders Award 
			</p>
			<p>
			Several Preservation Society Caropolis Awards
			</p> 
      </Container>
    );
  }
}
export default AwardsBlock