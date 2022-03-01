import styles from "../../styles/Buttons/ExtendContent.module.scss"
import {FiArrowRight} from "react-icons/all";



export default function ExtentContent() {
    
    const clicky = () => {
        console.log("clicked")
    }

    return (
        <div className={styles.extendContentContainer} onClick={clicky}>
            <div className={styles.beginExtendContent}>
                Extend Content
            </div>
            <span className={styles.notVisible}>
                69-420
            </span>
            <FiArrowRight size="20"/>
        </div>
    );
}