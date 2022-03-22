import UserBanner, {UserNameAndImage} from "../cards/user/UserBanner";
import styles from "../../styles/Article.module.css";
import dynamic from "next/dynamic";
import DiscussionStats from "../cards/discussion/DiscussionStats";
import {GenericButtonProps, UserBannerProps} from "../../@types";
import ExtentContent from "../buttons/ExtendContent";
import FollowThread from "../buttons/FollowThread";
import GenericButton from "../buttons/GenericButton";

let colorMap = new Map<string, string>([
    ["Tom Hanks", "4px solid blue"],
    ["Ethan Hicks", "4px solid green"],
    ["Imam Shamil", "4px solid red"],
    ["Vlad the Impaler", "4px solid purple"],
]);

const ContributionContainer = ({userId}: UserBannerProps) => {
    // TODO: some form of props to determine who posts what
    // TODO: and to see what kind of border they should have
    return (
        <div style={{
            // border: "3px dashed orange",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            borderLeft: `${colorMap.get(userId)}`, // TODO: make this 50% only
            borderTop: `${colorMap.get(userId)}`,  // TODO: make this 50% only
            margin: "1vw 1vh",
            width: "inherit"
        }}>
            <div style={{
                marginTop: "0.5vh",
                paddingLeft: "0.5vw"
            }}>
                <UserNameAndImage userId={userId} />
            </div>
            <div style={{
                margin: "auto",
                // fontSize: "2vh",
                // border: "2px solid black",
                paddingLeft: "5vw",
                paddingRight: "1vw",
                fontSize: "1rem",
                lineHeight: "1.5em",
                fontFamily: "Roboto",
            }}>
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
                Use react query to load the bottom 10 discussions, appending to the top as people scroll up
            </div>
        </div>
    );
}


const DiscussionContributions = () => {
    // TODO: install react query
    // TODO: Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    return (
        <div style={{
            // border: "3px solid red"
        }}>
            <ContributionContainer userId={"Vlad the Impaler"}/>
            <ContributionContainer userId={"Ethan Hicks"}/>
            <ContributionContainer userId={"Tom Hanks"}/>
            <ContributionContainer userId={"Ethan Hicks"}/>
            <ContributionContainer userId={"Imam Shamil"}/>
        </div>

    );
}

const WhoIsHere = () => {
    return (
        <div style={{
            // border: "2px dashed orange",
            // height: "98vh",
            width: "fit-content",
            // overflow: "scroll"
            // borderBottom: "2px solid lightgrey"
        }} >
            <div style={{
                // border: "4px dashed darkgreen",
                marginTop: "1vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start"

            }}>
                <div style={{
                    borderLeft: "4px solid blue",
                    marginTop: "0.5vh",
                    paddingLeft: "0.5vw"
                }}>
                    <UserNameAndImage userId={"Tom Hanks"} />
                </div>
                <div style={{
                    borderLeft: "4px solid green",
                    marginTop: "0.5vh",
                    paddingLeft: "0.5vw"
                }}>
                    <UserNameAndImage userId={"Ethan Hicks"} />
                </div>
                <div style={{
                    borderLeft: "4px solid red",
                    marginTop: "0.5vh",
                    paddingLeft: "0.5vw"
                }}>
                    <UserNameAndImage userId={"Imam Shamil"} />
                </div>
                <div style={{
                    borderLeft: "4px solid purple",
                    marginTop: "0.5vh",
                    paddingLeft: "0.5vw"
                }}>
                    <UserNameAndImage userId={"Vlad the Impaler"} />
                </div>
            </div>
        </div>
    );
}

const ConversationTitle = () => {
    return (
        <div style={{
            fontWeight: "bold",
            alignSelf: "center",
            padding: "1vw 1vh"
        }}>
            A Discussion on the Prevalence of Quokkas in the Modern American Conscience
        </div>
    );
}

const ConversationSubtitle = () => {
    return (
        <div style={{
            fontSize: "2vh"
        }}>
            An 1890s take on a 2020s topic
        </div>
    );
}

const ConversationHeader = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            alignItems: "center",
            fontSize: "3vh",
            // border: "3px solid red",
        }}>
            <ConversationTitle />
            <ConversationSubtitle />
        </div>
    );
}

const Contribute = () => {
    return (
        <div style={{
            // border: "3px solid black",
            margin: "auto"

        }}>
            <form>
                <textarea style={{
                    fontSize: "1rem",
                    lineHeight: "1.5em",
                    fontFamily: "Roboto",
                    outline: "none",
                    // outline: `1px solid black`,
                    overflow: "auto",
                    resize: "vertical",
                    minHeight: "10vh",
                    maxHeight: "50vh",
                    width: "35vw",
                    // borderRadius: "10px",
                }}
                    name={"writeReply"}
                    cols={50}
                    rows={5}
                    placeholder={" Post in the discussion"}/>
            </form>
        </div>
    )
}

const Clickable = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            padding: "0.5vw 0.5vh",
            border: "3px solid blue",
            // width: "50vw",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            borderRadius: "10px",
            boxShadow: "15px 10px 20px 1px lightgray",
            position: "sticky",
            top: "0",
            background: "#FBF9FF",
            zIndex: "9001"
        }}>
            <Contribute />
            <GenericButton displayText={"Submit"} />


        </div>
    )
}




export default function Discussion() {
    return (
        <div style={{
            // border: "3px solid pink",
            display: "flex",
            flexDirection: "column",
            // width: "fit-content",
            width: "40vw",
            borderLeft: "2px solid lightgrey",
            height: "98vh",
            paddingLeft: "0.5vw",
            overflow: "scroll"
        }}>
            <ConversationHeader />
            <DiscussionStats />
            <WhoIsHere />
            <br />
            <Clickable />
            <br />
            <DiscussionContributions />
        </div>
    );



}