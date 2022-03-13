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


export default function ThreadContentCard() {
    // huh???
    return (
        <div className={styles.contentCard}>
            <div className={styles.contentCardContainer}>
                <div className={styles.imageContainer}>
                   <Image src="/quokka.jpeg" width="300px" height="300px"/>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentTitle}>
                        Conversation Title
                    </div>
                    <div className={styles.contentDescription}>
                        Description description description
                        description description description

                    </div>
                    <div className={styles.statsArray}>
                        <DynamicCardStatsPeople />
                        <DynamicCardStatsOutlineEye />
                        <DynamicCardStatsMessageDetail />
                    </div>
                </div>
            </div>
        </div>
    );
}