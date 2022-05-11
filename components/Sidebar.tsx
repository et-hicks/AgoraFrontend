import styles from '../styles/Sidebar.module.css'
// import {FaHome} from 'react-icons/fa';
// import {AiOutlineQuestionCircle, BiHash, MdOutlineSubject} from "react-icons/all";
import dynamic from "next/dynamic";
import {ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography} from "@mui/material";
import {Cloud, ContentCopy, ContentCut, ContentPaste} from "@mui/icons-material";

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
    // return (
    //     <div className={styles.sidebarContainer}>
    //         {/*<AgoraLogoComponent />*/}
    //         <SidebarButton icon={ <FaHome size="20" />} text={"Home"}/>
    //         <SidebarButton icon={ <AiOutlineQuestionCircle size="20" />} text={"Why Us"}/>
    //         <SidebarButton icon={ <MdOutlineSubject size="20" />} text={"About"}/>
    //         <br />
    //         <br />
    //         <SidebarCategory icon={ <BiHash /> } text={"Trending Topics"}/>
    //         <TrendingCategories category={TrendingCategory.Hashtag} />
    //         <SidebarCategory icon={ <BiHash /> } text={"Trending Hashtags"}/>
    //         <TrendingCategories category={TrendingCategory.Topics} />
    //         <TrendingCategories category={TrendingCategory.Hashtag} />
    //
    //
    //     </div>
    // )
    return (
        // <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <Paper sx={{ width: "minContent" }}>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘X
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘C
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘V
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Web Clipboard</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}
