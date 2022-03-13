import React from 'react';
import {Accordion, Badge, Button, Card }from 'react-bootstrap'


const Users = (props) => {
     console.log(props.data)
  return (
    <div>
        <Accordion key={props.id}>
            <Card style={{ margin: 10 }} >

              <Card.Header style={{ display: 'flex' }}>
                <span style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18

                }}>

                  <Accordion.Header>
                    {props.data.title}
                  </Accordion.Header>




                </span>
                
              </Card.Header>


              <Accordion.Body>
                <Card.Body >
                  <h4>
                    <Badge variant='success' style={{fontSize : 15}}>{props.data.body}</Badge>
                  </h4>
                  
                    <footer className="blockquote-footer" style={{ marginTop: 10}}>
                      Created on date --
                    </footer> 
                 
                </Card.Body></Accordion.Body>





            </Card>
            </Accordion>
    </div>
  )
}

export default Users