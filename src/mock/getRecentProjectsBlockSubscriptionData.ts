import { RecentProjectsProps } from "@/types/RecentProjectsListProps";

export const getRecentProjectsBlockSubscriptionData = async (): Promise<RecentProjectsProps[]> => {
  return [
    {
      id: 9,
      title: "泰享鮮味",
      description: "結合傳統與現代泰式料理,帶來令人驚豔的風味佳肴。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/ac87bb50-cd9b-49f4-99c5-3bd14593ad60.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=to%2FacX0doseGSu5b%2BEc3s3cpXtXCuPUx0u7VrCysYbcnh9zKW5uzkwXBFdXFCgHG8OWWQT9LGOGx83WTp9X8IU4CM6Wtdd4a4r7SDZeiSJI7Xry%2BavDseB6xLI12yghHbt4S1qRXpLP4LPClybKOl8o58wJvaRpXz5mrpkURhLUEOt8eX3rU7HMflfSamp1nzUznwpjaiiHRMCgw%2F4YclisFR06Blteyk8zmze9IYzuTM%2BM65jtsdZ2%2FmcO1S4MGqlwyyzdr4dy1k7K6EAdnTxWzoMVbVLOe6LNbL4rCjdmtskXqSmam85VovThRpmEesxL0y%2BeEkzW0rxNJfvlkmg%3D%3D",
      place: "台北",
      currentAmount: "500",
      href: "projects/9",
      projectType: "subscription",
      subscriberCount: 6,
    },
    {
      id: 10,
      title: "異國美食薈萃",
      description: "聚集世界各地的特色美食,打造多元化的餐飲選擇。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/09e9ae12-15aa-4b9e-be2f-0fb66825ce4b.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vOM%2B%2BxH9H2a7bz1uWY2y5AdNK%2FZlWqJNtr1S%2BucVXzzkIWBdWp%2FQ1b54mb%2BDrGwI2FRNHHCLWG6vdXtnyfFbggKmAjkRcMyv3eZe9OYtVXPginMuulEOmVGrNCYSMA7x0%2F%2Bcv0RJxNdfGLtGYYKdHvzIlY0ERrxWY0uLD6E2NBKRKeSt4UQcCEV82m5E2e1qlkcS9tkGTsfVL9k3lIvkuUsqpgNNJeR2mqqm1eGEV5JYJ908cwT2ch4aOLUI1xUtOM%2FbhAliKLJnolUEExAj67e%2FOYIMJUL6SRD19aRejPNUTfbs9BGaRaFXojD4rnugyijWeXtq2i6DgJOT7Suk%2BQ%3D%3D",
      place: "台北",
      currentAmount: "500",
      href: "projects/10",
      projectType: "subscription",
      subscriberCount: 6,
    },
    {
      id: 11,
      title: "海岸燒烤樂園",
      description: "在美麗海岸享受豐富的海鮮和肉類燒烤,體驗戶外用餐的樂趣。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/db050add-e297-434a-ab18-322fa54b82be.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=M6O87l1C00mvIY9t1rTTBwWSgBebkh1WTqTDzN0osSz6GU3Zu%2FMCMG3dRK8dODURXQb4MOA%2BEBoy9IRP6lNUARq57H0EPCd5KgkVhOrO7jJ%2BS16ayMCt%2BxYEUsRp7xbNotOKcp23ET7GCxF6R8oGV2SUteLRX%2BPxaGekHTFZj1qthR1LPU92kSNf1TSqkiirIg9OwM86fITifNdr%2BcFPg4xadHcNFF4gjQTFBukTEk%2F8lHVT59G5Pdy0Ib55PV%2BB%2Ff2Q6Qaa%2FXOFGz6tVraJRKYk%2BG5auQMUEd77%2B4Ih1sedrSso9Egd195j5vGm4P7NzDayXOdmPmWUA0xUogoUVw%3D%3D",
      place: "台北",
      currentAmount: "500",
      href: "projects/11",
      projectType: "subscription",
      subscriberCount: 6,
    },
    {
      id: 12,
      title: "農場饗宴",
      description: "以農場直送食材創造健康美食,推廣自然生活方式。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/3cc32ca8-98fc-4cb9-baf7-b39e8471a30b.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=ol%2Fi77bK1lyBhhTHSIrwfTQg8yR%2Fu2yaKbJPV1FS9ZcEXmfefWRg%2FPtcE7yRmnjmR4C2dYHagT%2FGurxbMIvxoID7FGh1ZxkN59AiNVqRCozZF6tFGr%2FLUHPxiocArBArrr6Gwgc81hzTTErmOkiEkQifGDXW2zfwaIFeLpESn0E5FQlZuzW3i3GpuNoIN1bHDhGC9Qv%2Bjbb5I8quOvyHwzXXcvZDcAm3kckDN%2Fijc0X%2BoDFgonzUOcvcuu7283jYX2CaYBQQ2D056YkD%2B7RE%2FGa210R6T%2FiuBYQlK%2B94ljQpsvSge%2BBic%2B8RjrZuKeT3Bxw0KzipeOLY0yCp%2FnhSgQ%3D%3D",
      place: "台北",
      currentAmount: "1,500",
      href: "projects/12",
      projectType: "subscription",
      subscriberCount: 6,
    },
  ];
};
