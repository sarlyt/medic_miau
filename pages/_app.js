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
            <FullLayout>
              <Component {...pageProps} />
            </FullLayout>
    </>
  );
}
//<Login></Login>

export default MyApp;
