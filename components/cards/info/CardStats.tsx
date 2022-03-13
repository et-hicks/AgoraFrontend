import {AiOutlineEye, BiMessageDetail, BsPeople} from "react-icons/all";

const CardStats = ({ icon, number = 69 }: any) => (
    <div>
        <div>
            { icon }
        </div>
        <div>
            { number }
        </div>
    </div>
);

const CardStatsPeople = () => {
    return (
        <CardStats icon={<BsPeople size="20" /> } />
    );
}
const CardStatsOutlineEye = () => {
    return (
        <CardStats icon={<AiOutlineEye size="20" /> } />
    );
}

const CardStatsMessageDetail = () => {
    return (
        <CardStats icon={<BiMessageDetail size="20" />} />
    );
}


export default CardStats;

export {
    CardStatsPeople,
    CardStatsOutlineEye,
    CardStatsMessageDetail
}
