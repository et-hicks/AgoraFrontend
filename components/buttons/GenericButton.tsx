import styles from "../../styles/Buttons/Buttons.module.css";
import {GenericButtonProps} from "../../@types";
import {MdOutlineSubject} from "react-icons/all";

export default function GenericButton({displayText = "Start a Thread"}: GenericButtonProps) {
    return (
        <div className={styles.genericButtonContainer}>
                { displayText }
        </div>
    );

}