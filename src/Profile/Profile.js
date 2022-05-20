import PropTypes from 'prop-types'
const Profile = (props) => {
    const style = {color: "teal", fontWeight: "bold"}
    
    return ( 
       <>
         <p style={style}>Full Name: {props.fullName} </p>
         <p>Bio: {props.bio} </p>
         <p>Profession: {props.profession} </p>
         <div style={style}>{props.children}</div>
         <button onClick={props.handleClick}>Alert</button>
        </>
     );
  
}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    children: PropTypes.any
}
Profile.defaultProps = {
    fullName: "Mounir",
    profession: "Web developer",
    bio: "I am creative web developer..",
}
 
export default Profile;