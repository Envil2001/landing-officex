import { useRef, useState } from "react"
import Button from "../../ui/Button/button"
import { AiOutlineDown } from 'react-icons/ai'
import { filterData } from "../../data";
import useOnClickOutside from "../../hooks/useOnclickOutside";

export const Filter = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const dropdownRef = useRef(null);

    const handleToggleDropDown = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const handleOutsideClick = () => {
        setActiveIndex(null);
    };

    useOnClickOutside(dropdownRef, handleOutsideClick);

    return (
        <form className="bg-white rounded-full px-2 inline-flex flex-wrap">
            {
                filterData.map((filterItem, index) => (
                    <div className="relative border-r border-[#d7d7d7] last-of-type:border-none " key={index}>
                        <div
                            className="flex items-center gap-24 px-5 cursor-pointer h-full"
                            onClick={() => handleToggleDropDown(index)}
                        >
                            <span>{filterItem.title}</span>
                            <AiOutlineDown />
                        </div>
                        {activeIndex === index &&
                            <div
                                ref={dropdownRef}
                                className="absolute bg-white rounded-2xl left-0 top-full overflow-auto max-h-36 py-2 mt-2 w-full"
                            >
                                {filterItem.options.map((option, index) => (
                                    <span
                                        key={index}
                                        className="cursor-pointer h-8 flex items-center hover:bg-slate-50 px-5"
                                    >
                                        {option}
                                    </span>
                                ))}
                            </div>
                        }
                    </div>
                ))
            }
            <Button classes="bg-black text-white my-2 ml-2">Search Now</Button>
        </form>
    );
};