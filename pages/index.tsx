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
import GenericButton from "../components/buttons/GenericButton";

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

const ProfilePicture = () => {
    return (
        <div style={{
            border: "3px solid black",
            width: "inherit",
            height: "350px",
            borderRadius: "10px"
        }}>

        </div>
    );
}

const UserBio = () => {

    // TODO: When the bio is too long have it pop out into a more approachable size
    // TODO: turn this into a pop up
    return (
        <div style={{
            width: "inherit",
            height: "fit-content",
            padding: "1.25vh 1.5vw",
            fontSize: ".8em"
        }}>
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
        </div>
    );
}

const ProfileColumn = () => {
    return (
        <div style={{
            // TODO: set a min and a max height here
            border: "3px solid black",
            width: "20vw",
            height: "100vh",
            overflow: "scroll"
        }}>
            <ProfilePicture />
            <UserBio />
            <UsersMostCommonTopics />
        </div>
    );
}

const UsersMostCommonTopics = () => {
    const user = "Ethan Hicks";
    return (
        <div>
            <div>
                { user } most commonly posts in
            </div>
            <GenericButton displayText={"Machine Learning"} />
            <GenericButton displayText={"Political Science"} />
            <GenericButton displayText={"Economics"} />
            <br />
            <GenericButton displayText={"Explore all topics"} />
            <GenericButton displayText={"Explore all hashtags"} />
        </div>
    );
}

const ContentColumn = () => {
    return (
        <div style={{
            border: "3px solid black",
            width: "65vw",
            height: "100vh"
        }}>



        </div>
    );
}

const ProfileTabs = () => {
    return (
        <div style={{
            border: "3px solid black",
            width: "85vw",
            // height: "10vh",
            position: "sticky",
            top: "0",
            margin: "auto"
        }}>
            <div className={styles.tab}>
                <button className={styles.tablinks}> Profile </button>
                <button className={styles.tablinks}> Topics & Hashtags</button>
                <button className={styles.tablinks} > Filter </button>
                <button className={styles.tablinks} > Search </button>
            </div>
            <div>
                Added Filters and other changes search term
            </div>
            <div>
                This can be hidden
            </div>
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
            display: "flex",
            // gridTemplateColumns: "repeat(5, 16rem)",
            // gridTemplateRows: "repeat(5, 16rem)",
            gap: "10px",
            flexDirection: "column"
        }}>
            <Head>
                <title> { user } </title>
            </Head>
            <ProfileTabs />

            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <ContentColumn />
                <ProfileColumn />
            </div>

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
