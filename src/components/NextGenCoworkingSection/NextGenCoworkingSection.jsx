import Button from "../../ui/Button/button";
import ImageWithTeamInfo from "./ImageWithTeamInfo ";

const NextGenCoworkingSection = () => {
    return (
        <section className="bg-black text-white py-20 px-10 md:px-20 lg:px-44">
            <div className="container ">
                <div className="grid md:grid-cols-[repeat(10,_1fr)] grid-cols-[repeat(2,_1fr)] gap-5">
                    <div className="col-start-1 col-end-5">
                        <div className="pb-32">
                            <span className="text-xs -leading-3 opacity-70">Any Size & Location</span>
                        </div>
                        <h2 className="text-5xl font-semibold mb-10">We Have Offices for any Team Size</h2>
                        <p className="mb-10 opacity-70">
                            No matter how many people you need to accommodate, we have offices that are perfect for any
                            team size, ranging from two to 2000+ people or more
                        </p>
                        <Button classes="bg-white text-black">Browse All</Button>
                    </div>
                    <ImageWithTeamInfo />
                </div>
            </div>
        </section>
    );
};

export default NextGenCoworkingSection;
