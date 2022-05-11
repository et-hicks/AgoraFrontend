import styles from "../../styles/Home.module.css";
import ThreadContentCard from "../cards/threads/ThreadContentCard";
import GenericButton from "../buttons/GenericButton";
import {useSelector} from "react-redux";
import {AppState} from "../../app/store";

const AgoraCommunity = () => {
    return (
        <div >
            <div style={{
                margin: "auto",
                fontSize: "3vh",
                fontWeight: "bold",
            }}>
                Agora Community
            </div>
        </div>
    );
}

const ThreadColumnHeader = () => {
    return (
        <div style={{
            border: "3px dotted darkblue",
            display: "flex",
            flexDirection: "row",
            height: "fit-content",
            // margin: "auto",
            width: "95%",
            // width: "25vw",
            // width: "30vw",
            // width: "45vw",
            margin: "2.5% 2.5%",
            justifyContent: "space-evenly"
        }}>
            <AgoraCommunity />
            <GenericButton displayText={"Start a Thread"} />
        </div>
    );
}

export default function ColumnOfThreads() {
    // const showThreads = useSelector((state: AppState) => state.expander.expand);

    // <div className={styles.threadArray}>
    //                 <ThreadContentCard />
    //                 <ThreadContentCard />
    //             </div>

    return (
        <div style={{
            // border: `${showThreads ? "3px solid black" : "3px solid green"}`,
            display: "flex",
            // display: "none",
            flexDirection: "column",
            paddingLeft: "1vw",
            // overflow: "scroll",
            // border: "3px solid green",
            // height: "92vh",
            // width: "35vw"
        }}>
            {/*<ThreadColumnHeader />*/}
            <ThreadContentCard />
            <br />
            <ThreadContentCard />
            <br />
            <ThreadContentCard />
            <br />
            <ThreadContentCard />
            <br />
            <ThreadContentCard />
            <br />
            <ThreadContentCard />
            <br />
            <ThreadContentCard />
        </div>
    );
}
