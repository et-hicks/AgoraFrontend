import Image from "next/image";
// import {AiOutlineEye, BiMessageDetail, BsPeople} from "react-icons/all";

import styles from '../../../styles/ContentCard.module.css'
import dynamic from "next/dynamic";
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Collapse, Grid,
    IconButton, IconButtonProps, Tooltip,
    Typography
} from "@mui/material";

import {pink, red, blue} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from "react";
import {ThreadPageResponse} from "../../../@types";


const DynamicCardStatsPeople = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsPeople), {ssr: false}
);
const DynamicCardStatsOutlineEye = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsOutlineEye), {ssr: false}
);
const DynamicCardStatsMessageDetail = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsMessageDetail), {ssr: false}
);

const CardStatsGridVersion = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsGridVersion), {ssr: false}
);




export default function ThreadContentCard({title, description, createdAt, creator, contributors}: ThreadPageResponse) {
    const [expanded, setExpanded] = useState(false);
    const [underlined, setUnderline] = useState(false)

    const handleThreadCardClick = (e: any) => {
        e.preventDefault()
        console.log(e)
    }


    const createdDate = new Date(createdAt)

    function changeUnderline(e: any) {
        e.target.style.textDecoration = 'underline';
    }

    function changeText(e: any) {
        e.target.style.textDecoration = 'none';
    }

    const builtThing = (
        <Card sx={{ overflow: 'visible', margin: "1vw" }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {creator.username[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={creator.username}
                subheader={createdDate.toDateString()}
            />
        <Box sx={{ display: 'flex', cursor: "pointer"}} className={styles.txt}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://6.viki.io/image/9662734afa754a9aa36edbadabb207ce.jpeg?s=900x600&e=t"
                alt="from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column',  }} >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Box>
        </Box>
            {/* TODO: Create the card actions */}
            {/*<Box>*/}
            {/*    <CardActions>*/}
            {/*        <Tooltip title="Delete">*/}
            {/*            <IconButton>*/}
            {/*                <DeleteIcon />*/}
            {/*            </IconButton>*/}
            {/*        </Tooltip>*/}
            {/*        <Button size="small">Learn 1More</Button>*/}
            {/*        <CardStatsGridVersion />*/}
            {/*        <CardStatsGridVersion />*/}
            {/*        <Button size="small">Learn 1More</Button>*/}
            {/*        <Tooltip title="Delete">*/}
            {/*            <IconButton>*/}
            {/*                <DeleteIcon />*/}
            {/*            </IconButton>*/}
            {/*        </Tooltip>*/}
            {/*    </CardActions>*/}
            {/*</Box>*/}

        </Card>
    );

    return builtThing;
    // huh???
    // return (
    //     <div className={styles.contentCard}>
    //         <div style={{
    //             // border: "3px solid blue",
    //             width: "25%",
    //             marginLeft: "2%",
    //             display: "flex"
    //         }}>
    //             <div style={{
    //                 margin: "auto",
    //                 // border: "3px dotted blue",
    //                 // borderRadius: "15px",
    //                 overflow: "hidden",
    //                 width: "100%",
    //                 height: "80%",
    //                 display: "flex"
    //             }}>
    //                 <div style={{
    //                     margin: "auto",
    //                     // borderRadius: "10px",
    //                     // overflow: "hidden"
    //                 }}>
    //                     <Image src="/quokka.jpeg" width="200px" height="150px" />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className={styles.contentCardContainer}>
    //             <div className={styles.contentContainer}>
    //                 <ConversationTitle />
    //                 <ContentDescription />
    //                 <StatsArray />
    //             </div>
    //         </div>
    //     </div>
    // );
}