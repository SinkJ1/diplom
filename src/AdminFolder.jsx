import React, { useState } from "react"

import Tabs from 'react-bootstrap/Tabs'
import { Tab, Row, Col, Nav } from "react-bootstrap"
import AddFilm from "./components/admins components/AddFilm";
import ChangeFilm from "./components/admins components/ChangeFilm";

const AdminFolder = () => {

    const [key, setKey] = useState('add');
    return <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <Row style={{ width: "100%" }}>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column" style={{ width: "50%" }}>
                    <Nav.Item >
                        <Nav.Link eventKey="first">Работа с фильмами</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Работа с пользователями</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first" style={{marginLeft:"-15%"}}>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            <Tab eventKey="add" title="Добавить фильм">
                                <AddFilm />
                            </Tab>
                            <Tab eventKey="change" title="Изменить фильм">
                                <ChangeFilm/>
                            </Tab>
                            <Tab eventKey="delete" title="Удалить фильм">
                            </Tab>
                        </Tabs>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
}

export default AdminFolder