import styles from '../styles/Sidebar.module.css'
// import {FaHome} from 'react-icons/fa';
// import {AiOutlineQuestionCircle, BiHash, MdOutlineSubject} from "react-icons/all";

// TODO: Place the sidebar component in a different area of the codebase as the code expands (for codebase scalability reasons)


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
    return (
        <div className={styles.sidebarContainer}>
            <AgoraLogoComponent />
            {/*<SidebarButton icon={ <FaHome size="20" />} text={"Home"}/>*/}
            {/*<SidebarButton icon={ <AiOutlineQuestionCircle size="20" />} text={"Why Us"}/>*/}
            {/*<SidebarButton icon={ <MdOutlineSubject size="20" />} text={"About"}/>*/}
            <br />
            <br />
            {/*<SidebarCategory icon={ <BiHash /> } text={"Trending Topics"}/>*/}
            {/*<TrendingCategories category={TrendingCategory.Hashtag} />*/}
            {/*<SidebarCategory icon={ <BiHash /> } text={"Trending Hashtags"}/>*/}
            <TrendingCategories category={TrendingCategory.Topics} />
            <TrendingCategories category={TrendingCategory.Hashtag} />
            <TrendingCategories category={TrendingCategory.Topics} />
            <TrendingCategories category={TrendingCategory.Hashtag} />
            <TrendingCategories category={TrendingCategory.Topics} />
            <TrendingCategories category={TrendingCategory.Hashtag} />
            <TrendingCategories category={TrendingCategory.Topics} />


        </div>
    )
}
