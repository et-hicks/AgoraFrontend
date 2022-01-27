import Image from "next/image";
import {AiOutlineEye, BiMessageDetail, BsPeople} from "react-icons/all";
import quokka from '../../public/quokka.jpeg'

const CardStats = ({ icon, number = 69 }: any) => (
    <div>
        { icon }
        <div>
            { number }
        </div>
    </div>
);

export default function ThreadContentCard() {
    return (
        <div>

            <Image
                alt="cute quake"
                src={quokka}
                height={80}
                width={120}
            />
            <div>
                Conversation Title
            </div>
            <div>
                Description description description
            </div>
            <CardStats icon={<BsPeople size="20" /> } />
            <CardStats icon={<AiOutlineEye size="20" /> } />
            <CardStats icon={<BiMessageDetail size="20" /> } />
        </div>
    );
}