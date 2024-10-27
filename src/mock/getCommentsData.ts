import { CommentProps } from "@/app/projects/[id]/comments/_components/types";

export const getCommentsData = async (): Promise<CommentProps[]> => {
  return [
    {
      id: 1,
      avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
      name: "Michael Gough",
      date: "2024/08/10 13:53",
      content: "你們的特色是甚麼?",
      replies: [
        {
          id: 1,
          avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
          name: "兔寶寶溜滑梯",
          date: "2024/08/10 13:53",
          content: "您好，介紹我們都寫得很清楚囉!",
          badge: "贊助人",
        },
      ],
    },
    {
      id: 2,
      avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
      name: "Bonnie Green",
      date: "2022-03-12 13:53",
      content: "你們的餐廳會開在哪裡?",
      replies: [
        {
          id: 1,
          avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
          name: "兔寶寶溜滑梯",
          date: "2024/08/10 13:55",
          content: "您好，介紹我們都寫得很清楚囉!",
          badge: "贊助人",
        },
        {
          id: 2,
          avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
          name: "Bonnie Green",
          date: "2024/08/10 13:55",
          content: "我就是不清楚才問你們...",
        },
      ],
    },
    {
      id: 3,
      avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
      name: "Helene Engels",
      date: "2022-06-23 13:53",
      content: "贊助你們有甚麼回饋?",
      replies: [
        {
          id: 1,
          avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
          name: "兔寶寶溜滑梯",
          date: "2024/08/10 13:55",
          content: "您好，介紹我們都寫得很清楚囉!",
          badge: "贊助人",
        },
      ],
    },
    {
      id: 4,
      avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
      name: "Helene Engels",
      date: "2022-06-23 13:53",
      content: "贊助你們有甚麼好處?",
      replies: [],
    },
  ];
};
