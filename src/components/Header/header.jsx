import { useState } from 'react';
import { menuData } from "../../data";
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="left-0 top-0 absolute w-full z-50 py-5 px-10 md:px-20 lg:px-44"  >
            <div className="container">
                <div className="hidden md:flex justify-between items-center">
                    {menuData.map((item, index) => (
                        <span className="text-white text-base hover:opacity-50 transition-all duration-500 cursor-pointer" key={index}>
                            {item.title}
                        </span>
                    ))}

                </div>
                <div className="md:hidden">
                    <AiOutlineMenu onClick={toggleMenu} color="white" size={30} className="cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                        <AiOutlineClose color="white" onClick={toggleMenu} className="absolute top-4 right-4 cursor-pointer" />
                        <ul className="text-white text-center">
                            {menuData.map((item, index) => (
                                <li key={index} className="mb-6">
                                    <span className="cursor-pointer text-base hover:opacity-50 transition-all duration-500">{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
