import styles from "../../../styles/Home.module.css";

export default function ProfileTabs() {
    return (
        <div style={{
            border: "3px solid black",
            width: "85vw",
            // height: "5vh",
            position: "sticky",
            top: "0",
            margin: "auto",
            backgroundColor: "#FBF9FF",
            zIndex: "9001"
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
