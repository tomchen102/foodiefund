import { PaymentFormType } from "@/api/services/payment/types";
import { FormFieldConfig } from "@/components/FormRenderer/types";

export const PaymentFormFields: FormFieldConfig<PaymentFormType>[] = [
  {
    label: "付款方式",
    name: "paymentMethods",
    type: "radio",
    key: "paymentMethods",
    options: [
      { label: "信用卡", value: "creditCard" },
      { label: "ATM轉帳", value: "atm" },
    ],
  },
  {
    label: "加碼贊助(選擇性填寫)",
    name: "overweight",
    type: "number",
    key: "overweight",
    placeholder: "請輸入金額",
  },
  {
    label: "收件地點",
    name: "country",
    type: "select",
    key: "country",
    options: [
      { label: "台灣(本島) Taiwan", value: "taiwan" },
      { label: "海外", value: "other" },
    ],
  },
  {
    label: "縣市",
    name: "city",
    type: "select",
    key: "city",
    halfWidth: true,
    options: [
      { label: "台北市", value: "taipei" },
      { label: "新北市", value: "newTaipei" },
    ],
  },
  {
    label: "鄉鎮市區",
    name: "area",
    type: "select",
    key: "area",
    halfWidth: true,
    options: [
      { label: "中正區", value: "zhongzheng" },
      { label: "大同區", value: "datong" },
    ],
  },
  {
    label: "地址",
    name: "address",
    type: "text",
    key: "address",
    halfWidth: true,
  },
  {
    label: "郵遞區號",
    name: "zipCode",
    type: "text",
    key: "zipCode",
    halfWidth: true,
    disabled: true,
  },
  {
    label: "收件人",
    name: "recipient",
    type: "text",
    key: "recipient",
    placeholder: "請輸入真實姓名，以利出貨作業進行",
  },
  {
    label: "連絡電話",
    name: "phone",
    type: "number",
    key: "phone",
    placeholder: "請輸入真實手機號碼，以利取貨或連繫收貨",
  },
  {
    label: "請選擇購買顏色",
    name: "color",
    type: "select",
    key: "color",
    options: [
      { label: "花色", value: "花色" },
      { label: "紅色", value: "紅色" },
    ],
  },
  {
    label: "發票資訊",
    name: "billType",
    type: "radio",
    key: "billType",
    options: [
      { label: "個人發票", value: "personal" },
      { label: "公司發票", value: "company" },
    ],
  },
  {
    label: "手機載具",
    name: "vehicle",
    type: "number",
    key: "vehicle",
    placeholder: "例：AB1CD23",
  },
  {
    label: "備註",
    name: "remark",
    type: "textarea",
    key: "remark",
    placeholder: "請輸入備註(參考回饋或計畫內容的說明，非必填)",
  },
  {
    label: "我已閱讀並同意服務條款與隱私權政策",
    name: "agree",
    type: "checkbox",
    id: "agree",
    text: "您可以隨時點擊查看條款的詳細內容",
    required: true,
    key: "agree",
  },
];
