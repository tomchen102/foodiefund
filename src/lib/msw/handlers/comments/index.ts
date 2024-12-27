import { http, HttpResponse } from "msw";

import { commentFormSchema } from "@/schema/commentsSchema";

import { allComments } from "./data";
export const CommentsHandlers = [
  // 攔截對 comments 的 GET 請求
  http.get("/comments", () => {
    return HttpResponse.json({
      success: true,
      data: allComments,
      message: "Fetch successful",
      code: 0,
    });
  }),

  // 攔截對 comments 的 POST 請求
  http.post("/comments", async ({ request }) => {
    const newComment = (await request.json()) as {
      plan_id: string;
      content: string;
    };

    // 驗證數據格式
    const parseResult = commentFormSchema.safeParse(newComment);
    if (!parseResult.success) {
      return HttpResponse.json(
        {
          success: false,
          message: "數據格式錯誤",
          code: 400,
          errors: parseResult.error.errors,
        },
        { status: 400 }
      );
    }

    // 確保 `plan_id` 和 `content` 不為空
    if (!newComment.plan_id || !newComment.content) {
      return HttpResponse.json(
        {
          success: false,
          message: "必填數據缺失",
          code: 400,
        },
        { status: 400 }
      );
    }

    // 查找對應的計畫 (plan_id)
    const commentData = allComments.find((comment) => comment.plan_id === newComment.plan_id);

    if (commentData) {
      // 若找到對應的計畫，新增評論
      commentData.comments.push({
        id: crypto.randomUUID(),
        avatar: "https://example.com/avatar.png",
        name: "New User",
        publicAt: new Date().toISOString(),
        content: newComment.content,
        replies: [],
        comment_id: crypto.randomUUID(),
      });
    } else {
      // 若找不到對應的計畫，新增新的計畫及評論
      allComments.push({
        plan_id: newComment.plan_id,
        comments: [
          {
            id: crypto.randomUUID(),
            avatar: "https://example.com/avatar.png",
            name: "New User",
            publicAt: new Date().toISOString(),
            content: newComment.content,
            replies: [],
            comment_id: crypto.randomUUID(),
          },
        ],
        pagination: {
          currentPage: 1,
          totalPages: 1,
          pageSize: 10,
        },
      });
    }

    return HttpResponse.json(
      {
        success: true,
        data: allComments,
        message: "新增成功",
        code: 0,
      },
      { status: 201 }
    );
  }),

  // 攔截對 reply 的 POST 請求
  http.post("/comments_reply", async ({ request }) => {
    const newReply = (await request.json()) as {
      plan_id: string;
      content: string;
      comment_id: string;
    };

    // 驗證數據
    const parseResult = commentFormSchema.safeParse(newReply);
    if (!parseResult.success) {
      return HttpResponse.json(
        {
          success: false,
          message: "數據格式錯誤",
          code: 400,
          errors: parseResult.error.errors,
        },
        { status: 400 }
      );
    }

    // 確保 `plan_id` 和 `content` 不為空
    if (!newReply || !newReply.plan_id || !newReply.content) {
      return HttpResponse.json(
        {
          success: false,
          message: "必填數據缺失",
          code: 400,
        },
        { status: 400 }
      );
    }

    // 查找對應的計畫 (plan_id)
    const commentData = allComments.find((comment) => comment.plan_id === newReply.plan_id);
    console.log("commentData-------------------", newReply);

    if (commentData) {
      // 若找到對應的計畫，新增回覆到對應的評論
      const comment = commentData.comments.find((c) => c.comment_id === newReply.comment_id);
      console.log("comment-------------------", comment);

      if (comment) {
        comment.replies.push({
          id: crypto.randomUUID(),
          avatar: "https://example.com/avatar.png",
          name: "New User",
          publicAt: new Date().toISOString(),
          content: newReply.content,
          commentRule: "贊助人",
        });
      } else {
        return HttpResponse.json(
          {
            success: false,
            message: "找不到對應的評論",
            code: 404,
          },
          { status: 404 }
        );
      }
    } else {
      return HttpResponse.json(
        {
          success: false,
          message: "找不到對應的計畫",
          code: 404,
        },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        success: true,
        data: allComments,
        message: "新增成功",
        code: 0,
      },
      { status: 201 }
    );
  }),
];
