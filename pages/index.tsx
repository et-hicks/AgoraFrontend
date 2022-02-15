import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StartAThread from "../components/buttons/StartAThread";
import ThreadContentCard from "../components/cards/ThreadContentCard";

// const SidebarText = ({ tsx }: any) => (
//     <div className={styles.sidebarText}>
//         { tsx }
//     </div>
// );

const AgoraCommunity = () => (
  <div className={styles.welcomeText}>
    Agora Community Catalog of Content
  </div>
);

const Home: NextPage = () => {
  return (
    <div>
    <Head>
        <title>Agora </title>
    </Head>
        <div style={{display: "flex", alignItems: "center"}} >
            <AgoraCommunity />
            <StartAThread />
        </div>
        <br />
        {/*<div style={display}>*/}
            <ThreadContentCard />
        {/*</div>*/}
    </div>
  )
}

export default Home
