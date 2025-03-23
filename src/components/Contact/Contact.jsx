const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const email = target.email.value;

    console.log("Email:" + " " + email + " " + "Name:" + name);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <h1>Contact Page</h1>

        <div className="col-span-2 mx-auto w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-3">
              <label htmlFor="name" className="pl-2.5 text-xl font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Provide your name"
                className="rounded-2xl border border-neutral-900/20 px-2.5 py-3 focus:outline focus:outline-red-300"
                autoComplete="off"
              />
            </div>
            <div className="mt-4 flex flex-col space-y-3">
              <label htmlFor="email" className="pl-2.5 text-xl font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Provide your Email"
                className="rounded-2xl border border-neutral-900/20 px-2.5 py-3 text-red-500 focus:outline focus:outline-red-300"
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="mt-3 rounded-2xl bg-cyan-300 px-6 py-2.5 text-2xl text-neutral-900/70"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
