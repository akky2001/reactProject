import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd,showAdd}) => {

  const onClick = () =>{
  }
  return (
    <header className='header'>
        <h1  style={{ color: 'white' }}>{title}</h1>
        <Button color={showAdd ? '#444140' : 'grey'} text={showAdd ? 'close' : 'Add'} onClick={onAdd}/>
        {/* <Button color='red' text='Hell'/>
        <Button color='grey' text='Helo'/> */}
    </header>
  )
}
Header.defaultProps = {
     title : 'Task Tracker'
}

Header.propTypes= {
    title : PropTypes.string.isRequired,
}

// const HeadingStyle = {
//     color:'red',
//     backgroundColor : 'black'
// }

export default Header
