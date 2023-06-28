import React from "react";

const FooterItem = ({ title, options }) => {
    return (
        <div className="flex flex-col">
            <h4 className="font-semibold text-lg mb-10 opacity-60">{title}</h4>
            {options.map((option, index) => (
                <span className="font-medium text-sm hover:font-bold transition-all duration-500 cursor-pointer" key={index}>
                    {option.text}
                </span>
            ))}
        </div>
    );
};

export default FooterItem;