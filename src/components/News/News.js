import React from 'react';
import { Card,Button } from 'react-bootstrap';

const News = (props) => {
  console.log(props.article)
  const {title,description,author} = props.article || {};
  
    return (
        
            <Card>
      <Card.Header> </Card.Header>
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="primary">{author} </Button>
      </Card.Body>
    </Card>
    
    );
};

export default News;