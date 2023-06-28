import { AiOutlineUser } from "react-icons/ai";

const TeamInfoBlock = ({ title, description }) => {
    return (
        <div className="bg-[#f5f5f5] p-5 rounded-3xl flex mb-5 gap-2">
            <div className="flex items-center justify-center rounded-full bg-white w-10 h-10">
                <AiOutlineUser color="black" />
            </div>
            <div>
                <h4 className="text-black text-sm font-semibold">{title}</h4>
                <p className="text-black text-xs opacity-70">{description}</p>
            </div>
        </div>
    );
};

export default TeamInfoBlock;
