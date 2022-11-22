import Head from "next/head";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
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
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Head>
                <title>Agenda</title>
                <meta
                name="description"
                content="Monster Free Next Js Dashboard Template"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="react-calendar">
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    )
}