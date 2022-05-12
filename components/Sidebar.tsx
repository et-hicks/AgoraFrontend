import styles from '../styles/Sidebar.module.css'
// import {FaHome} from 'react-icons/fa';
// import {AiOutlineQuestionCircle, BiHash, MdOutlineSubject} from "react-icons/all";
import dynamic from "next/dynamic";
import {
    Box,
    Button, Card, CardActionArea, CardContent, CardMedia,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Pagination,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {Cloud, ContentCopy, ContentCut, ContentPaste} from "@mui/icons-material";
import {useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ForumIcon from '@mui/icons-material/Forum';
import RecommendIcon from '@mui/icons-material/Recommend';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// TODO: Place the sidebar component in a different area of the codebase as the code expands (for codebase scalability reasons)

const AiOutlineQuestionCircle: any = dynamic(() =>
    import("react-icons/all").then((module: any) => module.AiOutlineQuestionCircle), {ssr: false}
);
const BiHash: any = dynamic(() =>
    import("react-icons/all").then((module: any) => module.BiHash), {ssr: false}
);
const MdOutlineSubject: any = dynamic(() =>
    import("react-icons/all").then((module: any) => module.MdOutlineSubject), {ssr: false}
);
const FaHome: any = dynamic(() =>
    import('react-icons/fa').then((module: any) => module.FaHome), {ssr: false}
);



const SidebarClickable = ({ icon, text = "tooltip" }: any) => (
    <div className={styles.sidebarButton}>
        { icon }
            {/* Code below requires group and group-scale to work properly. IDK how to do that part yet*/}
            {/*<span className={styles.sidebarTooltip}>*/}
            {/*    { text }*/}
            {/*</span>*/}
    </div>
);


const Divider = () => <hr className={styles.sidebarHr} />;

const AgoraLogoComponent = () => {
    return (
        <div className={styles.agoraLogoContainer}>
            <div className={styles.agoraLogo}>
                Agora
            </div>
        </div>
    );
}

const SidebarButton = ({ icon, text = "tooltip" }: any) => {
    return (
        <div className={styles.sidebarButton}>
            <div className={styles.sidebarButtonContent}>
                { icon }

               <div className={styles.sidebarButtonText}>
                   { text }
               </div>
            </div>
        </div>
    );
}

const SidebarCategory = ({ icon, text = "tooltip" }: any) => {
    return (
        <div className={styles.sidebarCategory}>
            <div className={styles.sidebarCategoryContent}>
                { icon }

                <div className={styles.sidebarButtonText}>
                    <u>{ text } </u>
                </div>
            </div>
        </div>
    );
}

enum TrendingCategory {
    Hashtag,
    Topics
}


const TrendingCategories = ({category}: any) => {
    const hashtag: boolean = category === TrendingCategory.Hashtag;

    return hashtag ? (
    <div className={styles.trendingCategories}>
        <div className={styles.trendingCategoryContent}>
            Hashtags
        </div>
        <div className={styles.trendingCategoryContent}>
            Hashtags
        </div>
        <div className={styles.trendingCategoryContent}>
            Hashtags
        </div>
    </div>) : (
    <div className={styles.trendingCategories}>
        <div className={styles.trendingCategoryContent}>
            Topics
        </div>
        <div className={styles.trendingCategoryContent}>
            Topics
        </div>
        <div className={styles.trendingCategoryContent}>
            Topics
        </div>
    </div>);
}

export default function Sidebar() {


    const notLoggedIn = (<>
        <Divider />
    <MenuItem>
        <ListItemIcon>
            <LoginIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Login</ListItemText>
    </MenuItem>
    <MenuItem>
        <ListItemIcon>
            <PersonAddIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Sign Up</ListItemText>
    </MenuItem>
</>
    );


    return (
        // <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <Paper sx={{ width: "20vw", maxHeight: "minContent" }}>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                    {/*<Typography variant="body2" color="text.secondary">*/}
                    {/*    ⌘X*/}
                    {/*</Typography>*/}
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ForumIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>FAQ</ListItemText>
                    {/*<Typography variant="body2" color="text.secondary">*/}
                    {/*    ⌘X*/}
                    {/*</Typography>*/}
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <QuestionMarkIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Why Agora</ListItemText>
                    {/*<Typography variant="body2" color="text.secondary">*/}
                    {/*    ⌘C*/}
                    {/*</Typography>*/}
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <RecommendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Popular Categories</ListItemText>
                    {/*<Typography variant="body2" color="text.secondary">*/}
                    {/*    ⌘V*/}
                    {/*</Typography>*/}
                </MenuItem>
                {notLoggedIn}
            </MenuList>
            <br />
            <Card sx={{ maxWidth: "100%" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        {/*<Typography gutterBottom variant="h5" component="div">*/}
                        {/*    Ethan Hicks*/}
                        {/*</Typography>*/}
                        <Typography variant="body2" color="text.secondary">
                            Ethan Hicks
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
    );
}
