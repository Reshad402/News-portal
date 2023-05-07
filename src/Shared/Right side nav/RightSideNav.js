import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import React, { useContext } from 'react';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaWhatsapp, FaTelegram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carusel from '../Carusel';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthProvider';

const RightSideNav = () => {
    //!----------(1) as we use context so grab this here useContext  //!AuthProvider theke dhore fellam 
    const {providerLogin} = useContext(AuthContext)
    
    //!----------(2) use provider googleAuthProvider and use this to =>>>> 3rd step in providerLogin
    const googleProvider = new GoogleAuthProvider()

    //!--------------(3) onclick function add kore tar modde providerLogin function call cz er modde signInwithGoogle ase
    const handleWithGoogleSignIN = ()=>{
        providerLogin(googleProvider)
        .then(r=>{
            const user=r.user;
            console.log(user)
            
        })
        .catch(e=>{
            console.error(e)
        })
    }


    return (
        <div>
        <Stack gap={2} className="col-md-7 mb-5 mx-auto">
            <Button onClick={handleWithGoogleSignIN} variant="outline-primary"><FaGoogle/> Login with Google </Button>
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