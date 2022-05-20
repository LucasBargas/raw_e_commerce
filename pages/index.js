import React, {useContext} from 'react';
import Head from "next/head";
import HomeBg from "../components/HomeBg/HomeBg";
import HomeShowcase from "../components/HomeShowcase/HomeShowcase";
import { UserContext } from "../utils/context";
import ModalProduct from '../components/ModalProduct/ModalProduct';

const Home = () => {
  const { idRef } = useContext(UserContext);
  
  return (
    <>
      <Head>
        <title>Projetos Lucas Bargas - Raw</title>
        <meta name="description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Bargas - Raw" />
        <meta property="og:description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:url" content="https://raw-plum.vercel.app/" />
      </Head>

      <>
        <HomeBg />
        <HomeShowcase />
        {idRef !== undefined && <ModalProduct />}
      </>
    </>
  )
}

export default Home;
