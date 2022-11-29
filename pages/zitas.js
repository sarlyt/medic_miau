import Head from "next/head";
import { useState, useEffect } from "react";
import axios from '../src/config/AxiosConfig';
import confirm from "reactstrap-confirm";

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

    const [doctores, setDoctores]=useState([]);

    const [id_medico, SetId_medico]=useState(0);
    const [descripcion, setDescripcion]=useState('');
    const [id_usuario, setId_usuario] = useState(0);

    const[citas, setCitas]=useState([]);

    
    function toggle(){
        setModalOpen(!modalOpen);
    }




    async function getDoctores(){
        var getlocal = localStorage.getItem("id");
        console.log(getlocal);
        setId_usuario(getlocal);
        const docs = await axios.get('/perfil_Doc/get-all');
        console.log(docs.data);
        setDoctores(docs.data);
        
    }
    async function cargarCitasAgendadas(){
        var getlocal = localStorage.getItem("id");
        var citas2= await axios.get(`/consulta/usuario/${getlocal}`);
        console.log(citas2.data);
        setCitas(citas2.data);
    }




    async function agendarCita(){
        var consulta = await axios.post('/consulta', {id_medico, id_usuario, descripcion, status:'NUEVA'});
        console.log(consulta);
        toggle();
        cargarCitasAgendadas();


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
            cargarCitasAgendadas();
        }else{

        }
    }

    useEffect(()=>{
        cargarCitasAgendadas();
        getDoctores();
    }, []);


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
        <h1>Aqui estan tus consultas</h1>
        <Container>
            <Row>
                <Table hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Médico</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Cancelar</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {citas.map((cita, index) =>
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    {cita.status=='NUEVA'? 
                                    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                                    : 
                                    cita.status=='AGENDADA'?
                                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                                    :
                                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                                    } { cita.status}
                                </td>
                                <td>{cita.doctor.nombre_completo}</td>
                                <td>{cita.fecha_consulta}</td>
                                <td>{cita.hora_consulta}</td>
                                <td>
                                    <Button color="danger" disabled={cita.status=='NUEVA' || cita.status=='AGENDADA' ? false: true} onClick={()=>cancelar(cita.id)}>Cancelar</Button>
                                </td>
                            </tr>
                        )}
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

              {doctores.map((doctor, index) =>
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{doctor.nombre_completo}</td>
                    <td>{doctor.especialidad}</td>
                    <td>
                        <FormGroup check>
                            <Label check>
                                <Input value={doctor.id_usuario} onChange={(event)=> SetId_medico(event.target.value)} type="radio" name="radio" />
                            </Label>
                        </FormGroup>
                    </td>
                </tr>
              )}
                    </tbody>
                </Table>
          
            <FormGroup>
                <Label for="exampleText">Motivo de consulta</Label>
                <Input value={descripcion} onChange={(event)=> setDescripcion(event.target.value)} type="textarea" name="text" id="exampleText" />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={agendarCita}  >Solicitar cita</Button>
            <Button color="secondary" onClick={toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
    </div>
);
}