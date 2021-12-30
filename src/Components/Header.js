// import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log("onClick from Header Component")
    }

    return (
        <>
            <header className='header'>
                <h1>Task Tracker </h1>
                <Button text="Add" bgColor="green" onClick={onClick}/>
            </header>
        </>
    )
}

// Header.propTypes = {
//     authorName: PropTypes.string.isRequired,
// }

// const headerStyles = {
//     backgroundColor: 'black', 
//     color: 'white',
//     textAlign: 'center',
//     textTransform: 'uppercase',
// }

export default Header