import Head from "next/head";
import fondo from '../src/assets/images/login/10130.jpg'
import { Row, Col, Form, FormGroup, Input,  Label, Button, Container, Card, CardTitle, CardText } from "reactstrap";
import { useEffect, useState } from "react";




export default function Login() {
    const [registro, setRegistro]=useState(false);



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
                                <Label for="idEmail">Nombre de usuario</Label>
                                <Input name="email" id="idEmail"  required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idPassword">Contraseña</Label>
                                <Input type="password" name="password" id="idPassword" required />
                            </FormGroup>
                            <Button>Iniciar Sesion</Button>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p onClick={toggle} style={{"cursor": "pointer", 'color':'blue'}} > Registrase</p>
                        </>
                    :
                    <>
                            <h1>Registro</h1>
                            <FormGroup>
                                <Label for="idEmail">Nombre de usuario</Label>
                                <Input name="email" id="idEmail"  required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idPassword">Contraseña</Label>
                                <Input type="password" name="password" id="idPassword" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="idPasswordConfirm">confirma contraseña</Label>
                                <Input type="password" name="passwordConfirm" id="idPasswordConfirm" required />
                            </FormGroup>
                            <Button>Registrar</Button>
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