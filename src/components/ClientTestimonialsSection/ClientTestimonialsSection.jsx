
import teamImage from "../../assets/team.jpg"
import { Filter } from "../Filter/filter";

const ClientTestimonialsSection = () => {

    return (
        <section style={{ backgroundImage: `url(${teamImage})` }} className="bg-no-repeat bg-cover bg-center px-10 md:px-20 lg:px-44 py-16"  >
            <div className="container">
                <div className="mb-10">
                    <h1 className="text-7xl md:text-[200px] font-semibold text-white leading-[1.2]">Officex</h1>
                    <h2 className="text-white text-xl lg:text-4xl font-semibold">Find Your Next</h2>
                    <h2 className="text-white text-xl lg:text-4xl font-semibold mb-5">Coworking Office</h2>
                    <span className="text-white text-xs">Find & Make your interior really stand out from the box</span>
                </div>
                <Filter />
            </div>
        </section>
    )
}


export default ClientTestimonialsSection;