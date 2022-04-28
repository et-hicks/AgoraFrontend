import dynamic from "next/dynamic";
import FollowThread from "../../buttons/FollowThread";
import GenericButton from "../../buttons/GenericButton";

const DynamicCardStatsPeople = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsPeople), {ssr: false}
);
const DynamicCardStatsOutlineEye = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsOutlineEye), {ssr: false}
);
const DynamicCardStatsMessageDetail = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsMessageDetail), {ssr: false}
);

export default function DiscussionStats() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: "1vw 1vh",
            width: "95%",
            // border: "3px solid orange",
        }}>
            <DynamicCardStatsPeople />
            <DynamicCardStatsOutlineEye />
            <DynamicCardStatsMessageDetail />
            {/*<FollowThread />*/}
            <GenericButton displayText={"Follow Thread"} />
        </div>
    );
}