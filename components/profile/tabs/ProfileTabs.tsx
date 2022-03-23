import styles from "../../../styles/Home.module.css";
import GenericButton from "../../buttons/GenericButton";

export default function ProfileTabs() {
    return (
        <div style={{
            // border: "3px solid black",
            borderBottom: "3px solid lightgrey",
            // width: "85vw",
            height: "7vh",
            position: "sticky",
            top: "0",
            margin: "auto",
            backgroundColor: "#FBF9FF",
            zIndex: "9001",
            display: "flex",
            flexDirection: "row"
        }}>
            {/*<div className={styles.tab}>*/}
            {/*    <button className={styles.tablinks}> Profile </button>*/}
            {/*    <button className={styles.tablinks}> Topics & Hashtags</button>*/}
            {/*    <button className={styles.tablinks} > Filter </button>*/}
            {/*    <button className={styles.tablinks} > Search </button>*/}
            {/*</div>*/}
            <div style={{
                margin: "auto 0vw auto 1vw"
            }}>
                <GenericButton displayText={"Profile"} />
            </div>
            <div style={{
                margin: "auto 0vw auto 1vw"
            }}>
                <GenericButton displayText={"Topics & Hashtags"} />
            </div>

            <div style={{
                margin: "auto 0vw auto 1vw"
            }}>
                <GenericButton displayText={"Filter"} />
            </div>

            <div style={{
                margin: "auto 0vw auto 1vw"
            }}>
                <GenericButton displayText={"Search"} />
            </div>

            {/*<div>*/}
            {/*    Added Filters and other changes search term*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    This can be hidden*/}
            {/*</div>*/}
        </div>
    );
}
