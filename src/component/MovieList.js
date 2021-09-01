import React from 'react'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';

const MovieList = ({MovieData}) => {
    return (
        
        <div id="cart" >
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={MovieData.posterURL} style={{width:250,height:300}} />
        <Card.Body>
            <Card.Title>{MovieData.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{MovieData.description}</ListGroupItem>
            <ListGroupItem>{MovieData.rating}</ListGroupItem>
        </ListGroup>
        </Card>

        



        </div>
    )
}

export default MovieList
