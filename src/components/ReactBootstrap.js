import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




function ReactBootstrap() {
  return (
    <Card className='card-bs'>
        <Card.Header>React Bootstrap</Card.Header>
        <Card.Body>
            <Card.Subtitle>About React Bootstrap</Card.Subtitle>
            <Card.Text>This is React Bootstrap description. for checking i use this.</Card.Text>
            <Button>Learn More</Button>
        </Card.Body>

        <ListGroup variant='flush'>
            <ListGroup.Item>Hello World1</ListGroup.Item>
            <ListGroup.Item>Hello World2</ListGroup.Item>
        </ListGroup>
      
    </Card>
  )
}


export default ReactBootstrap;
