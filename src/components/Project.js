import React from 'react';
import './Project.css'
import test1 from '../Images/test1.jpeg'
import test2 from '../Images/test2.jpeg'
import test3 from '../Images/test3.jpeg'
import { Card, Button } from 'react-bootstrap'

class Project extends React.Component {
    render(){
        return (
            <>
            <Card style={{ width: '18rem', display: 'flex', flexDirection:'row', height:"auto", width:'auto' }}>
                <Card.Img  variant="top" src={test1} style={{flex: 1}}/> 
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>

                <Card.Img variant="top" src={test2} /> 
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>

                <Card.Img variant="top" src={test3} /> 
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>         
        </Card>
        </>
        )
    }
}

export default Project