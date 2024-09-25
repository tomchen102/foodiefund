import LoginForm from "./_components/LoginForm";

const Login = () => {
  return (
    <section className="container px-3 pb-[120px] pt-20 xl:px-0">
      <div className="rounded-xl border border-black bg-white p-6 md:mx-auto md:w-[636px] md:p-10">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
