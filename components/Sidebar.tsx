import styles from '../styles/Sidebar.module.css'
import {BsPlus, BsFillLightningFill, BsGearFill, BsSearch} from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

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

const SidebarText = ({ tsx }: any) => (
    <div className={styles.sidebarText}>
        { tsx }
    </div>
);

const Divider = () => <hr className={styles.sidebarHr} />;


export default function Sidebar() {
    // TODO: Make the sidebar scrollable between the my categories and the popular categories
    // TODO: Change the search to input
    // TODO: Make a "Discover Hashtags" Button (and page)
    // TODO: Make a "Discover Topics" Button (and page)
    // TODO: Make a "Discover Creators" Button (and page)
    return (
        <>
            <div className={styles.sidebar}>
                <SidebarClickable icon={ <p> Home </p> } />
                <SidebarClickable icon={ <BsSearch size="20" />} />
                <Divider />
                <SidebarText tsx={<p> My Topics </p>} />
                <SidebarClickable icon={<BsPlus size="32" />} />
                <SidebarClickable icon={<BsFillLightningFill size="20" />} />
                <SidebarClickable icon={<FaPoo size="20" />} />
                <Divider />
                <SidebarText tsx={<p> Trending Hashtags </p>} />
                <SidebarClickable icon={<BsPlus size="32" />} />
                <SidebarClickable icon={<BsFillLightningFill size="20" />} />
                <SidebarClickable icon={<FaPoo size="20" />} />
                <Divider />
                <SidebarClickable icon={<BsGearFill size="22" />} />
            </div>
        </>
    )
}
