import { UserNewsListResponseType } from "@/api/services/userNews/types";
import { http, HttpResponse } from "msw";
import { allUserNews } from "./data";

export const userNewsHandlers = [
  // 攔截對 /userNews 的 GET 請求
  http.get("/userNews", () => {
    return HttpResponse.json({
      success: true,
      data: allUserNews,
      message: "操作成功",
    });
  }),

  // 攔截對 /userNews 的 POST 請求
  http.post("/userNews", async ({ request }) => {
    const newUserNews = await request.json();

    const id = crypto.randomUUID();
    const userNewsWithId: UserNewsListResponseType = { ...(newUserNews as UserNewsListResponseType), id };
    allUserNews.push(userNewsWithId);

    return HttpResponse.json(
      {
        success: true,
        data: userNewsWithId,
        message: "新增成功",
      },
      { status: 201 }
    );
  }),

  // 攔截對 /userNews 的 PUT 請求
  http.put("/userNews/:id", async ({ request, params }) => {
    const updatedUserNews = await request.json();
    const { id } = params as { id: string };

    const index = allUserNews.findIndex((news) => news.id === id);
    if (index !== -1) {
      if (
        typeof updatedUserNews === "object" &&
        updatedUserNews !== null &&
        "title" in updatedUserNews &&
        "content" in updatedUserNews &&
        "isActive" in updatedUserNews &&
        "isTop" in updatedUserNews
      ) {
        allUserNews[index] = { ...(updatedUserNews as UserNewsListResponseType), id };

        return HttpResponse.json({
          success: true,
          data: updatedUserNews,
          message: "更新成功",
        });
      } else {
        return HttpResponse.json(
          {
            success: false,
            message: "無效的數據格式",
          },
          { status: 400 }
        );
      }
    } else {
      return HttpResponse.json(
        {
          success: false,
          message: "找不到該項目",
        },
        { status: 404 }
      );
    }
  }),

  // 攔截對 /userNews 的 DELETE 請求
  http.delete("/userNews/:id", ({ params }) => {
    const { id } = params;

    const index = allUserNews.findIndex((news) => news.id === id);
    if (index !== -1) {
      allUserNews.splice(index, 1);

      return HttpResponse.json({
        success: true,
        message: "刪除成功",
      });
    } else {
      return HttpResponse.json(
        {
          success: false,
          message: "找不到該項目",
        },
        { status: 404 }
      );
    }
  }),
];
