import { ExpierieceSuccessProps } from "@/types/ExpierieceSuccessListProps";

export const getSuccess = async (): Promise<ExpierieceSuccessProps[]> => {
  return [
    {
      id: 1,
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/851c7332-6e3b-41be-8054-203f6b7c0161.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vybCyz2%2B4AYwvYdWwmq0oh7rKLPWmxW9Q1ugxwyd64trsx4l7Z4iq7%2FsKdRIkA86wwWFELoqehZ8McRK58mWIpKolpuDVb1buPdPhUmdjWi3%2FWYrBDrnWNxOpKovgoYYFyiJZCIc8NTHzmEf5Nz6F6JFefihOLbf1h5D772lvDsL7sYAw49pKvdBLEDV5xt4AnszFHtbrBxq0MpL1o5aXzzqtqa8FX0wVYBtbinJdpXIArevbmm2u3ieDypjN%2Bd2ggKbbuitASDB26Q2qTaQNdZXz4Fcn0a3KWB0cCg4ZlNl%2B2elRAvKXUp%2F%2BmgWa%2BleIjlFDHcq1wTHnt4nFHmGpw%3D%3D",
      title: "葡萄酒饗",
      description: "豐富的葡萄酒選擇搭配精緻西式料理,帶來完美的味覺體驗。",
      address: "100台湾台北市萬華區峨眉街8-1號",
      tag: ["西餐", "酒吧"],
      total: 100000,
    },
    {
      id: 2,
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/74d414b9-8c77-4c93-a107-c2b6a065cbd0.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=fqaE64d0YCjhqgmitIAm4z6%2FZtWOhbN%2F4au4h8pSkZN9MkpcTJPkaRqqoTjA%2FZiOynXdkfitJkj5nbMGkVL%2FFV%2Fyz42KvlgbayThPafxYeWrjloCiISEgHeeJ3UOD3bj2OGJ9bao7AjC6xQD7pE%2Brz64Yap7B1dsxAZXtZ87v6%2B4bLb0RH5I3JkTnCsTLkqHSZ%2BHy3MC5Y99CRuKmiBC%2B31wSE0IZ52kdpN0QatSLANxQZYwz%2Fd8s133XfOBem3wp%2F6NCypJ%2FTvXFWWBjMDpPtBdytrvmBZeVoTKAbR4Mo%2FXaXF38Z5Bt4yHDH%2FtpIlc8nUDkUqAn99hivLt5sWp%2BQ%3D%3D",
      title: "拉麵匠心",
      description: "傳承傳統日式拉麵工藝,濃郁湯底和精緻配料令人垂涎。",
      address: "100台湾台北市華萬區峨眉街8-1號",
      tag: ["麵館", "日式料理--"],
      total: 100000,
    },

    {
      id: 3,
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/95f8bccf-7d2f-4b14-b68c-eb81efaae71a.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=rUCHrAj2fQr%2FE71S1l8cG87ybih71GqaJpB%2FEsSGPh6b77JK6y2xsNuSDW4%2FtSf90xrKFVAO7%2FL1cmcu%2FmMP%2B2yU93P28cXAhg91ulJnQXOTc2bd45Zf0C381%2Fsff%2F2HAgssTLWM4LPk%2FGrRE0Gfc0o7E5ZwsZu8LowHWgKzvgYD9a7S2qhHwYLflQBeHuainWLohLwJHndgDmIZFFpdo9JlL0dFoX%2BlkiSJhZ0N2LfJ%2BTueFKLPIGM4M3vpqcgsey86WUs6qDBIyOwHr48nlx0WMJyyS67fwZJRQWq7FqFreFuIJ2Uyjw%2BlYgRSlad1Y%2BQ4ajWcmMOwaPvU30%2BC7w%3D%3D",
      title: "泰享鮮味",
      description: "結合傳統與現代泰式料理,帶來令人驚豔的風味佳肴。",
      address: "100台湾台北市華萬區峨眉街8",
      tag: ["麵館", "泰式料理"],
      total: 100000,
    },
    {
      id: 4,
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/74d414b9-8c77-4c93-a107-c2b6a065cbd0.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=fqaE64d0YCjhqgmitIAm4z6%2FZtWOhbN%2F4au4h8pSkZN9MkpcTJPkaRqqoTjA%2FZiOynXdkfitJkj5nbMGkVL%2FFV%2Fyz42KvlgbayThPafxYeWrjloCiISEgHeeJ3UOD3bj2OGJ9bao7AjC6xQD7pE%2Brz64Yap7B1dsxAZXtZ87v6%2B4bLb0RH5I3JkTnCsTLkqHSZ%2BHy3MC5Y99CRuKmiBC%2B31wSE0IZ52kdpN0QatSLANxQZYwz%2Fd8s133XfOBem3wp%2F6NCypJ%2FTvXFWWBjMDpPtBdytrvmBZeVoTKAbR4Mo%2FXaXF38Z5Bt4yHDH%2FtpIlc8nUDkUqAn99hivLt5sWp%2BQ%3D%3D",
      title: "法式風情",
      description: "以精緻的法式料理和優雅的餐廳氛圍為特色，帶來浪漫的味蕾饗宴。",
      address: "200台湾台北市信義區松高路1號",
      tag: ["法式料理", "高級餐廳"],
      total: 150000,
    },
    {
      id: 5,
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/95f8bccf-7d2f-4b14-b68c-eb81efaae71a.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=rUCHrAj2fQr%2FE71S1l8cG87ybih71GqaJpB%2FEsSGPh6b77JK6y2xsNuSDW4%2FtSf90xrKFVAO7%2FL1cmcu%2FmMP%2B2yU93P28cXAhg91ulJnQXOTc2bd45Zf0C381%2Fsff%2F2HAgssTLWM4LPk%2FGrRE0Gfc0o7E5ZwsZu8LowHWgKzvgYD9a7S2qhHwYLflQBeHuainWLohLwJHndgDmIZFFpdo9JlL0dFoX%2BlkiSJhZ0N2LfJ%2BTueFKLPIGM4M3vpqcgsey86WUs6qDBIyOwHr48nlx0WMJyyS67fwZJRQWq7FqFreFuIJ2Uyjw%2BlYgRSlad1Y%2BQ4ajWcmMOwaPvU30%2BC7w%3D%3D",
      title: "牛排饗宴",
      description: "專注於高品質的牛排料理，搭配豐富配菜，適合肉食愛好者。",
      address: "100台湾台北市大安區復興南路2段100號",
      tag: ["牛排", "美式料理"],
      total: 200000,
    },

    {
      id: 6,
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/95f8bccf-7d2f-4b14-b68c-eb81efaae71a.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=rUCHrAj2fQr%2FE71S1l8cG87ybih71GqaJpB%2FEsSGPh6b77JK6y2xsNuSDW4%2FtSf90xrKFVAO7%2FL1cmcu%2FmMP%2B2yU93P28cXAhg91ulJnQXOTc2bd45Zf0C381%2Fsff%2F2HAgssTLWM4LPk%2FGrRE0Gfc0o7E5ZwsZu8LowHWgKzvgYD9a7S2qhHwYLflQBeHuainWLohLwJHndgDmIZFFpdo9JlL0dFoX%2BlkiSJhZ0N2LfJ%2BTueFKLPIGM4M3vpqcgsey86WUs6qDBIyOwHr48nlx0WMJyyS67fwZJRQWq7FqFreFuIJ2Uyjw%2BlYgRSlad1Y%2BQ4ajWcmMOwaPvU30%2BC7w%3D%3D",
      title: "海鮮天堂",
      description: "提供最新鮮的海鮮料理，讓顧客品嚐到原汁原味的海洋美味。",
      address: "105台湾台北市中山區長安東路2段101號",
      tag: ["海鮮", "餐廳"],
      total: 180000,
    },
  ];
};
