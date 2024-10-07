import { ProviderProps } from "@/types/ProviderType";
import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import ProjectSummary from "./_components/ProjectSummary";
import Navbar from "./@Navbar/page";

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

const getProjectSummaryData = () => {
  return {
    id: "1",
    title: "喵喵咖啡廳",
    description:
      "喵喵咖啡館在於創辦人在台北時創立,我們的理念很簡單-提供優質的食物和咖啡,咖啡具有使人們停下來和彼此互動的能力。人與人之間的聯繫就是我們在這裡的原因,有時我們意識到這就像兩個拿鐵一樣簡單。享用咖啡,早餐或午餐,我們隨時為您服務!",
    imageUrlLg:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/4205b53b-bb9b-4d16-83d8-863b2f0f6fb8.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=E8hfbipNltmZrQfCOGYMclvdz9hQHrXyfofrvYpepc9d3kQgT%2FjFPXN8GIluV7oO6T0m9jEQ3lGyFLC3M%2FNlEs10zB4SXWj5WeviojCP846SRxXIzXAjnJwkFuhZGBqjuyrX0E9L5DoFBhHWYQqnxFblCjqo96dR6FhKJSg2luTqHyFSRtWe8kBFIlFR2Ycu09TSsgOVSG%2BMnCjl734mjkAmjOR36S9rfTG5RBbTSvYvHvRKuLwl437oxglHTEtydzhJKAW9HfIDdvp1MNuYkJ8f5X6%2Fs1cCfWGUYHiJaOqDncGUYObSEyHLAyj1xUSwu0l2WFR%2BwRcFjOM9f%2FXeGg%3D%3D",
    imageUrlSm:
      "https://storage.googleapis.com/fir-express-80358.appspot.com/images/74960e77-27bb-4145-9c74-70c5c5b3c207.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=PXtAq0TxkxLZMbGU1xWId8nHIEr9XEVfESbkhydEs0zzFn5x1rMLcDzUMRk%2BMyUkVSCtCow%2F8he37%2F8gbfU9NFGH7gUaoBQatqFQZwGwm4HuNXjPK5oVoxRA5IJRoV4k%2FvDyq3g51wmsC55mIqDxV5cWWPfaJMIKi3LFgKlKwXeNoN%2FqVeTE3OqbjvcGkRBV%2FylbgEqTgnG4keVpwzS2%2BhFIezUxUOWDyY23b%2FbMNLV9a9vXDvDWFsvcdeB0GkAW842rz5%2F9crT%2BJTKTnp6A2ViONMLMR743oUNA1597Cu9ZaIProsdR8nQfb7m97kNvyg81lfvh9oBBaL4c8ql7%2Fw%3D%3D",
    proposer: "兔寶寶溜滑梯",
    progress: 37,
    targetAmount: "1,000,000",
    currentAmount: "800,000",
    startDate: "2022-08-01",
    endDate: "13",
    numberOfBackers: 115,
    location: "台北",
    restaurantType: "咖啡廳",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  };
};
export default async function ProjectsLayout({ children }: ProviderProps) {
  const data = await getData();
  const ProjectSummaryData = await getProjectSummaryData();
  return (
    <div>
      <ProjectSummary ProjectSummaryData={ProjectSummaryData} />
      <Navbar />
      {children}
      <RecentProjectsBlock className="bg-[#F5E5CE]" data={data} title="近期專案" />
    </div>
  );
}
