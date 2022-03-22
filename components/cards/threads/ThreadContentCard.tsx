import Image from "next/image";
// import {AiOutlineEye, BiMessageDetail, BsPeople} from "react-icons/all";

import styles from '../../../styles/ContentCard.module.css'
import dynamic from "next/dynamic";

const DynamicCardStatsPeople = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsPeople), {ssr: false}
);
const DynamicCardStatsOutlineEye = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsOutlineEye), {ssr: false}
);
const DynamicCardStatsMessageDetail = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsMessageDetail), {ssr: false}
);

const ContentDescription = () => {
    return (
        <div className={styles.contentDescription}>
            Description description description
            description description description
            Description description description
            description description description
            Description description description
            scription description
            description description description
            Description description description
            scription description
            description description description
            Description description description


            scription description
            description description description
            Description description description
            scription description
            description description description
            Description description description
            scription description
            description description description
            Description description description
            description description description
            Description description description
            description description description
        </div>
    );
}

const ConversationTitle = () => {
    return (
        <div className={styles.contentTitle}>
            Conversation Title
        </div>
    );
}

const StatsArray = () => {
    return (
        <div className={styles.statsArray}>
            <DynamicCardStatsPeople />
            <DynamicCardStatsOutlineEye />
            <DynamicCardStatsMessageDetail />
        </div>
    );
}


export default function ThreadContentCard() {
    // huh???
    return (
        <div className={styles.contentCard}>
            <div className={styles.imageContainer}>
                <Image src="/quokka.jpeg" width="200px" height="150px" />
            </div>
            {/*<div className={styles.contentCardContainer}> */}
                <div className={styles.contentContainer}>
                    <ConversationTitle />
                    <ContentDescription />
                    <StatsArray />
                </div>
            {/*</div>*/}
        </div>
    );
}