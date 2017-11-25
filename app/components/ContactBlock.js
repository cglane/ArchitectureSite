import React from 'react';
import Container from 'muicss/lib/react/container';

class ContactBlock extends React.Component {
  render() {
    return (
      <Container className="contact-block" fluid={true}>
        <p className="h2">
				1 Tradd St.<br />
				Charleston, SC
		</p>

		<p className="h2">
			T (843) 647 9951<br />
		</p>

		<p className="h2">
			<a href="mailto:vadlane@gmail.com">Virgina Dawson Lane</a>
		</p>

      </Container>
    );
  }
}
export default ContactBlock