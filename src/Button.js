const Button = ({ buttonText, reqType, setreqType }) => {
    return (
        <button
            className={buttonText === reqType ? "selected" : null}
            onClick={() => setreqType(buttonText)}
        >
            {buttonText}
        </button>
    )
}

export default Button