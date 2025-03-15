import { OrderPaymentSuccessfulProps } from "@/types/OrderProps";

export const getOrderPaymentSuccessful = async (): Promise<OrderPaymentSuccessfulProps[]> => {
  return [
    {
      order: {
        id: "550e8400-e29b-41d4-a716-446655440000",
        order_no: "ORD202503160001",
        order_date: "2025-03-16T03:20:00+08:00",
        discount: 100,
        subtotal: 8888,
        shipping_fee: 150,
        total_amount: 8938,
        currency: "NT$",
        payment_method: "credit_card",
        status: "resolve",
        customer: {
          name: "lulume",
          email: "abcd@example.com",
          phone: "0912345678",
        },
        order_shippingInfo: {
          contact_person: "火腿",
          address: "臺北市中正區松山路100號",
          phone: "0912345678",
          postal_code: "110",
          fax: "02-12345678",
          tax_id: "12345678",
          remark: "",
        },
      },
      order_products: [
        {
          product_id: "66d66fb3217ebbebc04b1d5b",
          title: "【限量單品】布偶貓托特包-紅色",
          content:
            "【限量單品】\n「容量大！又方便！簡單又樸素讓你出門不怕滑倒！」\n規格 : 約21x23x15cm(把手11cm)/厚帆\n",
          quantity: 1,
          price: 8888,
          image:
            "https://storage.googleapis.com/fir-express-80358.appspot.com/images/df262d64-4ecb-4f6c-9c8f-2f0cb79e09b0.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=GlgbjbN7zWBpvmw%2BK7xp6qLOaTWKSdQtKdGTS0Zm5EF1TaqXl2lWO6A9EML2aOp0Ye6uN5FSr0HKYuVrdv5wmYEDivjdAwUeaRSyF0RD2nGS67TlqVP%2FSKVpjs7QMO1PDd2elyIOgSKtg8GpJRQCGRYZA4oNmAVE%2FOhLgAL8%2B1v1fYpAf0HiDaYZSiY21FSZB%2BwQUxy3hnNtY3VCEqal%2BEt940jsAeBYIQ9%2Bb4kmb%2B26SfKh%2FNw3D8VetnyiT6WBfMt5vTnAZCI%2Bb%2FVa0f9JkBg6qLAgFynWP2hUIQCVR3hJSvjgnBnEtDNZmrQnwmSpk%2BsObS8oeusgIZFiqd77Wg%3D%3D",
          subtotal: 8888,
        },
      ],
    },
  ];
};
