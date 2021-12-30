import PropTypes from 'prop-types'

const Button = ({ text, bgColor, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: bgColor}} className="btn"> {text} </button>
    )
}

Button.defaultProps = {
    bgColor: 'black', 
    text: 'Submit'
}

Button.propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button