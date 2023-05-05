import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const {author,title,details,image_url ,category_id} = news;
    console.log(news);
    return (
        <div>
            <h3>HI{news.title}</h3>
        <Card >
                <Card.Body>
                    <img style={{ width: '706px' }} src={image_url} alt="" />
                    <Card.Title className='mt-3'><h5>{title}</h5></Card.Title>
                    <Card.Text className='mt-3'>
                        {details}
                     </Card.Text>
                     <Link to={`/category/${category_id}`}><Button variant="primary"></Button></Link>
                    
                </Card.Body>
        </Card>
        </div>
    );
};

export default News;