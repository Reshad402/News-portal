import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import LeftSideNav from '../Shared/Left side nav/LeftSideNav';
import RightSideNav from '../Shared/Right side nav/RightSideNav';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <Row>
                    <Col lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>

                    <Col lg="3">
                        <RightSideNav></RightSideNav>                        
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;