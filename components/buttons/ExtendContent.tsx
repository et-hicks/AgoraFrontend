import styles from "../../styles/Buttons/ExtendContent.module.scss"
import {FiArrowRight} from "react-icons/all";
import {show, hide, invert} from "../../states/showThreads"
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import {AppState} from "../../app/store";


export default function ExtentContent() {
    // TODO: replace this with redux state management

    const dispatch = useDispatch()

    const clicky = () => {
        console.log("clicked")
        // props.setShowThreads.setShowThreads(!props.showThreads.showThreads)
        // props.setShowThreads(!props.showThreads);
        dispatch(invert());
    }

    // console.log("from the extend attachments props are:", props);
    // console.log("show threads:", props.showThreads);

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