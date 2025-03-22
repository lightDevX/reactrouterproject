import { useLoaderData } from "react-router";

const UserDetail = () => {
  const userDetail = useLoaderData();

  const { name } = userDetail;

  return (
    <div>
      <h2>User Name: {name}</h2>
    </div>
  );
};

export default UserDetail;
