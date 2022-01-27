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
    <>
    <Head>
        <title>Agora </title>
    </Head>
        <>
            <AgoraCommunity />
            <StartAThread />
        </>
        <br />
        <div>
            <ThreadContentCard />
        </div>
    </>
  )
}

export default Home
