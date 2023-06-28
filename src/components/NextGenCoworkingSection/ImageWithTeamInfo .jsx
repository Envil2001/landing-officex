import woomenWorkImage from "../../assets/woomenWork.jpg";
import TeamInfoBlock from "./TeamInfoBlock ";

const ImageWithTeamInfo = () => {
    return (
        <div className="col-start-7 col-end-11 relative  md:block hidden">
            <img src={woomenWorkImage} alt="" className="rounded-3xl h-full object-cover" />
            <div className="absolute bottom-5 -left-20">
                <TeamInfoBlock title="For Small Teams" description="2-8 people" />
                <TeamInfoBlock title="For Medium Teams" description="20-80 people" />
                <TeamInfoBlock title="For Large Teams" description="200-800 people" />
            </div>
        </div>
    );
};

export default ImageWithTeamInfo;
