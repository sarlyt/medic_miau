import Head from "next/head";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from '../../src/config/AxiosConfig';
import confirm from "reactstrap-confirm";

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
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";




export default function Home() {
    const [value, onChange] = useState(new Date());
    const [fecha, setFecha] = useState( new Date().getUTCDate()+'/' + new Date().getUTCMonth() + '/' + new Date().getFullYear() );
    const [agenda, setAgenda] = useState([]);
    const[modalH, setModalH]=useState(false);
    const [historial, setHistorial] = useState({});



    async function mostrarHistorial(idPaciente){
        setModalH(!modalH);
        var hist = await axios.get(`/miHistorial/${idPaciente}`);
        setHistorial(hist.data);
      }

    async function printFecha(value, event){

        var str =value.getUTCDate()+'/' + (value.getUTCMonth()+1) + '/' + value.getFullYear();
        const ag = await axios.post('/consulta/get-fecha', {fecha_consulta: str} );
        console.log(ag.data);
        setAgenda(ag.data);
        setFecha(str);
        console.log(str)
    }

    async function cancelar(idConsulta){
        console.log(idConsulta);
        let result = await confirm({
            title: 'Cancelar?',
            message: "Desea Cancelar su cita?",
        });
        console.log(result);
        if(result){
            await axios.put(`/consulta/${idConsulta}`, {status:'CANCELADA'} );
            const ag = await axios.post('/consulta/get-fecha', {fecha_consulta: fecha} );
            console.log(ag.data);
            setAgenda(ag.data);
        }else{
  
        }
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
                        <th>Paciente</th>
                        <th>Problema</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Historial</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {agenda.map((cita, index) =>
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    {cita.status!='AGENDADA'?
                                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                                    :
                                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                                    }  {cita.status}
                                </td>
                                <td>{cita.historial.nombre_completo}</td>
                                <td>{cita.descripcion}</td>
                                <td>{cita.fecha_consulta}</td>
                                <td>{cita.hora_consulta}</td>
                                <td>
                                    <Button  onClick={()=>mostrarHistorial(cita.id_usuario)}>Historial</Button> 
                                </td>
                                <td>
                                    {cita.status!='AGENDADA'?
                                        '-'
                                    :
                                        <>
                                        <Button color="danger" onClick={()=>cancelar(cita.id)}>Cancelar</Button>
                                        <Button color="success" onClick={()=>terminar(cita.id)}>Terminar</Button>
                                        </>                                   
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>

            <Modal isOpen={modalH} toggle={()=> setModalH(!modalH)} >
          <ModalHeader toggle={()=> setModalH(!modalH)}> - Historial - </ModalHeader>
          <ModalBody>
            <Container>

            <Row>Altura: {historial.altura} </Row>
          
             <Row>Comorbilidad: {historial.comorbis}</Row>
             <Row>Alcohol: {historial.d_alcohol}</Row>
             <Row>Alergias: {historial.d_alergias}</Row>
             <Row>Drogas: {historial.d_drogas}</Row>
             <Row>Medicamentos: {historial.d_medicamentos}</Row>
             <Row>Tabaquismo: {historial.d_tabaquismo}</Row>
             <Row>Edad: {historial.edad}</Row>
             <Row>Nombre Completo: {historial.nombre_completo}</Row>
             <Row>Peso: {historial.peso}</Row>
             <Row>Sexo: {historial.sexo}</Row>
             <Row>Tipo de sangre: {historial.tipo_sangre}</Row>

            </Container>
            <p></p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={()=> setModalH(!modalH)}>ok</Button>
          </ModalFooter>
        </Modal>
        </div>
    )
}