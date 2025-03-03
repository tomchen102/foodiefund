import React from "react";

import CategorySection from "./_components/CategorySection";
import ComparisonSection from "./_components/ComparisonSection";
import FaqSection from "./_components/FaqSection";
import StepsSection from "./_components/StepsSection";

const Proposal = () => {
  return (
    <>
      <section>
        <div className="absolute h-[30rem] w-full bg-black/40 md:h-[31.25rem]"></div>
        <div className="absolute top-[25rem] flex w-full flex-col gap-4 text-center text-white md:left-[12.5rem] md:text-left">
          <div className="text-2xl font-bold md:text-5xl">我要提案</div>
          <div className="font-bold md:text-2xl">集眾人之力，成就非凡未來！</div>
        </div>
        <div className="h-[30rem] bg-[url(https://storage.googleapis.com/fir-express-80358.appspot.com/images/57145468-9d95-4337-8d04-3252f2d26e32.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=tjsd1L9SWCieqNkzKelDlg6L%2FuGKpKNBkEc6l0ZYKatrs%2Fs897i7Refk6KTkNjJhDFajjLOBCxIwsQKc%2BY0vqqHbimk1m0tD0BsKGRLa8xc4kF0pOhVVjmkPLBWdhEc5yLRSQ1OQdrUvOeum0kM2gdTTgWFun7DZIh4%2BRUZCftwJpH4BYbMRngfTfwgl%2BU8udJEmcEQpLrWfBzRsXxKAaIT3o3I5Gp8VW%2BMgumjRc31%2BFkn6y%2BZWfG3uKb58Z3jRleouHtRvgFI6gIW%2B2BtrK14fqR7pf3cFZs4pkNd9a8ID1rm3gcYgi0SBW%2BUGSSnqs0MicATeA%2FtuX%2F7GNmuASw%3D%3D)] bg-cover bg-center md:h-[31.25rem]"></div>
      </section>
      <CategorySection />
      <StepsSection />
      <ComparisonSection />
      <FaqSection />
    </>
  );
};

export default Proposal;
