import styles from "../../styles/Buttons/ExtendContent.module.scss"
import {FiArrowRight} from "react-icons/all";



export default function ExtentContent({ props }: any) {
    // TODO: replace this with redux state management

    const clicky = () => {
        console.log("clicked")
        // props.setShowThreads.setShowThreads(!props.showThreads.showThreads)
        props.setShowThreads(!props.showThreads)
    }

    console.log("from the extend content props are:", props);
    console.log("show threads:", props.showThreads);

    return (
        <div className={styles.extendContentContainer} onClick={clicky}>
            <div className={styles.beginExtendContent}>
                Extend Content
            </div>
            <span className={styles.notVisible}>
                69-420
            </span>
            {/*<FiArrowRight size="20"/>*/}
        </div>
    );
}