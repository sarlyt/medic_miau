import Head from "next/head";
import fondo from '../src/assets/images/login/10130.jpg'
import { Row, Col, Form, FormGroup, Input,  Label, Button, Container, Alert, CardTitle, CardText } from "reactstrap";
import { useEffect, useState } from "react";
import axios from '../src/config/AxiosConfig';




export default function Login() {
    const [registro, setRegistro]=useState(false);

    const [userName, setUserName]=useState('');
    const [password, setPassword]=useState('');
    const [password2, setPassword2]=useState('');
    const [tipo, setTipo]=useState(false);
    const [registrado, setRegistrado]=useState(true);
    const [logged, setLogged]=useState(true);




const styleLogin={
    "AlignText":"center",

}
const styleForm={
    'padding':'40% 15%'
}

const background ={


}
const styleRow={
    'margin':'0',
    'width':'100vw',
    'height':'100vh',
    'padding': '0',
    'backgroundColor': 'white'
}

async function toggle(){
    setRegistro(!registro);
    setRegistrado(true);
}
async function registrar(event){
    event.preventDefault();
    var tipoT='USUARIO';
    
    if(tipo){
        tipoT='DOCTOR'
    }

    
    var registro = {userName,
        password,
        password2,
        tipo: tipoT
    }
    console.log('registro', registro);
    
    
    var respuesta = await axios.post('/usuario/registrar', registro);
    if(respuesta.status==200){
        setRegistrado(false);
        
        setUserName('');
        setPassword('');
        setPassword2('');
        
    }
    console.log(respuesta);
    
    
}
async function login(event){
    event.preventDefault();
    try {
        var respuesta = await axios.get(`/usuario/login/${userName}/${password}`);
        console.log(respuesta.data);

        
        localStorage.setItem("isLogged", JSON.stringify(true));
        localStorage.setItem("id", JSON.stringify(respuesta.data.id));
        localStorage.setItem("userName", JSON.stringify(respuesta.data.userName));
        localStorage.setItem("tipo", JSON.stringify(respuesta.data.tipo));
        
        location.reload();
        
    } catch (error) {
        localStorage.setItem("isLogged", JSON.stringify(false));
        localStorage.setItem("id", JSON.stringify(null));
        localStorage.setItem("userName", JSON.stringify(null));
        localStorage.setItem("tipo", JSON.stringify(null));
        setLogged(false);
        
    }
    
}

return (
    <div>
        <Head>
            <title>Login</title>
            <meta
                name="description"
                content="Monster Free Next Js Dashboard Template"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Row style={styleRow}>
            <Col sm='5' md='6' style={background}>
                <img style={{'width': '100%', 'position':'relative', 'top': '15%'}} src={fondo.src} alt="*" />


            </Col>
            <Col sm='7' md='6'  style={styleLogin}>
                <Container>

                    <Form style={styleForm}>
                        {!registro?<>
                            <h1>Inicio de Sesion</h1>
                            <FormGroup>
                                <Label for="idUserName">Nombre de usuario</Label>
                                <Input name="userName" id="idUserName"  value={userName} onChange={(event)=> setUserName(event.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idPassword">Contraseña</Label>
                                <Input type="password" name="password" id="idPassword" value={password} onChange={(event)=> setPassword(event.target.value)} required />
                            </FormGroup>
                            <Alert color="danger" hidden={logged}>
                                Usuario o contraseña incorrecto
                            </Alert>
                            <Button onClick={login}>Iniciar Sesion</Button>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p onClick={toggle} style={{"cursor": "pointer", 'color':'blue'}} > Registrase</p>
                        </>
                    :
                    <>
                            <h1>Registro</h1>
                            <FormGroup>
                                <Label for="idUserName">Nombre de usuario</Label>
                                <Input name="userName" id="idUserName" value={userName} onChange={(event)=> setUserName(event.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idPassword">Contraseña</Label>
                                <Input type="password" name="password" value={password} onChange={(event)=> setPassword(event.target.value)}  id="idPassword" required />
                            </FormGroup>
                           
                            <FormGroup>
                                <Label for="idPasswordConfirm">confirma contraseña</Label>
                                <Input type="password" name="passwordConfirm" id="idPasswordConfirm" value={password2} onChange={(event)=> setPassword2(event.target.value)} required />
                            </FormGroup>
                            <FormGroup check >
                            <Label check>
                                <Input onChange={(event)=> setTipo(!tipo)} type="checkbox" />
                                Registrarme Como Medico
                            </Label>

                            <Alert color="success" hidden={registrado}>
                                Usuario registrado con exito por favor inicie sesion
                            </Alert>
                            
                        </FormGroup>

                            <Button  onClick={registrar} >Registrar</Button>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p onClick={toggle} style={{"cursor": "pointer", 'color':'blue'}} > Iniciar Sesion</p>
                    </>

                    }
                    </Form>

                </Container>
            </Col>
        </Row>




    </div>
);
}