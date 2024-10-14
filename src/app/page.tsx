import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import AboutUs from "./_components/AboutUsSection";
import ExperienceTalkBlock from "../components/ExperienceTalkBlock";
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

const recentProjectsBlockHotData = () => {
  return [
    {
      id: 1,
      title: "龍蝦盛宴",
      description: "提供新鮮美味的小龍蝦,結合創新的中式料理,帶來極致的海鮮饗宴。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/2eca3922-fe91-44c9-a8ea-600e3c75a924.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=D3t9H%2BseRNiBlVCy71W7PGigzjDamwZsL9p5ge3Fm5hkSgKBHVkFHfrz4XCOAPDVNVvJJzkmCmsZX67%2BmaeAjNmPZ6UDhbiWP5z2boxm8SXgZKkfUy5EKHB6fYUnFfj7zTPCsepI3by2jDD%2FtlUANGR%2FlskC3A33W8B9x24xcowq7clzz80XFGZJIAPWSImVVbspwkGje%2FRMaopvcJKM2o9a6pF3t7H9EnWyeMcBRGj6xq5Hw2HiwbDmsUfdsZgkeollszhQY8sJ5%2FPDKTYY2hhKfX3q9DJoUa%2FXyg%2Ft2R5x%2F7ehqvYgAg1NVnagVtfdUIEg3C5b3xMPnk2gt2NlYA%3D%3D",
      place: "台中",
      percentage: 80,
      targetAmount: "1,000,000",
      reciprocal: 30,
    },
    {
      id: 2,
      title: "綠色味覺",
      description: "主打有機素食料理,倡導健康飲食和可持續生活方式。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/f2da2bec-a920-4d63-8d31-da59995001ea.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=n0bvqeg%2F%2FFKewNMeapxIgFPpQ%2Bf6YBpiMedYe4oB5zciHa1vuKXl2sCiNOxSYNkNVmObN4BsHWyOwQR6p6%2FURhxKsXucnd4fA%2Bvm4c0tJbaPEXyf7NrLsTd8TISqbS9pkRiel0FcIbK4Vx%2BtGqbGokoRs5L5IbR0%2BpHeoPcjGsN%2F7Egu3D3lwYV5UT39QBxRXahT1gKhx%2B7CY3lKnWHJCftL%2FHqrvmm8t%2F3itxZL7TTK26TTf4HHXMQigB756fPEmiwZWxQGCT5%2BqHI3xU3mB02I4PkEcELW93TVLJDwzagpi8UVQm4EApveimS9khrFqKqH1xWpbFrehdgg%2BU9r0A%3D%3D",
      place: "台南",
      percentage: 60,
      targetAmount: "500,000",
      reciprocal: 20,
    },
    {
      id: 3,
      title: "族味傳奇",
      description: "傳承台東原住民飲食文化,呈現地道的傳統風味與文化故事。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/fef819a9-80fe-4eef-941c-1658fa18f2cd.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=G3xIw1oMXYibVspA9s8HAonZ5YjcTzVoLFc9mQPxa%2Bf6k6tzOyIJi0tVXKwYEK99FKNSWaKjzwfc9y5tw9enCC5bEEYRhxWIh34C2PmV4uRQeYmOvP48CkmkJ0mG%2Bey4u51MdM63qSLT89IZVJtkfxXv9GN%2BL0WiIjSJMSSvk%2FB0DnyWoDUcSNW1cGB3en7X567Zi3RdeIGEAfe7WzY6sxF%2FND1o%2FtvM9Jb3mSz4KmB0CaZkFgcbVOn%2FFkh8bKiU4HEFoQ1TODVvoBwy%2Btqa12ydQ7FSyeyuNkxbzxD1WLLx29B9w8A6IyHq2JP1PJL%2FDRZcmbJz%2FIp1GSkmlBg1ZA%3D%3D",
      place: "台中",
      percentage: 90,
      targetAmount: "2,000,000",
      reciprocal: 15,
    },
    {
      id: 4,
      title: "鮨匠手作",
      description: "專注於精緻手作壽司,以新鮮食材製作出每日精選美味。",
      imageUrl:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/c665e4af-9007-44d6-aa78-de420e4843f2.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=RBxQ8qkst6XDh5h39SeCBKlpezQ3rOdZ7yNRkx0beSL7MRZAf3fBdngdKomCdn53qeABJSGQ5a5jKrM16D%2B%2F%2BBdH1nZ3xWHqbp%2BN8%2FI7r96KcepCT0g9hYXOgf%2BDKxOKY4tOS1zrfuGwPnYjjWh1%2F3w%2FzoObybnT6xlDetUwKnWon1o26HOD7KKMki5qNHYno%2FGcjHSdoKYWdg8jAm1fGNn3U6g81o4F22vuanISIRgU1LDiqmT8Gua1XctlemsSGq3x8M0rUUdHaWl5Ye2v%2BYCwCVpOYm9fyAD6xzuKBhh4CCHhnqee6nNbcBR4uFtze4yZ7Q2PGAE4kzGkU51Ztw%3D%3D",
      place: "台北",
      percentage: 60,
      targetAmount: "500,000",
      reciprocal: 20,
    },
  ];
};

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

export default async function Home() {
  const RecentProjectsBlockHotData = await recentProjectsBlockHotData();
  const RecentProjectsBlockData = await recentProjectsBlockData();
  return (
    <main>
      <Banner data={banners} />
      <div className="bg-gradient-to-top-mobile md:bg-gradient-to-top-desktop">
        <RecentProjectsBlock className="md:pb-0" data={RecentProjectsBlockHotData} title="熱門專案" />
      </div>
      <RecentProjectsBlock className="bg-[#d6f4f0] md:pt-20" data={RecentProjectsBlockData} title="近期專案" />
      <ExperienceTalkBlock data={data} />
      <div className="pt-15 bg-[#F5E5CE] pb-20"></div>
      <AboutUs />
    </main>
  );
}
