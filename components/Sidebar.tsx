import styles from '../styles/Sidebar.module.css'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

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

    return (
        <>
            <div className={styles.sidebar}>
                <SidebarClickable icon={ <p> Home </p> } />
                <Divider />
                <SidebarText tsx={<p> Categories </p>} />
                <SidebarClickable icon={<BsPlus size="32" />} />
                <SidebarClickable icon={<BsFillLightningFill size="20" />} />
                <SidebarClickable icon={<FaPoo size="20" />} />
                <Divider />
                <SidebarClickable icon={<BsGearFill size="22" />} />
            </div>
        </>
    )
}
