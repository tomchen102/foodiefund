import React from "react";

import { Brand, BrandHeadMap } from "../../type";

import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";

const brand: Brand[] = [
  {
    logoUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/275bf442-fdcd-4f7f-bc38-ac19bb51077c.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=fbF%2B5CDE8tf3%2B%2FkPnBe1wdCrJjI%2FkM%2B2112Hh3aK3GbN7jmJjCkgN9oPxnIGVc23kTADeQF%2FGDJrgSk9TFTH6XygQy9heJnQXdfpAIQAcCp1AakKh%2Fs2NcpKFtMdi4Lq5C7IYUKBu2r5d7y12AM1MlysIADlvW9uw1Yv3CKSLfQZbIKLxhWDJPRg5i2AiP3prs0wLM%2B13B%2FFuSbizk5onNQVokgRilyurqCHdoCDIhcPl5Yx7dzerh25pmWNTz98yFbYMjujZcy34qLzaILeXLiqnVqqs0mnmli4mUQROkm541vtJ8tO9jAlIGXF%2FwCN%2BNfyM%2BuJTVWIvE4ughHvmA%3D%3D",
    area: "餐廳",
    fee: false,
  },
  {
    logoUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/d7fe8e3b-8494-46c3-bd11-dc4224f6725c.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=A9WzpTh%2BIQrOtA9KM45O08liaPGqekcqDc%2Bf9qBAsmf2ADf%2FYjN9UrHgrTnjH6Prlq159vTYBbSH0j3uZ0KLYiHCqI%2B%2BD%2BSQvj%2B3%2BLk8ZrGIpuBnTkJkv9a2jX4syHwojhDBc%2F51391hL5igaEEV9FkBmJYI7Sf9Qs82mqRqDf%2FO9E1MriCIt1hnnWfbFAS4LtM1WbzjKF96SnNT15AdoKcuBwkdrU7H2Hbx0Tl5hoBsmFHKAntuaNfnIrpMWnWwEOiR5vESnt1AgeNYgzYwSoSeuT4hqXvME7sRVpAvqToCgyA7%2F%2BQR%2BhpnDGdiFFiSRwurREa%2FpWcPSz3fRDZJ7A%3D%3D",
    area: "計劃多元",
    fee: true,
  },
  {
    logoUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/42078adb-3c9f-45ce-8f3a-25fdfac53f71.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=C1bvsmC8%2FDCarcTG3HKw%2F7L8qqxXYDct71%2Bo4AiOe3j5KewKQduIx%2BWtDxP8AcPpl6aJ9EdnCkgLVh7Q71hjT5qv5jlZGR7G1D8KBSlFoZf61SB10WmUfhDKHYfR0qIaSp3SOYRr78RFFCiERKrallK8EJtpXSJ83MbaPN2CxEBDDW1d5veuBJwqspS116vNS23Bixit3wItx12gbEMsaRnu1FdHkN8Avp6vHagiOEozl4phsmZAgbl8v3%2BEX0JWsi%2FYvXf5T0vZ6O0ySRVNeQ711QvF%2Bj3g%2FWruXQKQhjhurdL3SrqoTbs%2BqwBUDCNyoN27qKGExfFB7T8RO%2FbcbA%3D%3D",
    area: "公益、影視、設計",
    fee: true,
  },
  {
    logoUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/3b3f116b-0df5-41f3-99d4-0ccbab8ddf21.webp?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=IQvcjuZyrCkdSeqnreqc1nYqmIuAGibSZFaXvHOcGFoE3mjSejHf%2Fc9A%2FBKFOoLNwA8sse%2BHnTVr0Qase8fUkh00LXCx7Vseba1jnT%2Bu0EnyQ1pc2BJh9xnq1q7Mz4TUyEXmeeHsF%2FD%2B%2B1LTAP9NDmEaF6tNzUhafaiaHfyL3aASe%2FoOpVBzJYPGst2naHWW7SrxjqZ0RNetnC7TZ4asnv9I2JDeAegvOgU8a95U%2FhSLkH5bLaoAI0aILRfyq1BhsBhiTKlt9swK8r7enCrR4%2Flv28hBOMWpnQ7nyFRqEFF4PtdH1fS0KFIe0CEBW%2FNSir0PBZlirXVtpDAR1%2BT9WQ%3D%3D",
    area: "計劃多元",
    fee: true,
  },
];

const headMap: BrandHeadMap = { area: "募資領域", fee: "平台抽成" };

const ComparisonSection = () => {
  return (
    <section className="container flex flex-col gap-5 px-3 py-10 md:gap-10 md:px-0 md:py-20">
      <h2 className="text-center text-xl font-bold md:text-4xl">與其他募資平台比較</h2>
      <DesktopTable brand={brand} headMap={headMap} />
      <MobileTable brand={brand} headMap={headMap} />
    </section>
  );
};

export default ComparisonSection;
