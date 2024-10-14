import { Button } from "@/components/ui/button";
import Image from "next/image";

const Rewards = () => {
  return (
    <div className="lg:col-span-3">
      <ul>
        <li className="mb-5 md:mb-8">
          <Image
            src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/e84a603e-94ce-4955-aec1-57030925caf0.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=PYRZrOEf2DhIKnxV4IpWXrlIG1ms%2FfsYo%2FDFc5KJWDkTRadTSwDZHz7WKNuGQqzCF5Swgd8jl4M9uOmR62IoLtn5I50sq5Z8wZrP5YkHTnizbjS1%2Bte5S1egt2%2B5eNYFXTQ3861NLSScD%2F%2BoyNgYOkRU%2BpPs9JkmsEz0B9zhH5u%2BUCGoM8hZbOk%2FbQFjj%2FrigbY4ub9lwbWlJ8%2BNC8uQCc5Kdpniibh%2B8Sbb5MEc0ujkTVc0f1aWxfCZzl9eo%2BaXOVOKtS4ojjVVcL0MFdla5wFwS6YXOYVgLueuJ61gze%2F0D%2FSftMLSlei6Ij70xSp9j8s4%2F6LAJfFCABOKjo8MYA%3D%3D"
            width={306}
            height={200}
            className="h-auto w-full xl:h-[200px]"
            alt="Screenshots of the dashboard project showing desktop version"
            loading="lazy"
          />
          <div className="border p-5">
            <h3 className="mb-2 font-bold">【限量單品】布偶貓托特包</h3>
            <div className="mb-2 flex">
              <span className="mr-auto text-xl font-bold text-secondary">NT$ 6,666</span>
              <span className="text-sm font-medium text-gray">已被贊助</span>
              <span className="text-sm font-medium text-tertiary">24/25</span>
              <span className="text-sm font-medium text-gray">次</span>
            </div>
            <div className="mb-2">
              <span className="text-sm font-bold text-gray">剩餘 1 份</span>
            </div>
            <div className="mb-5">
              <p className="text-sm font-medium">【限量單品】</p>
              <p className="text-sm font-medium">「容量大！又方便！簡單又樸素讓你出門不怕滑倒！ 」</p>
              <p className="text-sm font-medium">規格 : 約21x23x15cm(把手11cm)/厚帆</p>
            </div>
            <Button variant="donateNow" size="lg">
              立即贊助
            </Button>
          </div>
        </li>
        <li className="mb-5 md:mb-8">
          <Image
            src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/d85d3add-863c-414b-a68c-2e2867035fc7.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=WLGOtvhCALB16Cvbt%2FJ7Qjs3r9DjlbdM1xpvMKPNskP38pCkr3LsNANPTLGXDLdfv3RVAQiZo6VRLE%2B3V3kZB0kKWSzKFo%2BxgTbvKg5PYf7F3PBxzoqxxmkQ3Mn7hyvxL9SPtDpJne9aW%2FsycIs7fyy85XZzOxMKpTzOw4o3%2B54pmYSqpCzJQJu2FYqe10kYzZDjf1X3Je5IoUzCzSEDPaU56VEAb7YrNShzB0skkRdk443oRzKryCSXd%2BixJPvO%2FxvxYm7LOvB77lTq1fXiTT56hvN6N90DdCKZACBBMoJHyKBk%2FMZkC5rGy20IR9RVVl5ftuctp03wInFm9nF2zA%3D%3D"
            width={306}
            height={200}
            className="h-auto w-full xl:h-[200px]"
            alt="Screenshots of the dashboard project showing desktop version"
            loading="lazy"
          />
          <div className="border p-5">
            <h3 className="mb-2 font-bold">【限量單品】布偶貓托特包</h3>
            <div className="mb-2 flex">
              <span className="mr-auto text-xl font-bold text-secondary">NT$ 6,666</span>
              <span className="text-sm font-medium text-gray">已被贊助</span>
              <span className="text-sm font-medium text-tertiary">24/25</span>
              <span className="text-sm font-medium text-gray">次</span>
            </div>
            <div className="mb-2">
              <span className="text-sm font-bold text-gray">剩餘 1 份</span>
            </div>
            <div className="mb-5">
              <p className="text-sm font-medium">【限量單品】</p>
              <p className="text-sm font-medium">「容量大！又方便！簡單又樸素讓你出門不怕滑倒！ 」</p>
              <p className="text-sm font-medium">規格 : 約21x23x15cm(把手11cm)/厚帆</p>
            </div>
            <Button variant="donateNow" size="lg">
              立即贊助
            </Button>
          </div>
        </li>
        <li>
          <Image
            src="https://storage.googleapis.com/fir-express-80358.appspot.com/images/df262d64-4ecb-4f6c-9c8f-2f0cb79e09b0.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=GlgbjbN7zWBpvmw%2BK7xp6qLOaTWKSdQtKdGTS0Zm5EF1TaqXl2lWO6A9EML2aOp0Ye6uN5FSr0HKYuVrdv5wmYEDivjdAwUeaRSyF0RD2nGS67TlqVP%2FSKVpjs7QMO1PDd2elyIOgSKtg8GpJRQCGRYZA4oNmAVE%2FOhLgAL8%2B1v1fYpAf0HiDaYZSiY21FSZB%2BwQUxy3hnNtY3VCEqal%2BEt940jsAeBYIQ9%2Bb4kmb%2B26SfKh%2FNw3D8VetnyiT6WBfMt5vTnAZCI%2Bb%2FVa0f9JkBg6qLAgFynWP2hUIQCVR3hJSvjgnBnEtDNZmrQnwmSpk%2BsObS8oeusgIZFiqd77Wg%3D%3D"
            width={306}
            height={200}
            className="h-auto w-full xl:h-[200px]"
            alt="Screenshots of the dashboard project showing desktop version"
            loading="lazy"
          />
          <div className="border p-5">
            <h3 className="mb-2 font-bold">【限量單品】布偶貓托特包</h3>
            <div className="mb-2 flex">
              <span className="mr-auto text-xl font-bold text-secondary">NT$ 6,666</span>
              <span className="text-sm font-medium text-gray">已被贊助</span>
              <span className="text-sm font-medium text-tertiary">24/25</span>
              <span className="text-sm font-medium text-gray">次</span>
            </div>
            <div className="mb-2">
              <span className="text-sm font-bold text-gray">剩餘 1 份</span>
            </div>
            <div className="mb-5">
              <p className="text-sm font-medium">【限量單品】</p>
              <p className="text-sm font-medium">「容量大！又方便！簡單又樸素讓你出門不怕滑倒！ 」</p>
              <p className="text-sm font-medium">規格 : 約21x23x15cm(把手11cm)/厚帆</p>
            </div>
            <Button variant="donateNow" size="lg">
              立即贊助
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Rewards;
