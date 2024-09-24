import LoginForm from "./_components/LoginForm";

const Login = () => {
  return (
    <section className="container px-3 xl:px-0 pt-20 pb-[120px]">
      <div className="rounded-xl border-black border bg-white p-6 md:mx-auto md:w-[636px] md:p-10">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
