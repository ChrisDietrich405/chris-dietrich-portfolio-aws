import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chris Dietrich | Full Stack Developer</title>
        <meta
          name="description"
          content="Hi, I'm Chris Dietrich, and I love web development! Explore my portfolio showcasing innovative web projects and skills in front-end and back-end development."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.chrisdietrichdev.com/" />
        <meta property="og:title" content="Chris Dietrich" />
        <meta
          property="og:description"
          content="Hi, I'm Chris Dietrich, and I love web development! Explore my portfolio showcasing innovative web projects and skills in front-end and back-end development."
        />
        <meta
          property="og:image"
          content="https://www.chrisdietrichdev.com/images/chris.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
