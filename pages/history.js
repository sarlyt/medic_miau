import Head from "next/head";
import {
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
} from 'reactstrap';

export default function Home() {
    return (
    <div>
        <Head>
            <title>Historial</title>
            <meta
                name="description"
                content="Monster Free Next Js Dashboard Template"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hola weon este es tu historial medico</h1>
        <Container>
            <Row>
                <Form>
                    <FormGroup check inline >
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Alergias
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Consumo de Alcohol
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Tabaquismo
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Drogas ilicitas
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Medicamentos
                            </Label>
                        </FormGroup>
                </Form>
            </Row>
            <Row>
                <Col xs = "12" md = "8">
                    <FormGroup inline>
                        <Label for="exampleUser">Nombre Completo</Label>
                        <Input
                            required 
                            id="exampleUser"
                            name="usuario"
                            //placeholder="Nombre"
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="4">
                    <FormGroup inline>
                        <Label for="exampleUser">Edad</Label>
                        <Input type="number"
                            required 
                            id="exampleUser"
                            name="usuario"
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="3">
                    <FormGroup inline>
                        <Label for="exampleUser">Setso</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option disabled>Elige opcion</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs="12" md="3">
                    <FormGroup>
                        <Label for="exampleUser">Altura</Label>
                        <Input type="number"
                            required 
                            id="exampleUser"
                            name="usuario"
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="3">
                    <FormGroup>
                        <Label for="exampleUser">Peso</Label>
                        <Input type="number"
                            required 
                            id="exampleUser"
                            name="usuario"
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="3">
                    <FormGroup>
                        <Label for="exampleUser">Tipo de Sangre</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option disabled>Elige opcion</option>
                            <option>A positivo (A +)</option>
                            <option>A negativo (A-)</option>
                            <option>B positivo (B +)</option>
                            <option>B negativo (B-)</option>
                            <option>AB positivo (AB+)</option>
                            <option>AB negativo (AB-)</option>
                            <option>O positivo (O+)</option>
                            <option>O negativo (O-)</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>


            <Row>
                <Col xs="12" md="4">
                    <FormGroup inline>
                        <Label for="exampleUser">Nombre Completo</Label>
                        <Input
                            required 
                            id="exampleUser"
                            name="usuario"
                            //placeholder="Nombre"
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="4">

                </Col>
                <Col xs="12" md="4">

                </Col>
                <Col xs="12" md="4">

                </Col>
                <Col xs="12" md="4">

                </Col>
            </Row>

            <Row>

            </Row>
        </Container>
    </div>
);
}
