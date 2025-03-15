import UnoptimizedImage from "@/components/UnoptimizedImage";

const CheckoutList = () => {
  return (
    <div className="mb-5 md:mb-8">
      <UnoptimizedImage
        src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/df262d64-4ecb-4f6c-9c8f-2f0cb79e09b0.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=GlgbjbN7zWBpvmw%2BK7xp6qLOaTWKSdQtKdGTS0Zm5EF1TaqXl2lWO6A9EML2aOp0Ye6uN5FSr0HKYuVrdv5wmYEDivjdAwUeaRSyF0RD2nGS67TlqVP%2FSKVpjs7QMO1PDd2elyIOgSKtg8GpJRQCGRYZA4oNmAVE%2FOhLgAL8%2B1v1fYpAf0HiDaYZSiY21FSZB%2BwQUxy3hnNtY3VCEqal%2BEt940jsAeBYIQ9%2Bb4kmb%2B26SfKh%2FNw3D8VetnyiT6WBfMt5vTnAZCI%2Bb%2FVa0f9JkBg6qLAgFynWP2hUIQCVR3hJSvjgnBnEtDNZmrQnwmSpk%2BsObS8oeusgIZFiqd77Wg%3D%3D"
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
