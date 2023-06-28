import officeStudioImage from "../assets/officeStudio.jpeg"
import Button from "../ui/Button/button";


const VisitCoworkingSpacesSection = () => {

    return (
        <section style={{ backgroundImage: `url(${officeStudioImage})` }} className="bg-no-repeat bg-cover bg-center px-10">
            <div className="container py-32 text-center max-w-2xl">
                <h1 className="text-white font-semibold text-5xl md:text-6xl text-center">Come and visit our coworking spaces today!</h1>
                <Button classes="text-black bg-white mt-16">
                    Browse All
                </Button>
            </div>
        </section>
    )
}


export default VisitCoworkingSpacesSection;