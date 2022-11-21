import Head from "next/head";
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
} from 'reactstrap';

export default function Home() {
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
      <h1>
        Hola weon este es tu perfil
      </h1>
      <Row className="mt-3">
              <Col md= "6" xs="12">
                <div className="bg-light p-2 border">.col-6</div>
                <Form>
                  <FormGroup>
                    <Label for="exampleUser">Usuario</Label>
                    <Input
                      required 
                      id="exampleUser"
                      name="usuario"
                      placeholder="Usuario"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Correo</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Correo"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Contraseña</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Tu Contraseña"
                      type="password"
                    />
                  </FormGroup>
                  <Button>Enviar</Button>
                </Form>
              </Col>
              <Col xs="6">
                <div className="bg-light p-2 border">.col-6</div>
              </Col>
            </Row>
    </div>
  );
}