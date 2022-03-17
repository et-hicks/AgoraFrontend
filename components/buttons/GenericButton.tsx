import styles from "../../styles/Buttons/Buttons.module.css";
import {GenericButtonProps} from "../../@types";

export default function GenericButton({displayText = "Start a Thread"}: GenericButtonProps) {
    return (
        <div className={styles.genericButtonContainer}>
            <div>
                { displayText }
            </div>
        </div>
    );
}