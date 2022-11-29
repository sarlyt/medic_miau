import Head from "next/head";
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import axios from '../../src/config/AxiosConfig';
import confirm from "reactstrap-confirm";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




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
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";




export default function Home() {
  
    const [value, onChange] = useState(new Date());
    const [hora_consulta, setHora] = useState('00:00');
    const[ fecha_consulta, setFecha] = useState( new Date().getUTCDate()+'/' + new Date().getUTCMonth() + '/' + new Date().getFullYear() );
    const [historial, setHistorial] = useState({});
    const [activeTab, setActiveTab] = useState('1');
    const [citasA, setCitasA]= useState([]);
    const [citasC, setCitasC]= useState([]);
    const [citasN, setCitasN]= useState([]);
    const [citasT, setCitasT]= useState([]);
    const [id_usuario, setId_usuario] = useState(0);
    const [id_cita, setId_cita]= useState(0);

    const[modalH, setModalH]=useState(false);
    const[modalA, setModalA]=useState(false);

    function toggle(tab) {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
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
          cargarTablas();
      }else{

      }
  }
    async function terminar(idConsulta){
      console.log(idConsulta);
      let result = await confirm({
          title: 'Terminar?',
          message: "Desea Terminar su cita?",
      });
      console.log(result);
      if(result){
          await axios.put(`/consulta/${idConsulta}`, {status:'TERMINDADA'} );
          cargarTablas();
      }else{

      }
  }


    async function cargarTablas(){
        var getlocal = localStorage.getItem("id");
        console.log(getlocal);
        setId_usuario(getlocal);

        const citassN = await axios.get(`/consulta/medico/${getlocal}/NUEVA`);
        setCitasN(citassN.data);
        const citassA = await axios.get(`/consulta/medico/${getlocal}/AGENDADA`);
        console.log(citassA.data);
        setCitasA(citassA.data);
        const citassC = await axios.get(`/consulta/medico/${getlocal}/CANCELADA`);
        console.log(citassC.data);
        setCitasC(citassC.data);

        const citassT = await axios.get(`/consulta/medico/${getlocal}/TERMINDADA`);
        console.log(citassT.data);
        setCitasT(citassT.data);

    }


    async function mostrarHistorial(idPaciente){
      setModalH(!modalH);
      var hist = await axios.get(`/miHistorial/${idPaciente}`);
      setHistorial(hist.data);
    }


    async function agendar(idCita){
      setId_cita(idCita);
      setModalA(!modalA);
    }

    function printFecha(value, event){

      var str =value.getUTCDate()+'/' + (value.getUTCMonth()+1) + '/' + value.getFullYear();
      setFecha(str);
      console.log(str);
      console.log(value);
  }
    async function agendarcita(){
      var citaAgendada = {hora_consulta, fecha_consulta, status:'AGENDADA' }
      await axios.put(`/consulta/${id_cita}`, citaAgendada);
      cargarTablas();
      setModalA(!modalA);
  }

    useEffect(()=>{
      cargarTablas();
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
              Terminadas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active:activeTab === '4' })}
              onClick={() => {toggle('4'); }}
            >
              Canceladas
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
                        <th>Paciente</th>
                        <th>Problema</th>
                        <th>Historial</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {citasN.map((cita, index) =>
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span> {cita.status}
                                </td>
                                <td>{cita.historial.nombre_completo}</td>
                                <td>{cita.descripcion}</td>
                                <td>
                                    <Button  onClick={()=>mostrarHistorial(cita.id_usuario)}>Historial</Button> 
                                </td>
                                <td>
                                    <Button color="success" onClick={()=>agendar(cita.id)}>Agendar</Button> 
                                    <Button color="danger" onClick={()=>cancelar(cita.id)}>Cancelar</Button>
                                </td>
                            </tr>
                        )}
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
                        <th>Paciente</th>
                        <th>Problema</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Historial</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {citasA.map((cita, index) =>
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span> {cita.status}
                                </td>
                                <td>{cita.historial.nombre_completo}</td>
                                <td>{cita.descripcion}</td>
                                <td>{cita.fecha_consulta}</td>
                                <td>{cita.hora_consulta}</td>
                                <td>
                                    <Button  onClick={()=>mostrarHistorial(cita.id_usuario)}>Historial</Button> 
                                </td>
                                <td>
                                    <Button color="success" onClick={()=>terminar(cita.id)}>Terminar</Button>
                                    <Button color="danger" onClick={()=>cancelar(cita.id)}>Cancelar</Button>
                                </td>
                            </tr>
                        )}
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
                        <th>Paciente</th>
                        <th>Problema</th>
                        <th>Historial</th>
                        </tr>
                    </thead>
                    <tbody>
                    {citasT.map((cita, index) =>
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span> {cita.status}
                                </td>
                                <td>{cita.historial.nombre_completo}</td>
                                <td>{cita.descripcion}</td>
                                <td>
                                    <Button  onClick={()=>mostrarHistorial(cita.id_usuario)}>Historial</Button> 
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
            <Table hover>
            <thead>
                        <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Paciente</th>
                        <th>Problema</th>
                        <th>Historial</th>
                        </tr>
                    </thead>
                    <tbody>
                    {citasC.map((cita, index) =>
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span> {cita.status}
                                </td>
                                <td>{cita.historial.nombre_completo}</td>
                                <td>{cita.descripcion}</td>
                                <td>
                                    <Button  onClick={()=>mostrarHistorial(cita.id_usuario)}>Historial</Button> 
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Row>
          </TabPane>
        </TabContent>


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
        

        <Modal isOpen={modalA} toggle={()=> setModalA(!modalA)} >
          <ModalHeader toggle={()=> setModalA(!modalA)}> - Agendar - </ModalHeader>
          <ModalBody>
            <Container>

            <Row>Selecciona un dia </Row>
          
              <div style={{  'display': 'flex',
                  'justify-content': 'center' }}>
                      <Calendar onClickDay={printFecha} onChange={onChange} value={value} />
              </div>
              <FormGroup>
                <Label for="exampleSelect">Selecciona una Hora</Label>
                <Input value={hora_consulta} onChange={(event)=> setHora(event.target.value)} type="select" name="select" id="exampleSelect">
                  <option>00:00</option>
                  <option>00:30</option>
                  <option>01:00</option>
                  <option>01:30</option>
                  <option>02:00</option>
                  <option>02:30</option>
                  <option>03:00</option>
                  <option>03:30</option>
                  <option>04:00</option>
                  <option>04:30</option>
                  <option>05:00</option>
                  <option>05:30</option>
                  <option>06:00</option>
                  <option>06:30</option>
                  <option>07:00</option>
                  <option>07:30</option>
                  <option>08:00</option>
                  <option>08:30</option>
                  <option>09:00</option>
                  <option>09:30</option>
                  <option>10:00</option>
                  <option>10:30</option>
                  <option>11:00</option>
                  <option>11:30</option>
                  <option>12:00</option>
                  <option>12:30</option>
                  <option>13:00</option>
                  <option>13:30</option>
                  <option>14:00</option>
                  <option>14:30</option>
                  <option>15:00</option>
                  <option>15:30</option>
                  <option>16:00</option>
                  <option>16:30</option>
                  <option>17:00</option>
                  <option>17:30</option>
                  <option>18:00</option>
                  <option>18:30</option>
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                  <option>21:00</option>
                  <option>21:30</option>
                  <option>22:00</option>
                  <option>22:30</option>
                  <option>23:00</option>
                  <option>23:30</option>
                  
                </Input>
              </FormGroup>
            </Container>
            <p></p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={()=> setModalA(!modalA)}>cancelar</Button>
            <Button color="secondary" onClick={agendarcita}>Agendar</Button>
          </ModalFooter>
        </Modal>
        </div>
    )
}