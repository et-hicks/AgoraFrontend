import styles from '../../styles/Thread/Thread.module.scss'

export default function Thread() {
    return (
        <div className={styles.threadContainer}>
            This is the base of the thread
            <div className={styles.beginThreadContent}>
                This is the base of the thread content
            </div>
        </div>
    );
}