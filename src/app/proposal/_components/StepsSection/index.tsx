import React from "react";

import { Step } from "../../type";

import StepItem from "./StepItem";

const steps: Step[] = [
  {
    id: 1,
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/1abc8e8d-7d44-45d9-b84e-95affacc1f40.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=fO0JS3s5YrMH%2BZiclL7dWvG8UxRwwXZDrzkTVlHqokjFPI%2BkAZlnIyAw21leTtch5RrUvSq2nSbrqWZ%2BEn6tzx6TVK%2BCAtxtqi0K7qwP3OQLgxjlVXpPsXM9frDt5nLraIgC3VT20gx%2FskiCQUj8mryx1fprZK9HmqjAPSXB%2F2bHY4llUr9vJAkexaQxF7QTJN8eTJlqLRkSWUC%2BoSnkEpWHlx85OrSYDto3woxNnlVGJLSn%2FLUvs8lWygYFjc2FhAVzh6wkyw5f12hL5D%2Bt65%2F7lMR6xvGEje6Ros4TpfW4EwAJN4i0E65YtnghtJg9PQQvBZAuwMFZY80QurJKOA%3D%3D",
    title: "挑選提案類型",
    description: "確認你的項目屬於哪種類型，選擇合適的募資形式與平台規則，確保符合平台的規範和受眾需求。",
  },
  {
    id: 2,
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/112f7d7c-de77-4e10-9676-b7fcf601942c.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=YgF5RkxopOhTcQxk2%2FhodccGNCF%2FYi1CktEXjhZrvKW38FejBqyTHO2y0RFBteMGQmDGpOXl4RxxT6gzV2HR24%2BVQQdV3RWxi0QUtTmdlNlStdmyo8aFyBfQW7wpJuI45CZ%2BPY6YMPpP%2FKv%2BPh0H5xK%2Bb0IM5FUI3lI6d7CsJCWWHpvDw%2BZex9sZUVwy%2BQ7EkTTP%2BNm06lCGHVI0aY2TKz4rs9tyDZbyl4hqPTFe1aikElhZEbFFZKn2Mc8UJv62WJPywySJ1SglanAQH2yqjhLj9Q4AeRLPJCE5N7CADCp%2B11qE12WZD6eUpIKfa1LthE7DmIMQGyjFMKOWNyhRkg%3D%3D",
    title: "填寫提案內容",
    description:
      "以吸引人的方式呈現你的提案，包含項目背景、故事、目標，以及實現計畫，並使用圖片、影片和文字來強化提案的吸引力與透明度。",
  },
  {
    id: 3,
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/3a56d051-407e-4b3a-a5f5-e293c1f6d2af.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=ChwGr9FfVit8CdBq7A%2B89Sy24mqZV14H1HoHcOhupUbYzxzuJ%2FbLI3WcC2uc1RTI%2BPBC0xh9XrtqYho5lj4JJeFgJA3b7paCoS8kbBWNFe91UR9l%2FQwLTDiUB0FK1XMOEtL3fI%2BrRHJluJxGLcRd8q0E6qTh6OMQH83l2195hXsSsF%2Fa4SWZo56LMtwfb9DmGoYlQzdPtJVaOpIPZJqSSf5hgN775GYyHQ8raJIfiKSdNy39T7tjRSWyOq9F0L%2BBo606gaUz005unrQTgiM%2BVauzemG4nnJkcwXXvdFlTLQZmc%2BFsJIezZZ3d6BSgmI1c%2F0BJNpuiiYKfmwQ14KXwA%3D%3D",
    title: "設定金流",
    description: "選擇適合的付款處理方式，提供支持者方便且安全的付款途徑，同時確認與平台相關的手續費及收款流程。",
  },
  {
    id: 4,
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/bd94e651-01a9-42a3-b322-4feaf78f61d4.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=u5efO6WP1OOJiyqrVWzdQPscphkk0qnhkKzrNX2RLQA0VKa0GKr7UoOnX3AaHR2o2Wut6KYWiN%2FYXZodJoA%2FrUd8Qwk7PFTZ6LGcqfYoVSlJdDnwRxMP%2BY0NOgqt3Kc5hfBa2WSW15AMtrSh20CfmuFAqvKl3ct5JolIRs0o%2BdXg3OKtmrQJvjgqrurRqTYeK%2FJW1%2FN24iz8ZSCFZRb9J6x7FPeh4kc%2BB5Cp9gJ7YV%2FbBZYIifBQwzmnbZyemb8YU0HLzPpnrnv6pPaBdI%2FrRrokvHIySiuU2vw%2B%2FyW1Sb5Ik0USCCwSZI6PTdXp0iq5WGi6axNJCc8Z57Kl6pDRoA%3D%3D",
    title: "完善計劃回饋方案",
    description:
      "設計清晰且有吸引力的回饋層級，涵蓋不同支持金額對應的回饋內容，例如產品、服務或獨家體驗，以激勵更多人參與。",
  },
  {
    id: 5,
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/a0b5fc5b-f1ce-4cf9-b58c-0f68044a1525.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=z1rYyCUZAJ6R996e%2BVZ8xRuYfz%2FL%2BJz9GBm8uxdJUFpkTHSzA4k5qyTRf75M1RJcAJaIZHTyLER2ByVtUdK6nIaB8lam%2FjYxWYhdXqQkP07NXUZtQNh1iyRxghgK0fvMhjpWOgB8N1%2BFqWGDu66RLvu5zUbVa0t11JVwnidXHMwNO4FIdK7GpRmaBcjHm%2Fa%2BjJezmTQlHU4hAbOvATsluzDtVClSk8yMf2Q4ilUrBCxTquyHP0NWvyg3QP0Nqog%2FRsXT9T8GHOt5KLsCGth3b6Kh2Oa0aYfIHMs43mW0xCx%2BSH%2Bi7JNJJKBaU3NYGYuNspglhbDjIlzaDymIBGxoJA%3D%3D",
    title: "提交送審",
    description: "將完整提案提交至募資平台，配合平台審核流程，根據要求進行修改或補充，確保符合所有規範後正式上線。",
  },
  {
    id: 6,
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/8a7e9bf4-0cfb-49ee-be78-6e42ff2e533b.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=nhKJPIxPFl13CjYjLLspJYgU1Eh0xVuCe4YwvAdb1o6sWfW5Z%2BYwav%2BoUeJ0yX94jhs7SyE3DJ8S2sxMS0QYj0ZH2QMS8H%2B9yzHmZmuWghhM0hanl5tLcbT%2BQ%2F40PlMCtbpikrbyNNAKXL9QrbOYeLlToZOVttY8u6uWnBg0j3i5aifz2J%2F0PND0IHa4A5X4JWKJ7OguJUa94UeInQJgaXq6noDFIVmpUEoGtliB9MY5EMuD%2FnwlAj46%2F2GKMyEr5L6S1nutfaFoAVpPYa9%2BM157kdL8z6oyj3lLhbflTgEr5ZznIR4oGgzcE0k%2F8OAT2Q6QXvZH0lCES75Tw2WVkg%3D%3D",
    title: "開始募資",
    description:
      "公布提案並啟動募資，透過宣傳與行銷活動推廣你的項目，積極與支持者互動，並隨時更新進展以保持支持者的參與感。",
  },
];

const StepsSection = () => {
  return (
    <section className="container flex flex-col gap-5 py-10 md:gap-10 md:py-20">
      <div className="text-center text-xl font-bold md:text-4xl">募資步驟</div>
      <div className="mx-3 grid gap-6 md:mx-0 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
        {steps.map((step) => (
          <StepItem key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
