import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
