import styles from '../../styles/Thread/Thread.module.scss'

export default function Thread() {

    // TODO: install react query
    // Seems like a pretty cool thing to do

    return (
        <div>
            <div className={styles.threadContainer}>
                THREADS ARE IN PROGRESS
                <div className={styles.beginThreadContent}>
                    comment 2
                </div>
                <div className={styles.beginThreadContent}>
                    comment 3
                </div>
            </div>
            <div className={styles.threadContainer}>
                comment 1
                <div className={styles.beginThreadContent}>
                    comment 3
                </div>
            </div>
        </div>
    );
}