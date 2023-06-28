import { footerOptions } from "../../data";
import SubscribeForm from "./SubscribeForm";
import FooterItem from "./footerItem";

const Footer = () => {
    return (
        <footer className="py-20 px-10 md:px-20 lg:px-44">
            <div className="container flex justify-between md:flex-row flex-col md:gap-0 gap-10">
                <SubscribeForm />
                <div className="flex gap-10 justify-between md:justify-start">
                    {footerOptions.map((footerItem, index) => (
                        <FooterItem title={footerItem.title} options={footerItem.options} key={index} />
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
