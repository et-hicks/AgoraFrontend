import GenericButton from "../../buttons/GenericButton";

const ProfilePicture = () => {
    return (
        <div style={{
            border: "3px solid black",
            width: "inherit",
            height: "350px",
            borderRadius: "10px"
        }}>

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
            <GenericButton displayText={"Machine Learning"} />
            <GenericButton displayText={"Political Science"} />
            <GenericButton displayText={"Economics"} />
            <br />
            <GenericButton displayText={"Explore all topics"} />
            <GenericButton displayText={"Explore all hashtags"} />
        </div>
    );
}


export default function ProfileColumn() {
    return (
        <div style={{
            // TODO: set a min and a max height here
            border: "3px solid black",
            width: "20vw",
            height: "min-content",
            // overflow: "scroll"
        }}>
            <ProfilePicture />
            <UserBio />
            <UsersMostCommonTopics />
        </div>
    );
}
