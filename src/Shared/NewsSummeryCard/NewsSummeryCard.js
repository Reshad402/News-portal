import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({news}) => {
    const {author,_id,title,total_view,details,image_url,rating } = news;
    console.log(news);
    return (
        
    <Card className='mb-5'>

    <div>
      <Card.Header >
        <div className='d-flex justify-content-between'>
            <div className='d-flex'>
                 <Image className='me-2' 
                 roundedCircle style={{height:'60px',width:'60px'}}
                 src={author.img}>
                 </Image>
                 <div>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                 </div>
            </div>
        
            <div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </div>
      </Card.Header>
    </div>
      


      <Card.Body>
        <Card.Title><h3>{title}</h3></Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
        {
        details.length >200?
            <p>{details.slice(0,250)+ '...'} <Link to={`/news/${_id}`}>Read more</Link></p> 
            :
                <p>{details}</p>
        }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
          <div>
          <FaStar className='text-warning'></FaStar>
          <span>{rating?.number}</span>
          </div>

          <div>
            <span><FaEye></FaEye> {total_view}</span>
          </div>
      </Card.Footer>
    </Card>
    )
};

export default NewsSummeryCard;