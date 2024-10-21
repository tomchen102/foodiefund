import Image from "next/image";

const Logo = () => {
  return (
    <a href="/" className="logo-link mr-auto flex items-center p-3 font-bold">
      <div className="relative mr-2 inline-block h-6 w-6">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/logo.png?alt=media&token=50bbd619-ec49-441c-9030-501c4826fb69"
          fill
          sizes="24px"
          className="logo object-contain"
          alt="FoodieFund logo"
        />
      </div>
      眾資成城
    </a>
  );
};

export default Logo;
