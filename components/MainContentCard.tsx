import styles from '../styles/MainContentCard.module.css'
import Image from "next/image";
import Thread from "./threads/Thread";
import ExtentContent from "./buttons/ExtendContent";
// import {AiOutlineEye, BiMessageDetail, BsPeople} from "react-icons/all";

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


const User = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <div style={{
                margin: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignContent: "center",
                justifyItems: "center",
                width: "20vw",
            }}>
              <div style={{
                  marginRight: "1vw",
                  borderRadius: "10px",
                  overflow: "hidden",
                  height: "60px",
                  border: "2px solid black",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  // alignSelf: "center"
              }}>
                  <Image src="/quokka.jpeg"
                         height="60px"
                         width="60px"
                  />
              </div>
                <div style={{
                    marginTop: "1vh",
                    fontSize: "3vh",

                }}>
                    Ethan Hicks
                </div>
            </div>
            <div style={{
                margin: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingRight: "1vw",
                paddingLeft: "1vw",
                width: "10vw"
            }}>
                {/*<CardStats icon={<BsPeople size="20" /> } />*/}
                {/*<CardStats icon={<AiOutlineEye size="20" /> } />*/}
                {/*<CardStats icon={<BiMessageDetail size="20" /> } />*/}
            </div>
        </div>
    );
}

const ThreadTitle = () => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }}>
        <div style={{
            // margin: "auto",
            marginTop: "1vh",
            fontSize: "5vh",
            fontWeight: "bold",
        }}>
            Thread Title
        </div>
    </div>
);

export default function MainContentCard() {

    return (
        <div style={{
            borderLeft: "2px solid lightgrey",
            height: "98vh",
            width: "52vw",
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
                width:  "48vw",
                margin: "auto"
            }}>
                <User />
            </div>
            <div style={{
                // border: "4px dashed purple",
                height: "10vh",
                width:  "48vw",
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
                border: "4px dashed blue",
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
            }}>
                <ExtentContent />
            </div>
            <div>
                <Thread />
            </div>
        </div>
    );
}