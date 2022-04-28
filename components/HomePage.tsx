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
import ColumnOfThreads from "./scrollables/ColumnOfThreads";

const RenderPDF = dynamic(import("../components/attachments/RenderPDF"), {ssr: false})



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
            <ColumnOfThreads />
            <div style={{
                // width: "min-content",
                // width: "inherit",
                width: "50vw",
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
