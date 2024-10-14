import { ProviderProps } from "@/types/ProviderType";
import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import ProjectSummary from "./_components/ProjectSummary";
import Navbar from "./@Navbar/page";
import Rewards from "./@Rewards/page";
import SectionPadding from "@/components/SectionPadding";

const recentProjectsBlockData = () => {
  return [
    {
      id: 1,
      title: "咖啡與時光",
      description: "義式咖啡與甜點完美結合,是愛好者的溫馨聚會空間。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/5b4342af-d487-4f93-87ad-fd614ce4a9dc.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=s5FM4O0SJCtEHYxl6umSRHR8yMVH7RGWuR8cXFfEhgbp7t0sXfjGLaOTZU%2BUqRjeBsDjhkHJHTBLQy3Me3J8CTCr6%2BZwkoffE1krerstww%2Fk2OFKEk%2F3vNYAzF7i3jkhFeP%2BZR3QmEWsc%2BlmkgWDCpHJ6nC%2BQpKDqDJmv9AEL5MNVPvvQL%2B25XEjoRrw5MXXi2m2CVHdVx2FmDMoJoofwIVjlkOwflwngkmHsSlIoynD3nv5j0MmZZKm7c0c6vOzL%2FQGw3Y2FC%2Fev82Ue7YESSbK4LlywtJAtSyJ%2FbhBJAWmYU7RkIc7x7eUh8FOYjuX73XAq%2B7mXBgCg8BoXWgiQw%3D%3D",
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
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/aae2f533-1def-407f-9d22-0f4e17c24aca.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=SnllGJguuH573YS4JL3kwOKXayqfNR4a6rjQ1Yv0UQS16rBim%2F%2Fh2WIAU2tzXKlqjy64vqpXGKVfV8EmXp9Y%2Bno3HlPzH8sVAo0d3Zzj3mGGERIC00Zle3A579aCvi740gXRLBQyeBQm8oldKDGnRBamPZVTZrqQMvLU%2FZDJh8SmCQmqXMmu4AEDtyDX%2FvRnIEtG5pVskV8XuaCz6iub%2BD%2FSL3ig49HyghjFNE2LCUVnoW3HM7JNSL15wEHHO87QnMIm2GUzwGtx3fOpoAe6%2FZKjU2W1RTzuZE1U4PR%2FLYYtJJJHGWO47zh35BtWPXRHs%2BR2JX8Ii6NlycW%2By6BdQw%3D%3D",
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
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/fcc46ba3-b10a-4c58-bac5-834626ae0cd9.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vU%2Fk1XHhsxtJ9r1AwwLw6Xc3t4YNBiIbc4gqSc3IAEgPya4GBFD1XsvGVK1WRNXGUu3Eg05zHpaYaaiTiDFCaArK2MKRIARwRgHgSfNPtakZwa1cuBBahhUycTgzH6j%2FzcbgvxYoYyt2Q3tuXm1Tw441dgFweMEUYSGJeOxjRi%2FAyv2QlsjC4YEjTem44U%2B3F%2BZQ3ZxXAt0ptCWPIWNtmnW8yqXjZjug%2BsQdF6Lc5cmlbNuq4qBG4nnsUZKPTH3Q1HOHlnwMZiaPoiW5f0AlQSZcyqP8dzcT%2FHxSg5t3YfK9lkN5fJ5YKqbwt8K3X8H7NqOMZS09J6g%2FgTR7oUsZjQ%3D%3D",
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
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/e4095f28-7f53-4d9e-bd5a-7ee8b1c6ec8b.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=i2fHWTTMEzcfk8nnruBu4l0V%2FyAJ1ioDuVTetnVz27Vr8o5FhtfpUQGujGD218blWTw%2Fi7d7mwck8o9ltUYRkGuBBilNJKWXInwxmwx8KWe1Wns8ouha5ACZLZvpV3JK%2FJoa9Yoh%2BOG7GOlEJAzl8YI6uyLjge6%2FQ8eN6L4nDBpwB4nlqBT0nyVeLsF6U0wSavYCVSGFrEUYx97mqzhB6gsmw5kHOhgc71uSZZ2WE3qD1KSQhYWGk4rdNT%2B8j4vM1q7wlDACjt4edWldioaNA0SZu0bjNT3z1NdTVDe1dpRXK1JuRauk2whD%2BSK1yTyFb2Ys%2B38shCntt%2FBRIk%2FKkw%3D%3D",
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
    progress: 80,
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
  const data = await recentProjectsBlockData();
  const ProjectSummaryData = await getProjectSummaryData();
  return (
    <>
      <ProjectSummary ProjectSummaryData={ProjectSummaryData} />
      <Navbar />
      <SectionPadding className="container px-3">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="mb-8 pr-10 lg:col-span-9">{children}</div>
          <Rewards />
        </div>
      </SectionPadding>
      <RecentProjectsBlock className="bg-[#F5E5CE]" data={data} title="近期專案" />
    </>
  );
}
