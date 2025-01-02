import Image from "next/image";

const CheckoutList = () => {
  return (
    <div className="mb-5 md:mb-8">
      <Image
        src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/e84a603e-94ce-4955-aec1-57030925caf0.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=PYRZrOEf2DhIKnxV4IpWXrlIG1ms%2FfsYo%2FDFc5KJWDkTRadTSwDZHz7WKNuGQqzCF5Swgd8jl4M9uOmR62IoLtn5I50sq5Z8wZrP5YkHTnizbjS1%2Bte5S1egt2%2B5eNYFXTQ3861NLSScD%2F%2BoyNgYOkRU%2BpPs9JkmsEz0B9zhH5u%2BUCGoM8hZbOk%2FbQFjj%2FrigbY4ub9lwbWlJ8%2BNC8uQCc5Kdpniibh%2B8Sbb5MEc0ujkTVc0f1aWxfCZzl9eo%2BaXOVOKtS4ojjVVcL0MFdla5wFwS6YXOYVgLueuJ61gze%2F0D%2FSftMLSlei6Ij70xSp9j8s4%2F6LAJfFCABOKjo8MYA%3D%3D"
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full xl:h-[200px]"
        alt="Screenshots of the dashboard project showing desktop version"
        priority
      />
      <div className="border p-5">
        <h3 className="mb-2 text-base">【限量單品】布偶貓托特包</h3>
        <div className="mb-2 flex items-center">
          <span className="mr-auto text-xl font-bold text-secondary">NT$ 6,666</span>
          <span className="text-gray">已被贊助</span>
          <span className="text-primary-dark">24/25</span>
          <span className="text-gray">次</span>
        </div>
        <div className="mb-2">
          <span className="font-bold text-gray">剩餘 1 份</span>
        </div>
        <div className="mb-5">
          <p>【限量單品】</p>
          <p>「容量大！又方便！簡單又樸素讓你出門不怕滑倒！ 」</p>
          <p>規格 : 約21x23x15cm(把手11cm)/厚帆</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-5 flex">
          <span className="mr-auto">選項金額</span>
          <span>NT $ 6,666</span>
        </div>
        <div className="mb-5 flex border-b pb-5">
          <span className="mr-auto">運費：台灣(本島)</span>
          <span>+NT $ 0</span>
        </div>
        <div className="flex">
          <span className="mr-auto">總價</span>
          <span>NT $ 6,666</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutList;
