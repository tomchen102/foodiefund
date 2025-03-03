import { Category } from "../../type";

import CategoryCard from "./CategoryCard";

const categories: Category[] = [
  {
    title: "群眾募資",
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/6e9afa4c-9263-4df8-b3f5-fd253f4702a5.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=sqr9KSAWtucr%2BIYrm4Za7iJnmmnA%2BzgfeaUU%2FIDif%2BlD01VNXl2fvxxTP2O7xFcgLc1ybIPVydCJsZVa6RG0PCMJdpkRVEW7p3Js3s36oGvUjZ8Ur6XAOdTGih4Dipp0wMzbFBYR2p6eAtWFYn%2BVXXLXak1ZqYEuPGxcSfzL6EJlL2D4%2FgYispQ8kXZliNMR%2BUJvONAVo7aB6xWOzcJxEaQC44HhqmnxsGoVsfQwaZvUNQIddvB1bowG2UmqUcB2hR8oyBmCfMhnueJYPLI4rCin4VIxHQ%2Fp2G0F9bu3vXqZZ8NlaFwybnwygIR5Lo6Taiceqqh12U4XMAU9At2wAA%3D%3D",
    feature: [
      "一次性專案",
      "平均集資時程45-60天",
      "世界首發專案，尚未於全球通路官方上市販售",
      "專案達成後，一次性回饋支持者",
    ],
    color: "fill-secondary-dark",
  },
  {
    title: "訂閱式專案",
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/8ab193ba-15ed-4bdb-bd13-8e4c81840c46.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=JGNwf71XtkLgr%2BSSOhAC9ocOIYXsuoHtk9SnJ1vjGa%2Fqcgktl9nrwZ4vRnsuFiG4U9%2FBCZ3wzLgkitZB828o0B1Xjfm5g9mPxQkfevCoKg8JkVIp1MhJ%2BvHT3oIfBgUK3RVPvi2egfFDaB6tYBKi51O7pQdsB4u3qaMi2%2B78JXQ8zmIUFCdeE0NjBwib5O4AZMOOJcFzFoG2HWljLxzvlXG3ElJSBw7ThaOFaE7Y8Q0d7kAz5u3ZyiS9hga8RbTFeQm2cVTovyPduxt4K0QN0h6iNPp19AJDJhU27NgCyFS%2F4P7HOE7T%2B18o9d6M1iy%2Fw6xTak%2FmluqPL1q%2Ft5ZNzg%3D%3D",
    feature: ["長期專案", "可持續募資至活動結束", "尚未於其他平台提供相同主題的訂閱計畫", "專案達成後，持續回饋贊助者"],
    color: "fill-primary",
  },
];

const CategorySection = () => {
  return (
    <section className="relative">
      <div className="absolute bottom-0 h-3/5 w-full bg-primary-light"></div>
      <div className="container flex flex-col gap-5 py-10 md:gap-10 md:py-20">
        <div className="text-center text-xl font-bold md:text-4xl">提案類別</div>
        <div className="z-10 mx-3 flex flex-col justify-between md:mx-0 md:flex-row">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
