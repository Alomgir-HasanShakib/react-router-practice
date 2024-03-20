import PropTypes from 'prop-types';
const User = ({user}) => {
    const {id, name, email, phone} = user
  return (
    <div className='border-2 p-5 rounded-lg mb-5 border-green-500'>
        <h2 className='text-3xl text-green-800 font-bold'>{name}</h2>
        <h4>{email}</h4>
        <h4>{phone}</h4>
    </div>
  )
}
User.propTypes = {
    user:PropTypes.object
}
export default User