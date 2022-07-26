import {UserNameAndImage} from "../../components/cards/user/UserBanner";
import GenericButton from "../../components/buttons/GenericButton";
import DiscussionStats from "../../components/cards/discussion/DiscussionStats";
import {UserBannerProps} from "../../@types";
import Head from "next/head";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Paper,
    Tooltip,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";

let colorMap = new Map<string, string>([
    ["Tom Hanks", "4px solid blue"],
    ["Ethan Hicks", "4px solid green"],
    ["Imam Shamil", "4px solid red"],
    ["Vlad the Impaler", "4px solid purple"],
]);
function getRandomInt(m: number) {
    return Math.floor(Math.random() * m);
}

const ContributionContainer = ({userId}: UserBannerProps) => {
    // TODO: some form of props to determine who posts what
    // TODO: and to see what kind of border they should have
    // return (
    //     <div style={{
    //         // border: "3px dashed orange",
    //         // display: "flex",
    //         // flexDirection: "column",
    //         // alignItems: "flex-start",
    //         // justifyContent: "flex-start",
    //         // borderLeft: `${colorMap.get(userId)}`, // TODO: make this 50% only
    //         // borderTop: `${colorMap.get(userId)}`,  // TODO: make this 50% only
    //         // margin: "1vw 1vh",
    //         // width: "inherit"
    //     }}>
    //
    //             <UserNameAndImage userId={userId} />
    //
    //         <div style={{
    //             // margin: "auto",
    //             // fontSize: "2vh",
    //             // border: "2px solid black",
    //             // paddingLeft: "5vw",
    //             // paddingRight: "1vw",
    //             // fontSize: "1rem",
    //             // lineHeight: "1.5em",
    //             // fontFamily: "Roboto",
    //         }}>
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //             Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    //         </div>
    //     </div>
    // );
    let comment = "";
    const result = getRandomInt(3);
    console.log(result)
    switch (result) {
        case 1: {
            comment =     "Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
                "                    species, ranging across all continents except Antarctica.\n" +
                "                    Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
                "                    species, ranging across all continents except Antarctica\n" +
                "                    Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
                "                    species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000\n" +
                "                    species, ranging across all continents except Antarctica\n" +
                "                    Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
                "                    species, ranging across all continents except Antarctica\n" +
                "                    Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
                "                    species, ranging across all continents except Antarctica\n" +
                "                    Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
                "                    species, ranging across all continents except Antarctica"
            break;
        }
        case 2: {
            comment = "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up\n" +
                "                Use react query to load the bottom 10 discussions, appending to the top as people scroll up"
            break;
        }
        case 0:
        case 3: {
            comment = "lol I agree with the imam"
            break;
        }
    }
    return (
        <Paper elevation={3}>
            <UserNameAndImage userId={userId} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">

                    {comment}

                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Paper>
    );
}


const DiscussionContributions = () => {
    // TODO: install react query
    // TODO: Use react query to load the bottom 10 discussions, appending to the top as people scroll up
    return (
        <div style={{
            padding: "1vh 1vw",
            display: "grid",
            gridAutoFlow: "row",
            gridRowGap: "1vh"
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
    // display: grid
    // grid-auto-flow: column
    // grid-column-gap: 10px
    return (
        <div style={{
            padding: "1vh 1vw",
            display: "grid",
            gridAutoFlow: "row",
            gridRowGap: "1vh"
        }}>
        <UserNameAndImage userId={"Tom Hanks"} />
        <UserNameAndImage userId={"Ethan Hicks"} />
        <UserNameAndImage userId={"Imam Shamil"} />
        <UserNameAndImage userId={"Vlad the Impaler"} />
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
            // width: "fit-content",
            width: "95%",
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
    // TODO: react state that allows for changing the columns of the
    // TODO: contribute to something that works from the window
    return (
        <div style={{
            // border: "3px solid black",
            margin: "auto",
            width: "95%"
        }}>
            <form>
                <textarea style={{
                    fontSize: "1rem",
                    lineHeight: "1.5em",
                    fontFamily: "Roboto",
                    // outline: "none",
                    outline: `1px solid black`,
                    overflow: "auto",
                    resize: "vertical",
                    minHeight: "5vh",
                    maxHeight: "50vh",
                    width: "100%",
                    // borderRadius: "10px",
                }}
                          name={"writeReply"}

                          rows={3}
                          placeholder={"Post in the discussion"}/>
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
            width: "95%",
            // width: "inherit",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            borderRadius: "10px",
            boxShadow: "15px 10px 20px 1px lightgray",
            // position: "sticky",
            // top: "0",
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
            // width: "49vw",
            // width: "inherit",
            borderLeft: "2px solid lightgrey",
            // height: "98vh",
            // height: "92vh",
            paddingLeft: "0.5vw",
            // overflow: "scroll"
        }}>
            <Head>
                <title> Agora </title>
            </Head>
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