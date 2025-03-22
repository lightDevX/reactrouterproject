const User = ({ user }) => {
  const { name, phone, email } = user;
  console.log(user);
  return (
    <div className="space-y-3.5 rounded-2xl border border-amber-200 p-4">
      <h1>Name: {name}</h1>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
