import Image from "next/image";
import {AiOutlineEye, BiMessageDetail, BsPeople} from "react-icons/all";
import quokka from '../../public/quokka.jpeg'
import styles from '../../styles/ContentCard.module.css'

const CardStats = ({ icon, number = 69 }: any) => (
    <div>
        <div>
            { icon }
        </div>
        <div>
            { number }
        </div>
    </div>
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
                        Description description description description description
                        description description description description
                        description description description


                    </div>
                    <div className={styles.statsArray}>
                        <CardStats icon={<BsPeople size="20" /> } />
                        <CardStats icon={<AiOutlineEye size="20" /> } />
                        <CardStats icon={<BiMessageDetail size="20" /> } />
                    </div>
                </div>
            </div>
        </div>
    );
}