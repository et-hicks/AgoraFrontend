import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThreadContentCard from "../components/cards/ThreadContentCard";
import MainContentCard from "../components/MainContentCard";


const AgoraCommunity = () => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }}>
        <div style={{
            margin: "auto",
            fontSize: "4vh",
            fontWeight: "bold",
        }}>
            Catalog of Content
        </div>
    </div>
);


const StartAThread = () => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }}>
       <div style={{
           margin: "auto",
           fontSize: "1.5vh",
           border: "3px solid black",
           paddingLeft: "0.75vw",
           paddingRight: "0.75vw",
           paddingTop: "0.25vh",
           paddingBottom: "0.25vh",
           borderRadius: "10px",
           backgroundColor: "#4B12F5",
           color: "#FFFFFF",
       }}>
           Start a Thread
       </div>
    </div>
);

const Home: NextPage = () => {
  return (
    <div style={{
        // border: "3px dotted darkgrey",
        display: "flex",
        flexDirection: "row"
    }}>
    <Head>
        <title>Agora </title>
    </Head>
        <div >
            <div style={{
                // border: "3px dotted darkblue",
                display: "flex",
                flexDirection: "row",
                height: "8vh",
                width: "30vw",
                margin: "auto",
                justifyContent: "space-evenly"
            }}>
                <AgoraCommunity />
                <StartAThread />
            </div>
            <div className={styles.threadArray}>
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
                <ThreadContentCard />
            </div>
        </div>
        <MainContentCard />
    </div>
  )
}

export default Home
