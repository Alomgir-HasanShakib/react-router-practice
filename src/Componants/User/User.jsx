import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const {id, name, email, phone } = user;
  return (
    <div className="border-2 p-5 rounded-lg mb-5 border-green-500">
      <h2 className="text-3xl text-green-800 font-bold">{name}</h2>
      <h4>{email}</h4>
      <h4>{phone}</h4>
      <Link to={`/user/${id}`}>
        <button  className="bg-green-600 px-4 py-2 m-2 rounded-full text-white font-bold hover:bg-green-900">
          Show details
        </button>
      </Link>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object,
};
export default User;
