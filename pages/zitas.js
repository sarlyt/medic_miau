import Head from "next/head";
import {
    Table,
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
            <title>Consultas</title>
            <meta
                name="description"
                content="Monster Free Next Js Dashboard Template"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Aqui estan tus consultas</h1>
        <Container>
            <Row>
                <Table hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Identificador</th>
                        <th>Médico</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                        </tr>
                        <tr>
                            
                        </tr>
                        <tr>
                            
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    </div>
);
}