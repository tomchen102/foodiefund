import { http, HttpResponse } from "msw";
import { UserQuestionsAndAnswersListResponseType } from "@/api/services/userQuestionsAndAnswers/types";
import { allUserQuestionsAndAnswers } from "./data";

export const userQuestionsAndAnswersHandlers = [
  // 攔截對 /questionsAndAnswers 的 GET 請求
  http.get("/questionsAndAnswers", () => {
    return HttpResponse.json({
      success: true,
      data: allUserQuestionsAndAnswers,
      message: "操作成功",
    });
  }),

  // 攔截對 /questionsAndAnswers 的 POST 請求
  http.post("/questionsAndAnswers", async ({ request }) => {
    const newUserQuestionsAndAnswersHandlers = await request.json();

    const id = crypto.randomUUID();
    const userQuestionsAndAnswersHandlersWithId: UserQuestionsAndAnswersListResponseType = {
      ...(newUserQuestionsAndAnswersHandlers as UserQuestionsAndAnswersListResponseType),
      id,
    };
    allUserQuestionsAndAnswers.push(userQuestionsAndAnswersHandlersWithId);

    return HttpResponse.json(
      {
        success: true,
        data: userQuestionsAndAnswersHandlersWithId,
        message: "新增成功",
      },
      { status: 201 }
    );
  }),

  // 攔截對 /questionsAndAnswers 的 PUT 請求
  http.put("/questionsAndAnswers/:id", async ({ request, params }) => {
    const updatedUserNews = await request.json();
    const { id } = params as { id: string };

    const index = allUserQuestionsAndAnswers.findIndex((news) => news.id === id);
    if (index !== -1) {
      if (
        typeof updatedUserNews === "object" &&
        updatedUserNews !== null &&
        "questions" in updatedUserNews &&
        "answers" in updatedUserNews &&
        "publicAt" in updatedUserNews
      ) {
        allUserQuestionsAndAnswers[index] = { ...(updatedUserNews as UserQuestionsAndAnswersListResponseType), id };

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

  // 攔截對 /questionsAndAnswers 的 DELETE 請求
  http.delete("/questionsAndAnswers/:id", ({ params }) => {
    const { id } = params;

    const index = allUserQuestionsAndAnswers.findIndex((news) => news.id === id);
    if (index !== -1) {
      allUserQuestionsAndAnswers.splice(index, 1);

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
