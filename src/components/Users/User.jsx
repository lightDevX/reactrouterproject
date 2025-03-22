import { Link } from "react-router";

const User = ({ user }) => {
  const { name, phone, email, id } = user;
  console.log(user);
  return (
    <div className="space-y-3.5 rounded-2xl border border-amber-200 p-4">
      <h1 className="text-xl font-semibold text-red-400">Name: {name}</h1>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <Link
        to={`/user/${id}`}
        className="rounded-2xl bg-neutral-800/30 px-6 py-2.5"
      >
        Show more details
      </Link>
    </div>
  );
};

export default User;
