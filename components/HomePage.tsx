import {useSelector} from "react-redux";
import {AppState} from "../app/store";
import Head from "next/head";
import Discussion from "./discussion/Discussion";
import Article from "./article/Article";
import styles from "../styles/Home.module.css";
import ThreadContentCard from "./cards/threads/ThreadContentCard";
import dynamic from "next/dynamic";
import GenericButton from "./buttons/GenericButton";
import ProfileTabs from "./profile/tabs/ProfileTabs";
import StartAThread from "./buttons/StartAThread";

const RenderPDF = dynamic(import("../components/attachments/RenderPDF"), {ssr: false})

const AgoraCommunity = () => {
    return (
        <div >
            <div style={{
                margin: "auto",
                fontSize: "3vh",
                fontWeight: "bold",
            }}>
                Home Page: Popular and Trending Posts and Discussions
            </div>
        </div>
    );
}

const ThreadColumnHeader = () => {
    return (
        <div style={{
            border: "3px dotted darkblue",
            display: "flex",
            flexDirection: "column",
            height: "fit-content",
            // width: "25vw",
            // width: "30vw",
            // width: "45vw",
            margin: "auto 1vw 1vw 1vw",
            // justifyContent: "space-evenly"
        }}>
            <AgoraCommunity />
            <GenericButton displayText={"Start a Thread"} />
        </div>
    );
}

const ColumnOfThreads = () => {
    return (
        <div >
            <ThreadColumnHeader />
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


export default function HomePage() {
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
                display: `${showThreads ? "flex" : "none"}`,
                // display: "none",
                overflow: "scroll",
                // border: "3px solid green",
                height: "92vh",
                // width: "40vw"
            }}>
                <ColumnOfThreads />
            </div>
            <div style={{
                // width: "min-content",
                width: "inherit",
                // width: "60vw"
                // border: "3px dashed brown"
            }}>
                {/*<Article />*/}
                <Discussion /> {/*TODO: This should be revisited*/}
            </div>
            {/*<div style={{*/}
            {/*    border: `${showThreads ? "3px solid black" : "3px solid green"}`,*/}
            {/*    display: `${!showThreads ? "flex" : "none"}`,*/}
            {/*    width: "auto",*/}
            {/*    height: "98vh",*/}
            {/*    overflow: "scroll"*/}
            {/*}}>*/}
            {/*    <RenderPDF />*/}
            {/*</div>*/}
        </div>
    );
}
