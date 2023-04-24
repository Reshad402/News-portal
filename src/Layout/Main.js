import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="2">
                        <h3>Side nav</h3>
                    </Col>

                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>

                    <Col lg="3">
                        <h4>Right Side nav</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;