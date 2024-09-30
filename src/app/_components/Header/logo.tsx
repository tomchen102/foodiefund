import Image from "next/image";

const logo = () => {
  return (
    <a href="/" className="logo-link mr-auto flex items-center p-3 font-bold">
      {/* Add Hero Images Here */}
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/logo.png?alt=media&token=50bbd619-ec49-441c-9030-501c4826fb69"
        width={24}
        height={24}
        className="logo mr-2 inline-block"
        alt="Screenshots of the dashboard project showing desktop version"
      />{" "}
      眾資成城
    </a>
  );
};

export default logo;
