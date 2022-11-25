import Head from "next/head";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {
    Table,
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
    const[ fecha, setFecha] = useState( new Date().getUTCDate()+'/' + new Date().getUTCMonth() + '/' + new Date().getFullYear() );

    function printFecha(value, event){

        var str =value.getUTCDate()+'/' + value.getUTCMonth() + '/' + value.getFullYear();
        setFecha(str);

        console.log(str)
    }

    return (
        <div>
            <Head>
                <title>Agenda</title>
                <meta
                name="description"
                content="Monster Free Next Js Dashboard Template"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container style={{'textAlign':'center'}}>
            <h1>
                Agenda
            </h1>
                <div style={{  'display': 'flex',
                'justify-content': 'center' }}>
                    <Calendar onClickDay={printFecha} onChange={onChange} value={value} />
                </div>
                <h1>
                    Lista de pendientes para el dia {fecha}
                </h1>

                <Table hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Identificador</th>
                        <th>Paciente</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>En progreso</td>
                            <td>312313</td>
                            <td>Paciente1</td>
                            <td>25/11/22</td>
                            <td>3:00 pm</td>
                        </tr>
                        <tr>
                            
                        </tr>
                        <tr>
                        
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}