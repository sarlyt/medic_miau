import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "../src/config/AxiosConfig";
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
    const [alergias, setAlergias] = useState(true);
    //Funcion pro
    function toggle_alergias(){
        setAlergias(!alergias);
    }
    const [alcohol, setAlcohol] = useState(true);
    //Funcion pro
    function toggle_alcohol(){
        setAlcohol(!alcohol);
    }
    const [cigarros, setCigarros] = useState(true);
    //Funcion pro
    function toggle_cigarros(){
        setCigarros(!cigarros);
    }
    const [drugs, setDrugs] = useState(true);
    //Funcion pro
    function toggle_drugs(){
        setDrugs(!drugs);
    }
    const [medicinas, setMedicinas] = useState(true);
    //Funcion pro
    function toggle_medicinas(){
        setMedicinas(!medicinas);
    }
    const [id_usuario, setId_usuario] = useState("");
    const [nombre_completo, setNombre_completo] = useState("");
    const [edad, setEdad] = useState(0);
    const [sexo, setSexo] = useState("");
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [tipo_sangre, setTipo_sangre] = useState("");
    const [d_alergias, setD_alergias] = useState("");
    const [d_alcohol, setD_alcohol] = useState("");
    const [d_tabaquismo, setD_tabaquismo] = useState("");
    const [d_drogas, setD_drogas] = useState("");
    const [d_medicamentos, setD_medicamentos] = useState("");
    const [comorbis, setComorbis] = useState("");

    async function getDatos_Usuarios(){
        var getlocal = localStorage.getItem("id")
        console.log(getlocal);
        setId_usuario(getlocal);
        const historial = await axios.get(`/miHistorial/${id_usuario}`);
    }
    useEffect(()=>{
        getDatos_Usuarios();
    }, []);
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
                                <Input onChange={toggle_alergias} type="checkbox" />{' '}
                                Alergias
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input onChange={toggle_alcohol} type="checkbox" />{' '}
                                Consumo de Alcohol
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input onChange={toggle_cigarros} type="checkbox" />{' '}
                                Tabaquismo
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input onChange={toggle_drugs}type="checkbox" />{' '}
                                Drogas ilicitas
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input onChange={toggle_medicinas} type="checkbox" />{' '}
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
                        value={nombre_completo}
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
                        <Input value={edad} onChange={(event)=> setEdad(event.target.value)} type="number"
                            required 
                            id="exampleUser"
                            name="usuario"
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="3">
                    <FormGroup inline>
                        <Label for="exampleUser">Sexo</Label>
                        <Input value={sexo} onChange={(event)=> setSexo(event.target.value)} type="select" name="select" id="exampleSelect">
                            <option disabled>Elige opcion</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs="12" md="3">
                    <FormGroup>
                        <Label for="exampleUser">Altura</Label>
                        <Input value={altura} onChange={(event)=> setAltura(event.target.value)} type="number"
                            required 
                            id="exampleUser"
                            name="usuario"
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="3">
                    <FormGroup>
                        <Label for="exampleUser">Peso</Label>
                        <Input value={peso} onChange={(event)=> setPeso(event.target.value)} type="number"
                            required 
                            id="exampleUser"
                            name="usuario"
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="3">
                    <FormGroup>
                        <Label for="exampleUser">Tipo de Sangre</Label>
                        <Input value={tipo_sangre}  onChange={(event)=> setTipo_sangre(event.target.value)} type="select" name="select" id="exampleSelect">
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
                <Col hidden={alergias} xs="12" md="4">
                    <FormGroup inline>
                        <Label for="alergias">Indica a que eres Alergico</Label>
                        <Input
                        value={d_alergias} onChange={(event)=> setD_alergias(event.target.value)}
                            required 
                            id="alergias"
                            name="alergias_name"
                        />
                    </FormGroup>
                </Col>
                <Col hidden={alcohol} xs="12" md="4">
                    <FormGroup inline>
                        <Label for="alcohol">¿Cada cuanto tomas Alcohol?</Label>
                        <Input
                        value={d_alcohol} onChange={(event)=> setD_alcohol(event.target.value)}
                            required 
                            id="alcohol"
                            name="alcohol_name"
                        />
                    </FormGroup>
                </Col>
                <Col hidden={cigarros} xs="12" md="4">
                    <FormGroup inline>
                        <Label for="cigarros">Cigarros por día</Label>
                        <Input
                        value={d_tabaquismo} onChange={(event)=> setD_tabaquismo(event.target.value)}
                            required 
                            id="cigarros"
                            name="dejazion_name"
                        />
                    </FormGroup>
                </Col>
                <Col hidden={drugs} xs="12" md="4">
                    <FormGroup inline>
                        <Label for="drugs">Droga, cantidad y frecuencia</Label>
                        <Input
                        value={d_drogas} onChange={(event)=> setD_drogas(event.target.value)}
                            required 
                            id="drugs"
                            name="drugs_name"
                        />
                    </FormGroup>
                </Col>
                <Col hidden={medicinas} xs="12" md="4">
                    <FormGroup inline>
                        <Label for="medicinas">Medicamentos y frecuencia</Label>
                        <Input
                        value={d_medicamentos} onChange={(event)=> setD_medicamentos(event.target.value)}
                            required 
                            id="medicinas"
                            name="medicinas_name"
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
            <FormGroup>
                <Label for="exampleText">Comorbilidades</Label>
                <Input value={comorbis} onChange={(event)=> setComorbis(event.target.value)} type="textarea" name="text" id="exampleText" />
            </FormGroup>
            </Row>
            <Row>
                <Col xs="12" md="6">
                <Button color="success" size="lg" block>Enviar</Button>
                </Col>
                <Col xs="12" md="6">
                <Button color="danger" size="lg" block>Cancelar</Button>
                </Col>
            </Row>
        </Container>
    </div>
);
}
