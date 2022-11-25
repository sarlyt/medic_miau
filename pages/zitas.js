import Head from "next/head";
import { useState, useffect } from "react";

import {
    Table,
    Card,
    Container,
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
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,

} from 'reactstrap';

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [motivoConsulta, setMotivoConsulta] = useState('');

    function toggle(){
        setModalOpen(!modalOpen);
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
        <h1>Hola weon, aqui estan tus consultas</h1>
        <Container>
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
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>  
        </Container>


        <Button color="danger" onClick={toggle}>nueva cita</Button>
        <Modal size="lg" isOpen={modalOpen} fade={false} toggle={toggle} >
          <ModalHeader toggle={toggle}>Nueva Cita</ModalHeader>
          <ModalBody>
          <Table hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre de doctor</th>
                        <th>Especialidad</th>
                        <th>Seleccionar</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Luz de mi corazao</td>
                            <td>Buggeame</td>
                            <td>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio2" />
                                    </Label>
                                </FormGroup>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Sarlyt</td>
                            <td>su drug pega como mula - el tuco</td>
                            <td>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio2" />
                                    </Label>
                                </FormGroup>
                            </td>
                        </tr>

                    </tbody>
                </Table>
          
            <FormGroup>
                <Label for="exampleText">Motivo de consulta</Label>
                <Input value={motivoConsulta} onChange={(event)=> setMotivoConsulta(event.target.value)} type="textarea" name="text" id="exampleText" />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Solicitar cita</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
    </div>
);
}