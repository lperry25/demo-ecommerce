import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';


export default class Example extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-3">Demo E-Commerce</h1>
                                <p className="lead">This is a test site for working with the Shopify platform.</p>
                                <p>It will use the Shopify API and it also uses reactstrap for styling</p>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}
