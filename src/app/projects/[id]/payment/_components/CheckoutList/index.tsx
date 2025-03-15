import Image from "next/image";

const CheckoutList = () => {
  return (
    <div className="mb-5 md:mb-8">
      <Image
        src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/03add2b8-491e-4738-9c66-148d4a5e999a.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=xkhksXX2QLzABZCglZLhKhXHFC7mFMpq9VLfePD40W7cqGEIkXbzT%2BywQqS7FE8HkCfWPPy9h%2FTng7RxRMEU%2F4%2BlNh6mSAvlC6ckB7gnd1gFvcS%2FZwNhcH1034cgzGM4k1dkkbX9J3ErNcMNfIwNw2bsaC1QQVC068dKdpnDbKsr0X4BcsAOXlGKQgRIFcoNkIZsvJixClmWgHc11%2BPP2VE2m9CQwxvi9qV7PxNAFeEQrU%2BEAP2FULpQOWXljILk0hrFKznE3GVt%2BtxOPO3pBBRKEtuVt6T6aFnT%2BHF2P%2BpXzyIZDyoT91Rbw3tniBzdr2j0DQYw9M21FJXYL1MTAA%3D%3D"
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
          <span className="mr-auto text-xl font-bold text-secondary">NT$ 8,888</span>
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
          <span>NT $ 8,888</span>
        </div>
        <div className="mb-5 flex border-b pb-5">
          <span className="mr-auto">運費：台灣(本島)</span>
          <span>+NT $ 0</span>
        </div>
        <div className="flex">
          <span className="mr-auto">總價</span>
          <span>NT $ 8,888</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutList;
