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
    Container,
} from "reactstrap";

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
        <h1>Hola Dr. este es tu perfil</h1>
        <Container>
            <Row className="mt-3">
            <Col md="6" xs="12">
                <Form>
                <FormGroup>
                    <h1>Datos Personales</h1>
                    <Label for="exampleUser">Nombre Completo</Label>
                    <Input
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">CURP</Label>
                    <Input
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">Número de Teléfono</Label>
                    <Input type= "number"
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
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
                <Button>Guardar</Button>
                </Form>
            </Col>
            <Col xs="12" md="6">
                <h1>Datos Profesionales</h1>
                <FormGroup>
                    <Label for="exampleUser">Especialidad</Label>
                    <Input
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">Cédula Profesional</Label>
                    <Input type= "number"
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">Dias de Atención</Label>
                    <Input
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUser">Horarios</Label>
                    <Input
                    required
                    id="exampleUser"
                    name="usuario"
                    />
                </FormGroup>
            </Col>
            </Row>
        </Container>
        </div>
    );
}
