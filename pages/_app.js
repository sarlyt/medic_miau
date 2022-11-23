import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import {useEffect, useState} from 'react'
import Login from '../pages/login'

function MyApp({ Component, pageProps }) {
  const [showLogin, setShowLogin]= useState(true);


  useEffect(() => {
    var isLogged = localStorage.getItem("isLogged");
    if(isLogged != null ){
      console.log('no es nulo');
      if(isLogged== 'true'){
        setShowLogin(false);
      }
    }

    console.log("Entro en principal", isLogged);
}, []);


  return (
    <>
      <Head>
        <title>Quiniela</title>
        <meta
          name="description"
          content="Monster Free Next Js Dashboard Template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showLogin?
            <Login></Login>
      :
            <FullLayout>
              <Component {...pageProps} />
            </FullLayout>
      }
    </>
  );
}

export default MyApp;
