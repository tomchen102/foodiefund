import React from "react";
import Image from "next/image";

const logo = () => {
    return (
        <a href="index.html" className="flex items-center font-bold p-3 mr-auto logo-link">
          {/* Add Hero Images Here */}
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/logo.png?alt=media&token=50bbd619-ec49-441c-9030-501c4826fb69"
            
            width={24}
            height={24}
            className="inline-block mr-2 logo"
            alt="Screenshots of the dashboard project showing desktop version"
          /> 眾資成城
          </a>

            
  );
};

export default logo;