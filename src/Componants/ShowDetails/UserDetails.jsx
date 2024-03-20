import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div className="border-2 border-green-500 rounded-xl">
      <h2 className="text-4xl">this is details page</h2>
      <h2 className="text-3xl"> name : {name}</h2>
      <h1 className="text-3xl ">
        website : <span className="font-extrabold">{website}</span>
      </h1>
    </div>
  );
};

export default UserDetails;
