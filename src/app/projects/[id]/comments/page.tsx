import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CommentForm from "./_components/CommentForm";
import Badges from "@/components/Badges";
import ReplyForm from "./_components/Reply";

const commentsData = [
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
const Comments = () => {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold lg:text-2xl">留言 (8)</h2>
      </div>
      <CommentForm />
      <ul>
        {commentsData.map((comment) => (
          <li key={comment.id} className="mb-5 bg-gray-100">
            <article className="mx-6 rounded-lg bg-gray-100 py-6 lg:p-6">
              <footer className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarImage src={comment.avatar} alt={comment.name} />
                    <AvatarFallback>大頭貼</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="mb-2 font-bold">{comment.name}</p>
                    <p className="text-sm">
                      <time dateTime={comment.date} title={comment.date} className="text-gray">
                        {comment.date}
                      </time>
                    </p>
                  </div>
                </div>
              </footer>
              <p className="text-gray-500">{comment.content}</p>
              {comment.replies.length ? null : <ReplyForm />}
            </article>
            {comment.replies.map((reply, index) => (
              <article key={reply.id} className="mx-6 ml-6 rounded-lg bg-gray-100 pb-6 lg:ml-12">
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="mr-3">
                      <AvatarImage src={reply.avatar} alt={reply.name} />
                      <AvatarFallback>大頭貼</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="mb-2 flex items-center font-bold">
                        {reply.name} {reply.badge && <Badges text={reply.badge} className="ml-2" />}
                      </p>
                      <p className="text-sm">
                        <time dateTime={reply.date} title={reply.date} className="text-gray">
                          {reply.date}
                        </time>
                      </p>
                    </div>
                  </div>
                </footer>
                <p className="text-gray-500">{reply.content}</p>
                {index === comment.replies.length - 1 && <ReplyForm />}
              </article>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Comments;
