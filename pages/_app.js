import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import {useEffect} from 'react'
import Login from '../pages/login'

function MyApp({ Component, pageProps }) {



  useEffect(() => {
   console.log("Entro en principal");
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
      <Login></Login>
    </>
  );
}

//      <FullLayout>
//        <Component {...pageProps} />
//      </FullLayout>
export default MyApp;
