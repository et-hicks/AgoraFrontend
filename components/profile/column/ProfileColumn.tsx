import GenericButton from "../../buttons/GenericButton";
import Image from "next/image";

const ProfilePicture = () => {
    return (
        <div style={{
            // border: "3px solid black",
            width: "inherit",
            height: "350px",
            borderRadius: "10px"
        }}>
            <Image src="/quokka.jpeg" width="390px" height="350px"/>
        </div>
    );
}

const UserBio = () => {

    // TODO: When the bio is too long have it pop out into a more approachable size
    // TODO: turn this into a pop up
    return (
        <div style={{
            width: "inherit",
            height: "fit-content",
            padding: "1.25vh 1.5vw",
            fontSize: ".8em"
        }}>
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
            Follow Thread
        </div>
    );
}

const UsersMostCommonTopics = () => {
    const user = "Ethan Hicks";
    return (
        <div>
            <div>
                { user } most commonly posts in
            </div>
            <div style={{
                margin: "auto 0vw auto 1vw"
            }}>
                <GenericButton displayText={"Machine Learning"} />
            </div>
            <div style={{
                margin: "auto 0vw auto 1vw"
            }}>
            <GenericButton displayText={"Political Science"} />
            </div>
            <div style={{
                margin: "auto 0vw auto 1vw"
            }}>
                <GenericButton displayText={"Economics"} />
            </div>
            <br />
            <div style={{
                margin: "auto 0vw auto 1vw"
            }}>
                <GenericButton displayText={"Explore all topics"} />
            </div>
            <div style={{
                margin: "auto 0vw auto 1vw"
            }}>
                <GenericButton displayText={"Explore all hashtags"} />
            </div>
        </div>
    );
}


export default function ProfileColumn() {
    return (
        <div style={{
            // TODO: set a min and a max height here
            borderLeft: "3px solid lightgrey",
            width: "20vw",
            height: "min-content",
            // marginLeft: "0.5vw"
            // overflow: "scroll"
        }}>
            <ProfilePicture />
            <UserBio />
            <UsersMostCommonTopics />
        </div>
    );
}
