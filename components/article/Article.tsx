import styles from '../../styles/Article.module.css'
import Image from "next/image";
import Thread from "../threads/Thread";
import ExtentContent from "../buttons/ExtendContent";
import dynamic from "next/dynamic";
import {useSelector} from "react-redux";
import {AppState} from "../../app/store";
import UserBanner from "../cards/user/UserBanner";
// import {AiOutlineEye, BiMessageDetail, BsPeople} from "react-icons/all";

// const RenderPDF = dynamic(import("../components/attachments/RenderPDF"), {ssr: false})

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




const ThreadTitle = () => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "2vw"
    }}>
        <div style={{
            // margin: "auto",
            marginTop: "1vh",
            fontSize: "30px",
            fontWeight: "bold",
        }}>
            POPULATION DYNAMICS OF THE QUOKKA, SETONIX BRACHYURUS,
            ON THE WEST END OF ROTTNEST I., WESTERN AUSTRALIA
        </div>
    </div>
);

export default function Article() {
    const expandContent = useSelector((state: AppState) => state.expander.expand);

    return (
        <div style={{
            borderLeft: "2px solid lightgrey",
            height: "98vh",
            width: `${expandContent ? "52vw" : "40vw"}`,
            // width: "52vw",
            overflow: "scroll"
        }} className={styles.testing}>
            <div style={{
                // border: "4px dashed blue",
                height: "35vh",
                width:  "30vw",
                margin: "auto",
                borderRadius: "4vh",
                paddingBottom: "3vh",
                overflow: "hidden",
            }}>
                <Image src="/quokka.jpeg" width="1200px" height="800px"/>
            </div>
            <div style={{
                // border: "4px dashed darkgreen",
                marginTop: "1vh",
                height: "6vh",
                width:  "inherit",
                margin: "auto"
            }}>
                <UserBanner  userId={"Ethan Hicks"}/>
            </div>
            <div style={{
                // border: "4px dashed purple",
                // height: "10vh",
                width:  "inherit",
                margin: "auto"
            }}>
                <ThreadTitle />
            </div>
            <div style={{
                // border: "4px dashed blue",
                // height: "38vh",
                // width:  "48vw",
                margin: "auto",
                padding: "2vh 5vw"
            }}>
                Data collected over a period of 10 yr is presented on the distribution of a small
                wallaby, the quokka, on the isolated West End portion of Rottnest I., Western
                Australia. The density of quokkas in each locality varied with the density of grasses that
                composed the major portion of their diet. Generally, the animals are non-gregarious
                and each quokka has a home range of about 10 ac. The home ranges of groups of
                25-150 individuals overlap to form group territories. The boundaries of the group
                territories are stable and in places coincide with topographical features. Young quokkas
                usually remain in their natal group territory and rarely do permanent changes in group
                affiliation by animals of any age occur even after the population of adjacent territories
                has been greatly reduced.
            </div>
            <div style={{
                // border: "4px dashed blue",
                // height: "35vh",
                // width:  "30vw",
                margin: "auto",
                // borderRadius: "4vh",
                // paddingBottom: "3vh",
                overflow: "hidden",
                display: "flex",
                // alignItems: "center",
                // justifyItems: "center",
                // justifySelf: "center",
                // alignSelf: "center"
                paddingBottom: "2vh"
            }}>
                <ExtentContent />
            </div>
            <div >
                <Thread />
            </div>
        </div>
    );
}