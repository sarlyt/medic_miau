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
        setD_alergias('');
        setAlergias(!alergias);
    }
    const [alcohol, setAlcohol] = useState(true);
    //Funcion pro
    function toggle_alcohol(){
        setD_alcohol('');
        setAlcohol(!alcohol);
    }
    const [cigarros, setCigarros] = useState(true);
    //Funcion pro
    function toggle_cigarros(){
        setD_tabaquismo('');
        setCigarros(!cigarros);
    }
    const [drugs, setDrugs] = useState(true);
    //Funcion pro
    function toggle_drugs(){
        setD_drogas('');
        setDrugs(!drugs);
    }
    const [medicinas, setMedicinas] = useState(true);
    //Funcion pro
    function toggle_medicinas(){
        setD_medicamentos('');
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
    const [nuevoUsuario, setNuevoUsuario]=useState(true);
    const [id_consulta, setId_consulta]= useState(0);

    async function getDatos_Usuarios(){ 
        var getlocal = await localStorage.getItem("id");
        console.log(getlocal);
        setId_usuario(getlocal);
        try {
            console.log('on get adtos');
            const historial = await axios.get(`/miHistorial/${getlocal}`);
            console.log(historial.data);
            if(historial.data != null){
                setNombre_completo(historial.data.nombre_completo);
                setEdad(historial.data.edad);
                setSexo(historial.data.sexo);
                setAltura(historial.data.altura);
                setPeso(historial.data.peso);
                setTipo_sangre(historial.data.tipo_sangre);
                setD_alergias(historial.data.d_alergias);
                setD_alcohol(historial.data.d_alcohol);
                setD_tabaquismo(historial.data.d_tabaquismo);
                setD_drogas(historial.data.d_drogas);
                setD_medicamentos(historial.data.d_medicamentos);
                setComorbis(historial.data.comorbis);
                setNuevoUsuario(false);
                if(historial.data.d_alergias!= null && historial.data.d_alergias != ''){
                    setAlergias(false)

                }
                if(historial.data.d_alcohol!= null && historial.data.d_alcohol != ''){
                    setAlcohol(false)

                }
                if(historial.data.d_tabaquismo!= null && historial.data.d_tabaquismo != ''){
                    setCigarros(false)

                }
                if(historial.data.d_drogas!= null && historial.data.d_drogas != ''){
                    setDrugs(false)

                }
                if(historial.data.d_medicamentos!= null && historial.data.d_medicamentos != ''){
                    setMedicinas(false)

                }
                
                
                
                
                
            }
            
        } catch (error) {
            console.log(error);
            setNuevoUsuario(true);
            
        }
        
        
    }
    
    async function nuevoActualiza(){
        var nuevoHistory={id_usuario, nombre_completo, edad, sexo, altura, peso, tipo_sangre, d_alergias, d_alcohol, d_tabaquismo, d_drogas, d_medicamentos, comorbis}
        if(nuevoUsuario){
            const historial = await axios.post("/miHistorial/", nuevoHistory);
            console.log(historial);
            setNuevoUsuario(false);
            
        }else{
            const historial = await axios.put(`/miHistorial/${id_usuario}`, nuevoHistory);
            
        }
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
        <h1>Hola, este es tu historial medico</h1>
        <Container>
            <Row>
                <Form>
                    <FormGroup check inline >
                            <Label check>
                                <Input checked={!alergias} onChange={toggle_alergias} type="checkbox" />{' '}
                                Alergias
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input checked={!alcohol} onChange={toggle_alcohol} type="checkbox" />{' '}
                                Consumo de Alcohol
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input checked={!cigarros} onChange={toggle_cigarros} type="checkbox" />{' '}
                                Tabaquismo
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input checked={!drugs} onChange={toggle_drugs}type="checkbox" />{' '}
                                Drogas ilicitas
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input checked={!medicinas} onChange={toggle_medicinas} type="checkbox" />{' '}
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
                            onChange={(event)=> setNombre_completo(event.target.value)}
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
                <Button color="success" size="lg" onClick={nuevoActualiza} block>Enviar</Button>
                </Col>
                <Col xs="12" md="6" hidden>
                <Button color="danger" size="lg" block>Cancelar</Button>
                </Col>
            </Row>
        </Container>
    </div>
);
}
