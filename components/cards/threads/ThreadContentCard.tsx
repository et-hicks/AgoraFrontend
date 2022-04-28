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





const DynamicCardStatsPeople = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsPeople), {ssr: false}
);
const DynamicCardStatsOutlineEye = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsOutlineEye), {ssr: false}
);
const DynamicCardStatsMessageDetail = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsMessageDetail), {ssr: false}
);
// import {CardStatsGridVersion} from '../info/CardStats';
const CardStatsGridVersion = dynamic(() =>
    import('../info/CardStats').then((module: any) => module.CardStatsGridVersion), {ssr: false}
);

const ContentDescription = () => {
    return (
        <div className={styles.contentDescription}>
            Description description description
            description description description
            Description description description

        </div>
    );
}

const ConversationTitle = () => {
    return (
        <div className={styles.contentTitle}>
            Conversation Title
        </div>
    );
}

const StatsArray = () => {
    return (
        <div className={styles.statsArray}>
            <DynamicCardStatsPeople />
            <DynamicCardStatsOutlineEye />
            <DynamicCardStatsMessageDetail />
        </div>
    );
}



export default function ThreadContentCard() {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const thing = (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                large plate and set aside, leaving chicken and chorizo in the pan. Add
                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and
                peppers, and cook without stirring, until most of the liquid is absorbed,
                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                mussels, tucking them down into the rice, and cook again without
                stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>)

    // const theme = useTheme();

    const thing2 =  (
        <Card sx={{ display: 'flex', overflow: 'auto' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://6.viki.io/image/9662734afa754a9aa36edbadabb207ce.jpeg?s=900x600&e=t"
                alt="from space album cover"
            />
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn 1More</Button>
                        <Button size="small">Learn2 More</Button>
                    </CardActions>
                </Box>
            </ CardContent>
        </Card>
    );

    const builtThing = (
        <Card sx={{ overflow: 'visible' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
        <Box sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://6.viki.io/image/9662734afa754a9aa36edbadabb207ce.jpeg?s=900x600&e=t"
                alt="from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica

                    </Typography>
                </CardContent>
            </Box>
        </Box>
            <Box>
                <CardActions>
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Button size="small">Learn 1More</Button>
                    {/*<Grid container direction="row" alignItems="center">*/}
                    {/*    <Grid item>*/}
                    {/*        <DeleteIcon  sx={{ color: pink[500] }}/>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*        revolve*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    <CardStatsGridVersion />
                    <CardStatsGridVersion />
                    <Button size="small">Learn 1More</Button>
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    {/*<Tooltip title="Delete">*/}
                    {/*    <IconButton>*/}
                    {/*        <DeleteIcon />*/}
                    {/*    </IconButton>*/}
                    {/*</Tooltip>*/}
                </CardActions>
            </Box>

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