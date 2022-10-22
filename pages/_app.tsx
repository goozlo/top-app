import {AppProps} from "next/app";
import '../styles/globals.css';
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>MyTop - наш лучший топ!</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

