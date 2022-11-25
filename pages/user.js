import Head from "next/head";
import { useEffect, useState } from "react";
import axios from '../src/config/AxiosConfig';
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
  const [userName, setUserName] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [id_usuario, setId_usuario] = useState("");

  async function getUsuarios(){
    var getlocal = localStorage.getItem("id")
    console.log(getlocal);
    setId_usuario(getlocal);

    const usuario = await axios.get(`/usuario/${getlocal}`);
    setUserName(usuario.data.userName);
    setCorreo(usuario.data.correo);
    setPassword(usuario.data.password);
  }
  async function actualizar_users(){
    await axios.put(`/usuario/${id_usuario}`, {userName, correo, password});
  }

  useEffect(()=>{
    getUsuarios();
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
      <h1>Bienvenido a tu perfil</h1>
      <Container>
        <Row className="mt-3">
          <Col md="6" xs="12">
            <Form>
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
              <Button onClick={actualizar_users}>Enviar</Button>
            </Form>
          </Col>
          <Col xs="6">
          </Col>
        </Row>
      </Container>
    </div>
  );
}