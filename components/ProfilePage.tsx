import GenericButton from "./buttons/GenericButton";
import styles from "../styles/Home.module.css";
import {useState} from "react";
import Head from "next/head";
import ProfileColumn from "./profile/column/ProfileColumn";
import ProfileTabs from "./profile/tabs/ProfileTabs";
import ProfileContent from "./profile/content/ProfileContent";


export default function ProfilePage() {

    const [user, setUser] = useState("Ethan Hicks")

    return (
        <div style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            height: "min-content"
        }}>
            <Head>
                <title> { user } </title>
            </Head>
            {/*<ProfileTabs />*/}

            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <ProfileContent />
                <ProfileColumn />
            </div>

        </div>
    );
}
