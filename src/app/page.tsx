import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import AboutUs from "./_components/AboutUsSection";
import ExperienceTalkBlock from "../components/ExperienceTalkBlock";
import ExperienceSuccess from "../components/ExperienceSuccess";
import Banner from "./_components/Banner";
const data = [
  {
    id: 1,
    title: "地中海風味館的創業之旅",
    description:
      "在募資過程中,我們的成功離不開那段動人的創業故事。我們決定不僅僅呈現數字,而是分享了我們對地中海飲食的熱情,以及這一理念如何從一個小小的想法變成現實。當投資者聽到我們如何從無到有地打造出獨特的菜單和環境時,他們被深深打動,進而願意成為這段旅程的一部分。",
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/74959d50-8101-4457-acfb-95ba81a0830b.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=HXFkUjTSFlvNcbPm3WlzMgzJCAkeZwKv5eGgoDX0CyTlpemku3TypoirUsdX3BXI2RSTzWJysA8vNXe6gV3CDsP%2Be8R%2B%2BQFetGyoXZm7NuOUq8P2RG4mToCzjMe4G%2BtHp4pmLKIWzSPVmULX8p0Yg%2F6GkifttKxmJh1S0JQJ3QgB9%2BbBIJ2Le73Hm7p%2BcftKUpdWy%2BxVVVM1dKfjK2b4eAfRbEhXwjqCdqrJfR4elZZtND8n%2F9nl%2BhlnDRAMlfqM9GAMuO7fWrpzOFvjZCdj28xd7bt0spMOGoOZCnfJOi%2BI5VZKU7xx8f6u%2FbbvLtJSGNILfVRBhtBpvi%2Fjr9ev7Q%3D%3D",
    avatarUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/7ed2a22a-77ee-46c5-a939-984e38d9a81d.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=RpeF8GPT4v%2FIUCOVBr3RM%2BTul1PabFaMPZ1n46yLXThRyStD1qKxj%2Bj%2FwXaPLICLXAvTx%2Bt5GPY%2F6uwnmPTHFe83D94Txevyc0yX8fdrNn%2FvcuqTgnERe5sGttqA15dXH8pr7JHY0JMYpc8NDgsQkycx90jtIUj99o2%2BNRbA%2FUMblHtbTmz%2BV8Tii86bqsndGKkITOuFolHpo5ahXD2TNNdeOvFrKkdLWDDmptm2P4A1LzVrGREPlRpFSZUbFdPad35rkAwwKmTJ6d1dQL8sTkwUwjuo1sv6Yb%2FffGTvy%2BG8vRyumh7dZVFS863kAQIgpitxdi1cKK5owANCvTYBKQ%3D%3D",
    avatarAlt: "地中海風味館",
    avatarName: "地中海風味館",
    avatarRole: "提案者代表",
  },
  {
    id: 2,
    title: "韓風炙熱的市場攻略",
    description:
      "「韓風炙熱」的募資成功,很大程度上來自於我們對數據的精準運用。我們的提案中不僅包括了詳細的市場分析,還展示了清晰的增長潛力和可量化的回報預測。這樣的數據支持給了投資者一個清晰的理由去相信我們的專案,並看到了具體的發展前景。",
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/473fad14-a22c-4a19-a9d7-47ec4dba1327.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=N%2FZXFgCu2oH3%2BcvVSp5wFJh7899RH395n1B5XG05NLtu6DuE8MHViAkUTNcnsAFTmmwmzC72NC65EDV1WUbIlZEpxvA41Gjeu7r0lJ0tT7b4tArP%2BPObjA1waRPAzSxZR%2FPPt9dfPefnbFPQk8eq1zJFhtKM5PxX0skMm7yVeTDObjrsxcxNK3rMrAKMXiAJH5tpsCt4eXZBcX5pi1ceKRR3qsgI4YL3RynOg3ghhtFgHiLV86pJU9VeSXWZEQ%2FNP5JTka5WrIwRsMyrkxG78IfgyflasitfPEu0JatpOfUs7zRyvT%2BXF0uA0193EaTMW3wgGZWiu7Cr76EUDkB%2B1A%3D%3D",
    avatarUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/0fd83d3c-fc99-461b-a8fa-9aed53ada2b9.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=KWD2tebZGRpY8VNHcD3070qrBtzn%2Ftli0fr%2FFuZ%2Bio9yGQQRtFug8YXzABWh4xnUceDG2ua51ZGVQG4WKTSvQezke00%2B%2FUezmswdII6Ed%2BsNJWOmxvvXKN583L2cMws0X%2B57llO4LuRo0ltwQP2VVcDcpCAvv4jIlwBmECOiRAOkP36An1zjDz5cqPF9UmvaSHRYkwtvgujB9k0YnJ9O2xrqA5v7g%2BtwaNKi6%2Bb7GQw28foXNkyXTfpoCxc6TqQPEIsC%2FBn3Hkot%2FdKj6Tzqcn6V2uUp4xxJ7cToYRHWUttESPUnQ6sYdMoKXDKMYkQ%2B7Ogzudk%2F1ygKPG7pXLCCgg%3D%3D",
    avatarAlt: "韓風炙熱",
    avatarName: "韓風炙熱",
    avatarRole: "提案者代表",
  },
  {
    id: 3,
    title: "人性化互動:甜點夢工廠的親密聯繫",
    description:
      "在「甜點夢工廠」的募資過程中,我們意識到與投資者建立真正的人際聯繫是至關重要的。我們不僅在提案中表達了商業模式,還透過一系列個性化的互動來展示我們的誠意。定期的更新、互動的會議,以及對投資者意見的重視,都讓他們感受到自己是專案成功的重要一環。",
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/35cbb20a-335a-4a27-96be-f75b399f6d8d.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=v%2BT%2FBpxiJ1%2FUJ%2BrcaLBUZBTW1arqriZqvw5AoA0ZsA4izX0mu1cVEaZUV1Ga7x4x%2F8QdRY%2BjvcZV0fki4PQRiiNyhOuZ8hUd50YVYr9litu8fi8MB0aAKH8HxjMwRvtvDYnNMZM%2B4YHROhb4kT%2BSojWCCy%2FftU7g%2FLzvYcRGQZ5%2F6mEoo9U7jcBsYfv%2FjFx2RRLvuoi4F07NolYeLwFwA9VsW6l2pW0Su%2F6OYwcrvQge3yE4ct%2FMamUU9UhWsq8oNvA2t6urPwMd59J5ZAXZyeO4WvE0DSbTSn%2FUJXU9gRFYIpTw0ilNxAwj9C4jTYqefMSWhb9uD0wdepTas87jTw%3D%3D",
    avatarUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/9e4190d8-274a-464b-bfa3-963bd4c4bb84.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=jnvdjExNxEkB1jocbdXTstq4eIuCA4XTvaaen5NkEeMDZvTT72I76yXdttLz2EUPJh0uOzQPpyfwASlRu4FGEeCO%2FPg%2FVcjX0kbkNEzRbgZajNyhOJtNwiNyrKxsxEgoqyttYYZmC1RVb02Afm5BDN72rF4ZsDdi2EHpUVbsPNdZAwe2kAvkwFBIHSk03wml1NcEuV2r3Cd9dofz9DdDH3vKrj8GmxAQ2PDK%2BdiwsYfGt87RugevHne3PJLB%2Bprt3P8%2BXwZ8wXscTF1w6ns3At8j4ftTxmrks%2BVCLwG4pmL8dwtlqMIBR3xy5jxKpM%2BakuNcvWlGVxrK3uPb2kkx6Q%3D%3D",
    avatarAlt: "甜點夢工廠",
    avatarName: "甜點夢工廠",
    avatarRole: "提案者代表",
  },
];

const getData = () => {
  return [
    {
      id: 1,
      title: "咖啡與時光",
      description: "義式咖啡與甜點完美結合,是愛好者的溫馨聚會空間。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/74959d50-8101-4457-acfb-95ba81a0830b.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=HXFkUjTSFlvNcbPm3WlzMgzJCAkeZwKv5eGgoDX0CyTlpemku3TypoirUsdX3BXI2RSTzWJysA8vNXe6gV3CDsP%2Be8R%2B%2BQFetGyoXZm7NuOUq8P2RG4mToCzjMe4G%2BtHp4pmLKIWzSPVmULX8p0Yg%2F6GkifttKxmJh1S0JQJ3QgB9%2BbBIJ2Le73Hm7p%2BcftKUpdWy%2BxVVVM1dKfjK2b4eAfRbEhXwjqCdqrJfR4elZZtND8n%2F9nl%2BhlnDRAMlfqM9GAMuO7fWrpzOFvjZCdj28xd7bt0spMOGoOZCnfJOi%2BI5VZKU7xx8f6u%2FbbvLtJSGNILfVRBhtBpvi%2Fjr9ev7Q%3D%3D",
      place: "台中",
      percentage: 80,
      targetAmount: "1,000,000",
      reciprocal: 30,
    },
    {
      id: 2,
      title: "甜點夢工廠",
      description: "法國甜點大師操刀,創造出經典與創意融合的法式糕點。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/473fad14-a22c-4a19-a9d7-47ec4dba1327.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=N%2FZXFgCu2oH3%2BcvVSp5wFJh7899RH395n1B5XG05NLtu6DuE8MHViAkUTNcnsAFTmmwmzC72NC65EDV1WUbIlZEpxvA41Gjeu7r0lJ0tT7b4tArP%2BPObjA1waRPAzSxZR%2FPPt9dfPefnbFPQk8eq1zJFhtKM5PxX0skMm7yVeTDObjrsxcxNK3rMrAKMXiAJH5tpsCt4eXZBcX5pi1ceKRR3qsgI4YL3RynOg3ghhtFgHiLV86pJU9VeSXWZEQ%2FNP5JTka5WrIwRsMyrkxG78IfgyflasitfPEu0JatpOfUs7zRyvT%2BXF0uA0193EaTMW3wgGZWiu7Cr76EUDkB%2B1A%3D%3D",
      place: "台南",
      percentage: 60,
      targetAmount: "500,000",
      reciprocal: 20,
    },
    {
      id: 3,
      title: "海岸燒烤樂園",
      description: "在美麗海岸享受豐富的海鮮和肉類燒烤,體驗戶外用餐的樂趣。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/35cbb20a-335a-4a27-96be-f75b399f6d8d.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=v%2BT%2FBpxiJ1%2FUJ%2BrcaLBUZBTW1arqriZqvw5AoA0ZsA4izX0mu1cVEaZUV1Ga7x4x%2F8QdRY%2BjvcZV0fki4PQRiiNyhOuZ8hUd50YVYr9litu8fi8MB0aAKH8HxjMwRvtvDYnNMZM%2B4YHROhb4kT%2BSojWCCy%2FftU7g%2FLzvYcRGQZ5%2F6mEoo9U7jcBsYfv%2FjFx2RRLvuoi4F07NolYeLwFwA9VsW6l2pW0Su%2F6OYwcrvQge3yE4ct%2FMamUU9UhWsq8oNvA2t6urPwMd59J5ZAXZyeO4WvE0DSbTSn%2FUJXU9gRFYIpTw0ilNxAwj9C4jTYqefMSWhb9uD0wdepTas87jTw%3D%3D",
      place: "台中",
      percentage: 90,
      targetAmount: "2,000,000",
      reciprocal: 15,
    },
    {
      id: 4,
      title: "綠意盎然",
      description: "綠意盎然的環境,提供健康的蔬食和飲品,是健康生活的首選。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/35cbb20a-335a-4a27-96be-f75b399f6d8d.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=v%2BT%2FBpxiJ1%2FUJ%2BrcaLBUZBTW1arqriZqvw5AoA0ZsA4izX0mu1cVEaZUV1Ga7x4x%2F8QdRY%2BjvcZV0fki4PQRiiNyhOuZ8hUd50YVYr9litu8fi8MB0aAKH8HxjMwRvtvDYnNMZM%2B4YHROhb4kT%2BSojWCCy%2FftU7g%2FLzvYcRGQZ5%2F6mEoo9U7jcBsYfv%2FjFx2RRLvuoi4F07NolYeLwFwA9VsW6l2pW0Su%2F6OYwcrvQge3yE4ct%2FMamUU9UhWsq8oNvA2t6urPwMd59J5ZAXZyeO4WvE0DSbTSn%2FUJXU9gRFYIpTw0ilNxAwj9C4jTYqefMSWhb9uD0wdepTas87jTw%3D%3D",
      place: "台北",
      percentage: 60,
      targetAmount: "500,000",
      reciprocal: 20,
    },
  ];
};
const banners = [
  {
    id: 1,
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/48b107cd-e6c2-4337-9455-d3b93fa6c585.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=g7sjuCrnykNM2Zcvsh%2BouQDEjPCVwzzvcNHLTa%2BXw7K4dYK9HBpSQx3UaZ%2FWhdF8NMRANIMBxM%2FQXTKnNZZ8%2BkWUs1qGoZ0tFrOH6u6OD1YjxAxLtDFZZdNfEWPF10C6NzyxCD9lA7TfsL4mn8vUQ%2FHmQEcLV%2BJoxwJ3YgQ15szDCT%2FreKUO4VXTSRht9mdrGiM544r9Wn%2BEEHuFnExldqABB8TJ6KUPwKEe8Jlq8ss5EOoGHdF%2BuLWBv8oTVJAUa%2BQLdN8rYF8wbEhUlGc53CtO7ed8z4dghco9IXCMOjaWfJ1tejcpIaa9bi6zviAFvFY7mcilYLRWyY9QL4PwFw%3D%3D",
    title: "Banner 1",
    description: "Description for Banner 1",
  },
  {
    id: 2,
    imageUrl:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/48b107cd-e6c2-4337-9455-d3b93fa6c585.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=g7sjuCrnykNM2Zcvsh%2BouQDEjPCVwzzvcNHLTa%2BXw7K4dYK9HBpSQx3UaZ%2FWhdF8NMRANIMBxM%2FQXTKnNZZ8%2BkWUs1qGoZ0tFrOH6u6OD1YjxAxLtDFZZdNfEWPF10C6NzyxCD9lA7TfsL4mn8vUQ%2FHmQEcLV%2BJoxwJ3YgQ15szDCT%2FreKUO4VXTSRht9mdrGiM544r9Wn%2BEEHuFnExldqABB8TJ6KUPwKEe8Jlq8ss5EOoGHdF%2BuLWBv8oTVJAUa%2BQLdN8rYF8wbEhUlGc53CtO7ed8z4dghco9IXCMOjaWfJ1tejcpIaa9bi6zviAFvFY7mcilYLRWyY9QL4PwFw%3D%3D",
    title: "Banner 2",
    description: "Description for Banner 2",
  },
];

const getSuccess = () => {
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

export default async function Home() {
  const RecentProjectsBlockData = await getData();
  const ExperienceData = await getSuccess();
  return (
    <main>
      <Banner data={banners} />
      <div className="bg-gradient-to-top-mobile md:bg-gradient-to-top-desktop">
        <RecentProjectsBlock className="md:pb-0" data={RecentProjectsBlockData} title="熱門專案" />
      </div>
      <RecentProjectsBlock className="bg-[#d6f4f0] md:pt-20" data={RecentProjectsBlockData} title="近期專案" />
      <ExperienceSuccess className="bg-[#F5E5CE] md:pt-20" data={ExperienceData} title="成功案例" />
      <ExperienceTalkBlock data={data} />
      <AboutUs />
    </main>
  );
}
