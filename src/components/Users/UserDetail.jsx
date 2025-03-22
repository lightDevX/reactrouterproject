import { useLoaderData, useNavigate } from "react-router";

const UserDetail = () => {
  const userDetail = useLoaderData();

  const { name } = userDetail;

  // Navigate route used

  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>User Name: {name}</h2>
      <button
        onClick={handleBackBtn}
        className="rounded-2xl bg-neutral-800/30 px-6 py-2"
      >
        Back
      </button>
    </div>
  );
};

export default UserDetail;
