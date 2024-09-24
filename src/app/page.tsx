import AboutUs from "./components/AboutUsSection";
import ExperienceTalk from "./components/ExperienceTalk";

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
export default function Home() {
  return (
    <main>
      <ExperienceTalk data={data} />
      <AboutUs />
    </main>
  );
}
