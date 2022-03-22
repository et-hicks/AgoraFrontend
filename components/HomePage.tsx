import {useSelector} from "react-redux";
import {AppState} from "../app/store";
import Head from "next/head";
import Discussion from "./discussion/Discussion";
import Article from "./article/Article";
import styles from "../styles/Home.module.css";
import ThreadContentCard from "./cards/threads/ThreadContentCard";
import dynamic from "next/dynamic";
import GenericButton from "./buttons/GenericButton";

const RenderPDF = dynamic(import("../components/attachments/RenderPDF"), {ssr: false})

const AgoraCommunity = () => {
    return (
        <div >
            <div style={{
                margin: "auto",
                fontSize: "4vh",
                fontWeight: "bold",
            }}>
                Catalog of Content
            </div>
        </div>
    );
}



const ColumnOfThreads = () => {
    return (
        <div >
            <div style={{
                // border: "3px dotted darkblue",
                display: "flex",
                flexDirection: "column",
                height: "fit-content",
                // width: "30vw",
                // width: "45vw",
                margin: "auto 1vw 1vw 1vw",
                // justifyContent: "space-evenly"
            }}>
                <AgoraCommunity />
                {/*<StartAThread />*/}
                <GenericButton displayText={"Start a Thread"} />
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
                // display: "none"
            }}>
                <ColumnOfThreads />
            </div>
            <div style={{
                width: "min-content",
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
