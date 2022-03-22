import Image from "next/image";
import dynamic from "next/dynamic";
import {UserBannerProps} from "../../../@types";


const DynamicCardStatsPeople = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsPeople), {ssr: false}
);
const DynamicCardStatsOutlineEye = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsOutlineEye), {ssr: false}
);
const DynamicCardStatsMessageDetail = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsMessageDetail), {ssr: false}
);

const UserImage = () => {
    return (
        <div style={{
            marginRight: "1vw",
            borderRadius: "10px",
            overflow: "hidden",
            height: "60px",
            border: "2px solid black",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            // alignSelf: "center"
        }}>
            <Image src="/quokka.jpeg"
                   height="60px"
                   width="60px"
            />
        </div>
    );
}

const UserName = ({userId = "Ethan Hicks"}: UserBannerProps) => {
    return (
        <div style={{
            marginTop: "1vh",
            fontSize: "2.25vh",

        }}>
            { userId }
        </div>
    )
}

export const UserNameAndImage = ({userId = "Ethan Hicks"}: UserBannerProps) => {
    return (
        <div style={{
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignContent: "center",
            justifyItems: "center",
            // width: "50vw",
            // border: "3px solid pink"
        }}>
            <UserImage />
            <UserName userId={userId} />
        </div>
    )
}



export default function UserBanner ({userId = "Ethan Hicks"}: UserBannerProps) {
    // TODO: use userId to hydrate these props from the database

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "1vh",
            paddingBottom: "1vh"
        }}>
            <UserNameAndImage userId={userId} />
            <div style={{
                margin: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingRight: "1vw",
                paddingLeft: "1vw",
                width: "10vw"
            }}>
                <DynamicCardStatsPeople />
                <DynamicCardStatsOutlineEye />
                <DynamicCardStatsMessageDetail />
            </div>
        </div>
    );
}