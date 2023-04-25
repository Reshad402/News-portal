import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import React from 'react';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaWhatsapp, FaTelegram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carusel from '../Carusel';

const RightSideNav = () => {
    return (
        <div>
        <Stack gap={2} className="col-md-7 mb-5 mx-auto">
            <Button variant="outline-primary"><FaGoogle/> Login with Google </Button>
            <Button variant="outline-dark"><FaGithub/> Login with Github</Button>
        </Stack>
        <div>
            <h5>Find us on</h5>
            <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTelegram/> Telegram</ListGroup.Item>
            </ListGroup>
        </div>
        <Carusel></Carusel>
        </div>
    );
};

export default RightSideNav;