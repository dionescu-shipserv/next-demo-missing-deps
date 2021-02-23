import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import { Ui } from '@demo-missing-deps/ui';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-demo!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to next-demo!</h1>
        </header>
        <main>
          <Ui />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
