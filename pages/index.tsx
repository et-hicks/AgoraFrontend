import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThreadContentCard from "../components/cards/threads/ThreadContentCard";
import Article from "../components/article/Article";
import {useState} from "react";
import dynamic from "next/dynamic";
import {useSelector} from "react-redux";
import {AppState} from "../app/store";
import Discussion from "../components/discussion/Discussion";

const RenderPDF = dynamic(import("../components/attachments/RenderPDF"), {ssr: false})

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

const ColumnOfThreads = () => {
    return (
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
    );
}

const HomePage = () => {
    const showThreads = useSelector((state: AppState) => state.expander.expand);

    return (
        <div style={{
            // border: "3px dotted darkgrey",
            display: "flex",
            flexDirection: "row"
        }}>
            <Head>
                <title> Agora </title>
            </Head>
            <div style={{
                // border: `${showThreads ? "3px solid black" : "3px solid green"}`,
                display: `${showThreads ? "flex" : "none"}`
            }}>
                <ColumnOfThreads />
            </div>
            <div style={{
                width: "54vw",
                // border: "3px dashed brown"
            }}>
                {/*<Article />*/}
                <Discussion /> {/*TODO: This should be revisited*/}
            </div>
            <div style={{
                border: `${showThreads ? "3px solid black" : "3px solid green"}`,
                display: `${!showThreads ? "flex" : "none"}`,
                width: "auto",
                height: "98vh",
                overflow: "scroll"
            }}>
                <RenderPDF />
            </div>
        </div>
    );
}

const ProfileHead = () => {
    return (
        <div style={{
            border: "3px solid black",
            width: "400px",
            height: "400px"
        }}>

        </div>
    );
}

const ProfileTabs = () => {
    return (
        <div style={{
            border: "3px solid black",
            width: "65vw",
            height: "20vh",
            position: "sticky",
            top: "0",
        }}>

        </div>
    );
}

const UserGeneratedContent = () => {
    return (
        <div style={{
            border: "3px solid lightgrey",
            width: "65vw",
            height: "10vh",
        }}>

        </div>
    )
}

const UserPage = () => {

    const [user, setUser] = useState("Ethan Hicks")

    return (
        <div style={{
            display: "grid",
            // gridTemplateColumns: "repeat(5, 16rem)",
            // gridTemplateRows: "repeat(5, 16rem)",
            gridAutoColumns: "200px",
            gridTemplateAreas: "\"a a .\"\n" +
                "            \"a a .\"\n" +
                "            \". b c\"",
            gap: "10px"
            // flexDirection: "column"
        }}>
            <Head>
                <title> { user } </title>
            </Head>
            <div className={styles.gridItem}>
                item 1
            </div>
            <div className={styles.gridItem}>
                item 2
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >

            <div className={styles.gridItem}>
                item 3
            </div >
            <div className={styles.gridItem}>
                item 3
            </div >



            <div className={styles.gridItem}>
                item 4
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            <div className={styles.gridItem}>
                item 5
            </div>
            {/*<div style={{*/}
            {/*    display: "flex"*/}
            {/*}}>*/}
            {/*    <ProfileHead />*/}
            {/*    <ProfileTabs />*/}
            {/*</div>*/}
            {/*<UserGeneratedContent />*/}
            {/*<UserGeneratedContent />*/}
            {/*<UserGeneratedContent />*/}
            {/*<UserGeneratedContent />*/}
            {/*<UserGeneratedContent />*/}
            {/*<UserGeneratedContent />*/}
            {/*<UserGeneratedContent />*/}

            {/*<UserGeneratedContent />*/}
            {/*<UserGeneratedContent />*/}
            {/*<UserGeneratedContent />*/}
            {/*<UserGeneratedContent />*/}

        </div>
    );
}

const Home: NextPage = () => {



    return (
        <div>
            {/*<HomePage />*/}
            <UserPage />
        </div>
    )
}

export default Home
