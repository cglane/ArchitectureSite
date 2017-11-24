import React from 'react';
import Container from 'muicss/lib/react/container';

class ContactBlock extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <p className="h2">
			Clemens-Schultz-Str. 3–5<br />
			20359 Hamburg
		</p>

		<p className="h2">
			T +49 (0) 40 361 226 12<br />
			F +49 (0) 40 361 226 13
		</p>

		<p className="h2">
			<a href="mailto:buero@architektur-michel.de">buero@architektur-michel.de</a>
		</p>

      </Container>
    );
  }
}
export default ContactBlock