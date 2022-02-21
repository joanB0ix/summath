import Home from "components/Home/Home";
import { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Summath</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
