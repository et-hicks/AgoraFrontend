import {AiOutlineEye, BiMessageDetail, BsPeople} from "react-icons/all";
import {Grid} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {blue} from "@mui/material/colors";

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

const CardStatsGridVersion = () => {
    return <>
        <Grid container direction="row" alignItems="center">
            <Grid item>
                <DeleteIcon  sx={{ color: blue[200] }}/>
            </Grid>
            <Grid item>
                revolve
            </Grid>
        </Grid>
    </>
}

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
    CardStatsGridVersion,
    CardStatsPeople,
    CardStatsOutlineEye,
    CardStatsMessageDetail
}
