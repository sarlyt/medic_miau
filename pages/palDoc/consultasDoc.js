import Head from "next/head";
import React, { useState } from 'react';
import classnames from 'classnames';


import {
    Table,
    TabContent, TabPane, Nav, NavItem, NavLink,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Container,
} from "reactstrap";




export default function Home() {
    const [value, onChange] = useState(new Date());
    const [activeTab, setActiveTab] = useState('1')

    function toggle(tab) {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <div>
            <Head>
                <title>Consultas</title>
                <meta
                name="description"
                content="Monster Free Next Js Dashboard Template"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container style={{'textAlign':'center'}}>
            <h1>
                Consultas Historial
            </h1>






                <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active:activeTab === '1' })}
              onClick={() => {toggle('1'); }}
            >
                Nuevas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active:activeTab === '2' })}
              onClick={() => {toggle('2'); }}
            >
              Agendadas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active:activeTab === '3' })}
              onClick={() => {toggle('3'); }}
            >
              Rechazadas
            </NavLink>
          </NavItem>


        </Nav>


        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
            <Table hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Identificador</th>
                        <th>Médico</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          
                        </tr>
                        <tr>
                            
                        </tr>
                        <tr>
                      
                        </tr>
                    </tbody>
                </Table>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
            <Table hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Identificador</th>
                        <th>Médico</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>

                    </tbody>
                </Table>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
            <Table hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Identificador</th>
                        <th>Médico</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </Table>
            </Row>
          </TabPane>
        </TabContent>


            </Container>
        </div>
    )
}