 import { Container, Col, Row } from "react-bootstrap";
import React from 'react';
 
 function Header (props){
    return(
<Container fluid className="text-center mt-3">
    <Row>
        <Col md={4}>Library</Col>
        <Col md={4}><input placeholder="search.."/></Col>
        <Col md={4}>log in</Col>
    </Row>
</Container>)
 }
 export default Header