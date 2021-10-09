import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
import { Link,  } from "react-router-dom";



const MovieCard = ({ el }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src={el.url} className="img" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>{el.year}</Card.Text>
    <h3><StarRatingComponent value={el.rate} className="rate"/></h3>
    <div>
        <button >
             <ul className="nav navbar-nav">
          <li>
            <Link to={`/trailer/${el.id}`}>trailer</Link>
          </li>
          </ul>
         </button>
        
         
    </div>
</Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
