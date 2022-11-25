import Head from "next/head";
import { useEffect, useState } from "react";
import axios from '../../src/config/AxiosConfig';
import {
    Card,
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
const [nombre_completo, setNombre_completo] = useState(""); 
const [num_tel, setNum_tel] = useState(0); 
const [curp, setCurp] = useState(""); 
const [especialidad, setEspecialidad] = useState(""); 
const [cedula, setCedula] = useState(0); 
const [dias_atencion, setDias_atencion] = useState(""); 
const [horarios, setHorarios] = useState(""); 
const [new_user, setNew_user] = useState(true);
const [id_usuario, setId_usuario] = useState("");

const [userName, setUserName] = useState("");
const [correo, setCorreo] = useState("");
const [password, setPassword] = useState("");


    async function getPerfilDoc (){
        var getlocal = localStorage.getItem("id")
        console.log(getlocal);
        setId_usuario(getlocal);
        const perfilDoc = await axios.get(`/perfil_Doc/${getlocal}`);
        console.log(perfilDoc.data);
        if (perfilDoc.data != null){
            setNombre_completo(perfilDoc.data.nombre_completo);
            setNum_tel(perfilDoc.data.num_tel);
            setCurp(perfilDoc.data.curp);
            setEspecialidad(perfilDoc.data.especialidad);
            setCedula(perfilDoc.data.cedula);
            setDias_atencion(perfilDoc.data.dias_atencion)
            setHorarios(perfilDoc.data.horarios);
            setNew_user(false);
        }
        const usuario = await axios.get(`/usuario/${getlocal}`);
        setUserName(usuario.data.userName);
        setCorreo(usuario.data.correo);
        setPassword(usuario.data.password);

    }
    async function registrar_actualizar(){
        if(new_user == true){
            setNew_user(false);
            await axios.post("/perfil_Doc" , {id_usuario, nombre_completo, num_tel,curp,especialidad,cedula,dias_atencion,horarios,horarios});
        }else{
            console.log("Se tiene que actualizar");
            await axios.put(`/perfil_Doc/${id_usuario}` , {id_usuario, nombre_completo, num_tel,curp,especialidad,cedula,dias_atencion,horarios,horarios});
        }
        await axios.put(`/usuario/${id_usuario}`, {userName, correo, password});
    }
    useEffect(()=>{
        getPerfilDoc();
    }, []);

    return (
        <div>
        <Head>
            <title>Perfil</title>
            <meta
            name="description"
            content="Monster Free Next Js Dashboard Template"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hola Dr. este es tu perfil</h1>
        <Container>
            <Row className="mt-3">
            <Col md="6" xs="12">
                <Form>
                <FormGroup>
                    <h1>Datos Personales</h1>
                    <Label for="exampleUser">Nombre Completo</Label>
                    <Input
                    value={nombre_completo} 
                    onChange={(event)=> setNombre_completo(event.target.value)}
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">CURP</Label>
                    <Input
                    value={curp}
                    onChange={(event)=> setCurp(event.target.value)}
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">Número de Teléfono</Label>
                    <Input type= "number"
                    value={num_tel}
                    onChange={(event)=> setNum_tel(event.target.value)}
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">Usuario</Label>
                    <Input
                    value={userName}
                    onChange={(event)=> setUserName(event.target.value)}
                    required
                    id="exampleUser"
                    name="usuario"
                    placeholder="Usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Correo</Label>
                    <Input
                    value={correo}
                    onChange={(event)=> setCorreo(event.target.value)}
                    id="exampleEmail"
                    name="email"
                    placeholder="Correo"
                    type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Contraseña</Label>
                    <Input
                    value={password}
                    onChange={(event)=> setPassword(event.target.value)}
                    id="examplePassword"
                    name="password"
                    placeholder="Tu Contraseña"
                    type="password"
                    />
                </FormGroup>
                
                </Form>
            </Col>
            <Col xs="12" md="6">
                <h1>Datos Profesionales</h1>
                <FormGroup>
                    <Label for="exampleUser">Especialidad</Label>
                    <Input
                    value={especialidad}
                    onChange={(event)=> setEspecialidad(event.target.value)}
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">Cédula Profesional</Label>
                    <Input type= "number"
                    value={cedula}
                    onChange={(event)=> setCedula(event.target.value)}
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">Dias de Atención</Label>
                    <Input
                    value={dias_atencion}
                    onChange={(event)=> setDias_atencion(event.target.value)}
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">Horarios</Label>
                    <Input
                    value={horarios}
                    onChange={(event)=> setHorarios(event.target.value)}
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <Button onClick= {registrar_actualizar} >Guardar</Button>
            </Col>
            </Row>
        </Container>
        </div>
    );
}
