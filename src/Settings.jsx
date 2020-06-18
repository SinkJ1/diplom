import React, { useState } from "react"
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import {updateUser} from "../src/api/user/userService"

const background = {
    border: "0px", backgroundColor: "white", backgroundImage: "none"
}

const Settings = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [birdthDate, setBirdthDate] = useState(user.birdthDate.split(".")[2] + "-" + user.birdthDate.split(".")[1] + "-" + user.birdthDate.split(".")[0])
    const [password,setPassword] = useState();
    
    const onLoginChange = (e) => {
        setUser({...user,login: e.target.value})
    }
    
    const onNameChange = (e) => {
        setUser({...user,name: e.target.value})
    }
    
    const onBirdthDateChange = (e) => {
        setBirdthDate(e.target.value)
    }
    
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onUserChange = () => {
        const editabledUser = {
            id:user.id,
            name:user.name,
            login: user.login,
            birdthDate: birdthDate.split("-")[2] + "." + birdthDate.split("-")[1] + "." + birdthDate.split("-")[0],
            password: user.password
        }
      
        updateUser(editabledUser)
    }

    return (
        <>
            <Container style={background}>
                <Row>
                    <Col>
                        <Row>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs lg="1"></Col>
                            <Col xs lg="10">
                                <Form>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={user.login} onChange={onLoginChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" value={user.name} onChange={onNameChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupBirdth">
                                        <Form.Label>Birdth date</Form.Label>
                                        <div id="exampleFormControlSelect2">
                                            <input type="date" className="form-control" id="exampleFormControlSelectYear" placeholder="year" value={birdthDate} onChange={onBirdthDateChange}/>
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange}/>
                                    </Form.Group>
                                    <Button variant="primary" onClick={onUserChange}>UPDATE</Button>
                                </Form>
                            </Col>
                            <Col xs lg="1"></Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>)
}

export default Settings