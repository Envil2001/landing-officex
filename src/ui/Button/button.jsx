import "./button.css"


const Button = ({ isDisabled = false, children, Icon, onClick, stylesElement, type = "button", classes = ""}) => {

    return (
        <button
            type={type}
            style={stylesElement}
            className={`button ${classes && classes}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button;