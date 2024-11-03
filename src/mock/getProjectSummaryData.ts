import { ProjectSummaryDataProps } from "@/app/projects/[id]/_components/ProjectSummary/types";

export const getProjectSummaryData = async (): Promise<ProjectSummaryDataProps[]> => {
  return [
    {
      id: "1",
      activeType: "A",
      title: "龍蝦盛宴",
      description:
        "提供新鮮美味的小龍蝦,結合創新的中式料理,帶來極致的海鮮饗宴。龍蝦盛宴是一家以新鮮龍蝦料理為主的高級餐廳，提供多樣化的龍蝦美食，從經典的龍蝦湯到創意龍蝦料理，滿足所有愛好海鮮的饕客。餐廳以精緻的烹飪技巧結合當季食材，讓每一口都充滿海洋的鮮味。無論是約會晚餐還是家人聚餐，龍蝦盛宴都是您享受奢華美味的不二選擇。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/2eca3922-fe91-44c9-a8ea-600e3c75a924.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=D3t9H%2BseRNiBlVCy71W7PGigzjDamwZsL9p5ge3Fm5hkSgKBHVkFHfrz4XCOAPDVNVvJJzkmCmsZX67%2BmaeAjNmPZ6UDhbiWP5z2boxm8SXgZKkfUy5EKHB6fYUnFfj7zTPCsepI3by2jDD%2FtlUANGR%2FlskC3A33W8B9x24xcowq7clzz80XFGZJIAPWSImVVbspwkGje%2FRMaopvcJKM2o9a6pF3t7H9EnWyeMcBRGj6xq5Hw2HiwbDmsUfdsZgkeollszhQY8sJ5%2FPDKTYY2hhKfX3q9DJoUa%2FXyg%2Ft2R5x%2F7ehqvYgAg1NVnagVtfdUIEg3C5b3xMPnk2gt2NlYA%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/2eca3922-fe91-44c9-a8ea-600e3c75a924.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=D3t9H%2BseRNiBlVCy71W7PGigzjDamwZsL9p5ge3Fm5hkSgKBHVkFHfrz4XCOAPDVNVvJJzkmCmsZX67%2BmaeAjNmPZ6UDhbiWP5z2boxm8SXgZKkfUy5EKHB6fYUnFfj7zTPCsepI3by2jDD%2FtlUANGR%2FlskC3A33W8B9x24xcowq7clzz80XFGZJIAPWSImVVbspwkGje%2FRMaopvcJKM2o9a6pF3t7H9EnWyeMcBRGj6xq5Hw2HiwbDmsUfdsZgkeollszhQY8sJ5%2FPDKTYY2hhKfX3q9DJoUa%2FXyg%2Ft2R5x%2F7ehqvYgAg1NVnagVtfdUIEg3C5b3xMPnk2gt2NlYA%3D%3D",
      proposer: "SitDownPlease",
      progress: 80,
      targetAmount: "1,000,000",
      currentAmount: "800,000",
      startDate: "2024-09-21",
      endDate: "30",
      numberOfBackers: 115,
      location: "台中",
      restaurantType: "西式餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "2",
      activeType: "A",
      title: "綠色味覺",
      description:
        "綠色味覺是一家充滿創意與活力的素食餐廳，專注於將植物性食材變成令人驚豔的美味體驗。我們的料理以季節性蔬果和當地有機食材為主，精心設計每一道菜，讓您感受到健康與美味之間的完美平衡。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/f2da2bec-a920-4d63-8d31-da59995001ea.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=n0bvqeg%2F%2FFKewNMeapxIgFPpQ%2Bf6YBpiMedYe4oB5zciHa1vuKXl2sCiNOxSYNkNVmObN4BsHWyOwQR6p6%2FURhxKsXucnd4fA%2Bvm4c0tJbaPEXyf7NrLsTd8TISqbS9pkRiel0FcIbK4Vx%2BtGqbGokoRs5L5IbR0%2BpHeoPcjGsN%2F7Egu3D3lwYV5UT39QBxRXahT1gKhx%2B7CY3lKnWHJCftL%2FHqrvmm8t%2F3itxZL7TTK26TTf4HHXMQigB756fPEmiwZWxQGCT5%2BqHI3xU3mB02I4PkEcELW93TVLJDwzagpi8UVQm4EApveimS9khrFqKqH1xWpbFrehdgg%2BU9r0A%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/f2da2bec-a920-4d63-8d31-da59995001ea.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=n0bvqeg%2F%2FFKewNMeapxIgFPpQ%2Bf6YBpiMedYe4oB5zciHa1vuKXl2sCiNOxSYNkNVmObN4BsHWyOwQR6p6%2FURhxKsXucnd4fA%2Bvm4c0tJbaPEXyf7NrLsTd8TISqbS9pkRiel0FcIbK4Vx%2BtGqbGokoRs5L5IbR0%2BpHeoPcjGsN%2F7Egu3D3lwYV5UT39QBxRXahT1gKhx%2B7CY3lKnWHJCftL%2FHqrvmm8t%2F3itxZL7TTK26TTf4HHXMQigB756fPEmiwZWxQGCT5%2BqHI3xU3mB02I4PkEcELW93TVLJDwzagpi8UVQm4EApveimS9khrFqKqH1xWpbFrehdgg%2BU9r0A%3D%3D",
      proposer: "健康輕食",
      progress: 60,
      targetAmount: "500,000",
      currentAmount: "300,000",
      startDate: "2024-09-28",
      endDate: "60",
      numberOfBackers: 115,
      location: "台南",
      restaurantType: "素食餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "3",
      activeType: "A",
      title: "族味傳奇",
      description:
        "族味傳奇帶您走進多元文化的美食世界，品味來自各民族的經典風味。這裡的料理匯聚了傳統的手工技藝和地道食材，讓每一道菜肴都充滿歷史故事與家鄉情懷。不論是濃郁的炖湯還是香嫩的烤肉，每一口都在講述不同族群的美食傳奇。來這裡，探索和體驗各地美食的深厚魅力，感受文化交織下的美味饗宴。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/fef819a9-80fe-4eef-941c-1658fa18f2cd.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=G3xIw1oMXYibVspA9s8HAonZ5YjcTzVoLFc9mQPxa%2Bf6k6tzOyIJi0tVXKwYEK99FKNSWaKjzwfc9y5tw9enCC5bEEYRhxWIh34C2PmV4uRQeYmOvP48CkmkJ0mG%2Bey4u51MdM63qSLT89IZVJtkfxXv9GN%2BL0WiIjSJMSSvk%2FB0DnyWoDUcSNW1cGB3en7X567Zi3RdeIGEAfe7WzY6sxF%2FND1o%2FtvM9Jb3mSz4KmB0CaZkFgcbVOn%2FFkh8bKiU4HEFoQ1TODVvoBwy%2Btqa12ydQ7FSyeyuNkxbzxD1WLLx29B9w8A6IyHq2JP1PJL%2FDRZcmbJz%2FIp1GSkmlBg1ZA%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/fef819a9-80fe-4eef-941c-1658fa18f2cd.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=G3xIw1oMXYibVspA9s8HAonZ5YjcTzVoLFc9mQPxa%2Bf6k6tzOyIJi0tVXKwYEK99FKNSWaKjzwfc9y5tw9enCC5bEEYRhxWIh34C2PmV4uRQeYmOvP48CkmkJ0mG%2Bey4u51MdM63qSLT89IZVJtkfxXv9GN%2BL0WiIjSJMSSvk%2FB0DnyWoDUcSNW1cGB3en7X567Zi3RdeIGEAfe7WzY6sxF%2FND1o%2FtvM9Jb3mSz4KmB0CaZkFgcbVOn%2FFkh8bKiU4HEFoQ1TODVvoBwy%2Btqa12ydQ7FSyeyuNkxbzxD1WLLx29B9w8A6IyHq2JP1PJL%2FDRZcmbJz%2FIp1GSkmlBg1ZA%3D%3D",
      proposer: "馬告族長",
      progress: 90,
      targetAmount: "2,000,000",
      currentAmount: "1,800,000",
      startDate: "2024-09-28",
      endDate: "15",
      numberOfBackers: 115,
      location: "南投",
      restaurantType: "原民餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "4",
      title: "鮨匠手作",
      activeType: "A",
      description:
        "鮨匠手作是一家以手作壽司為核心的日式料理店，將精湛的刀工與對食材的極致講究融入每一口壽司中。我們嚴選最新鮮的魚貨，搭配匠心獨具的醋飯，呈現出原汁原味的日式風味。無論是經典的握壽司還是充滿創意的卷物，鮨匠手作以細膩的手法與精湛的技藝，帶您領略純粹而豐富的壽司美學，讓每一口都成為味蕾的愉悅體驗。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/c665e4af-9007-44d6-aa78-de420e4843f2.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=RBxQ8qkst6XDh5h39SeCBKlpezQ3rOdZ7yNRkx0beSL7MRZAf3fBdngdKomCdn53qeABJSGQ5a5jKrM16D%2B%2F%2BBdH1nZ3xWHqbp%2BN8%2FI7r96KcepCT0g9hYXOgf%2BDKxOKY4tOS1zrfuGwPnYjjWh1%2F3w%2FzoObybnT6xlDetUwKnWon1o26HOD7KKMki5qNHYno%2FGcjHSdoKYWdg8jAm1fGNn3U6g81o4F22vuanISIRgU1LDiqmT8Gua1XctlemsSGq3x8M0rUUdHaWl5Ye2v%2BYCwCVpOYm9fyAD6xzuKBhh4CCHhnqee6nNbcBR4uFtze4yZ7Q2PGAE4kzGkU51Ztw%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/c665e4af-9007-44d6-aa78-de420e4843f2.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=RBxQ8qkst6XDh5h39SeCBKlpezQ3rOdZ7yNRkx0beSL7MRZAf3fBdngdKomCdn53qeABJSGQ5a5jKrM16D%2B%2F%2BBdH1nZ3xWHqbp%2BN8%2FI7r96KcepCT0g9hYXOgf%2BDKxOKY4tOS1zrfuGwPnYjjWh1%2F3w%2FzoObybnT6xlDetUwKnWon1o26HOD7KKMki5qNHYno%2FGcjHSdoKYWdg8jAm1fGNn3U6g81o4F22vuanISIRgU1LDiqmT8Gua1XctlemsSGq3x8M0rUUdHaWl5Ye2v%2BYCwCVpOYm9fyAD6xzuKBhh4CCHhnqee6nNbcBR4uFtze4yZ7Q2PGAE4kzGkU51Ztw%3D%3D",
      proposer: "我是魯夫",
      progress: 60,
      targetAmount: "500,000",
      currentAmount: "300,000",
      startDate: "2024-08-28",
      endDate: "45",
      numberOfBackers: 85,
      location: "台北",
      restaurantType: "日式餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "5",
      title: "喵喵咖啡廳",
      activeType: "A",
      description:
        "喵喵咖啡館在於創辦人在台北時創立,我們的理念很簡單-提供優質的食物和咖啡,咖啡具有使人們停下來和彼此互動的能力。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/5b4342af-d487-4f93-87ad-fd614ce4a9dc.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=s5FM4O0SJCtEHYxl6umSRHR8yMVH7RGWuR8cXFfEhgbp7t0sXfjGLaOTZU%2BUqRjeBsDjhkHJHTBLQy3Me3J8CTCr6%2BZwkoffE1krerstww%2Fk2OFKEk%2F3vNYAzF7i3jkhFeP%2BZR3QmEWsc%2BlmkgWDCpHJ6nC%2BQpKDqDJmv9AEL5MNVPvvQL%2B25XEjoRrw5MXXi2m2CVHdVx2FmDMoJoofwIVjlkOwflwngkmHsSlIoynD3nv5j0MmZZKm7c0c6vOzL%2FQGw3Y2FC%2Fev82Ue7YESSbK4LlywtJAtSyJ%2FbhBJAWmYU7RkIc7x7eUh8FOYjuX73XAq%2B7mXBgCg8BoXWgiQw%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/5b4342af-d487-4f93-87ad-fd614ce4a9dc.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=s5FM4O0SJCtEHYxl6umSRHR8yMVH7RGWuR8cXFfEhgbp7t0sXfjGLaOTZU%2BUqRjeBsDjhkHJHTBLQy3Me3J8CTCr6%2BZwkoffE1krerstww%2Fk2OFKEk%2F3vNYAzF7i3jkhFeP%2BZR3QmEWsc%2BlmkgWDCpHJ6nC%2BQpKDqDJmv9AEL5MNVPvvQL%2B25XEjoRrw5MXXi2m2CVHdVx2FmDMoJoofwIVjlkOwflwngkmHsSlIoynD3nv5j0MmZZKm7c0c6vOzL%2FQGw3Y2FC%2Fev82Ue7YESSbK4LlywtJAtSyJ%2FbhBJAWmYU7RkIc7x7eUh8FOYjuX73XAq%2B7mXBgCg8BoXWgiQw%3D%3D",
      proposer: "羅密歐與豬過夜",
      progress: 60,
      targetAmount: "1,000,000",
      currentAmount: "800,000",
      startDate: "2024-09-28",
      endDate: "30",
      numberOfBackers: 65,
      location: "台北",
      restaurantType: "甜點餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "6",
      title: "甜點夢工廠",
      activeType: "A",
      description:
        "法國甜點大師操刀,創造出經典與創意融合的法式糕點。甜點夢工廠是一家專注於提供精緻美味甜點的品牌，致力於讓每一位顧客在品嚐甜點時都能感受到幸福與甜蜜。無論是細膩的手工蛋糕、多層次的馬卡龍，還是口感柔軟的奶酪，每一款產品都由經驗豐富的甜點師傅用心製作，選用高品質的原材料，確保每一口都充滿香氣與滿足感。甜點夢工廠還提供個性化訂製服務，無論是生日、婚禮或其他特殊場合，都能為您創造獨一無二的甜點體驗。從產品的設計到口味的搭配，甜點夢工廠始終追求完美，致力於將甜點的美味與藝術性結合，讓每一份甜點都成為值得回味的作品。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/40ae638e-88cb-4e10-8dee-b8177f9419d5.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=lfgmBfNQzYuaHrvbRXxVAsSc4LEGoXBmGYPZPMO0lPjas1iDgFQw2r1zAFybufD%2BvbiWN9%2Bf7RKLMFWz9jbMuCsGTeRYb5NDnihZRPrQJsLraWyPjm1lg2E6Y2PFV9e9QXrWfmh5aGQGNJiRyROKh6szmcrk8OPv0wXGcZ3NMXq6q9q5Z9W1CinC9cdVYdlocCNfNIjs4%2FahyK%2Bkjf4H4ARKa7c1qs%2B%2BHGtzzO6IyMLuDcBnrCLXvTa1saIS4%2Fkq5HJXec0xA6xrpM9Kf1id5XfeE7pOaHHNqIHSlK2%2BM6Sx0ZuTzqpOhPOLnYgrIseJapkv3eC92gw9a77OsUHwwg%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/40ae638e-88cb-4e10-8dee-b8177f9419d5.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=lfgmBfNQzYuaHrvbRXxVAsSc4LEGoXBmGYPZPMO0lPjas1iDgFQw2r1zAFybufD%2BvbiWN9%2Bf7RKLMFWz9jbMuCsGTeRYb5NDnihZRPrQJsLraWyPjm1lg2E6Y2PFV9e9QXrWfmh5aGQGNJiRyROKh6szmcrk8OPv0wXGcZ3NMXq6q9q5Z9W1CinC9cdVYdlocCNfNIjs4%2FahyK%2Bkjf4H4ARKa7c1qs%2B%2BHGtzzO6IyMLuDcBnrCLXvTa1saIS4%2Fkq5HJXec0xA6xrpM9Kf1id5XfeE7pOaHHNqIHSlK2%2BM6Sx0ZuTzqpOhPOLnYgrIseJapkv3eC92gw9a77OsUHwwg%3D%3D",
      proposer: "梅川伊芙",
      progress: 80,
      targetAmount: "500,000",
      currentAmount: "400,000",
      startDate: "2024-09-18",
      endDate: "60",
      numberOfBackers: 95,
      location: "台北",
      restaurantType: "日式餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "7",
      title: "海岸燒烤樂園",
      activeType: "A",
      description:
        "澎湖海岸燒烤樂園是一處充滿歡樂與美食的戶外燒烤勝地，位於澎湖迷人的海岸線旁，讓您一邊享受美味燒烤，一邊欣賞美麗的海景。這裡提供新鮮的海鮮、肉類以及豐富的蔬菜供您自由搭配，無論是與朋友相聚還是家庭聚會，都能在戶外的自然氛圍中度過一個難忘的燒烤時光。伴隨著徐徐海風和落日餘暉，澎湖海岸燒烤樂園為您打造一場美食與自然交織的難忘體驗。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/fcc46ba3-b10a-4c58-bac5-834626ae0cd9.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vU%2Fk1XHhsxtJ9r1AwwLw6Xc3t4YNBiIbc4gqSc3IAEgPya4GBFD1XsvGVK1WRNXGUu3Eg05zHpaYaaiTiDFCaArK2MKRIARwRgHgSfNPtakZwa1cuBBahhUycTgzH6j%2FzcbgvxYoYyt2Q3tuXm1Tw441dgFweMEUYSGJeOxjRi%2FAyv2QlsjC4YEjTem44U%2B3F%2BZQ3ZxXAt0ptCWPIWNtmnW8yqXjZjug%2BsQdF6Lc5cmlbNuq4qBG4nnsUZKPTH3Q1HOHlnwMZiaPoiW5f0AlQSZcyqP8dzcT%2FHxSg5t3YfK9lkN5fJ5YKqbwt8K3X8H7NqOMZS09J6g%2FgTR7oUsZjQ%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/fcc46ba3-b10a-4c58-bac5-834626ae0cd9.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vU%2Fk1XHhsxtJ9r1AwwLw6Xc3t4YNBiIbc4gqSc3IAEgPya4GBFD1XsvGVK1WRNXGUu3Eg05zHpaYaaiTiDFCaArK2MKRIARwRgHgSfNPtakZwa1cuBBahhUycTgzH6j%2FzcbgvxYoYyt2Q3tuXm1Tw441dgFweMEUYSGJeOxjRi%2FAyv2QlsjC4YEjTem44U%2B3F%2BZQ3ZxXAt0ptCWPIWNtmnW8yqXjZjug%2BsQdF6Lc5cmlbNuq4qBG4nnsUZKPTH3Q1HOHlnwMZiaPoiW5f0AlQSZcyqP8dzcT%2FHxSg5t3YfK9lkN5fJ5YKqbwt8K3X8H7NqOMZS09J6g%2FgTR7oUsZjQ%3D%3D",
      proposer: "香吉士",
      progress: 90,
      targetAmount: "2,000,000",
      currentAmount: "1,800,000",
      startDate: "2024-10-18",
      endDate: "60",
      numberOfBackers: 85,
      location: "澎湖",
      restaurantType: "海鮮餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "8",
      title: "綠意盎然",
      activeType: "A",
      description:
        "綠意盎然是一家充滿自然氣息的花園風格餐廳，專注於新鮮健康的料理。這裡以充滿綠意的環境和季節性食材為特色，讓每位顧客在享用美食的同時，能夠感受到如置身大自然般的舒適與愜意。從豐富的蔬果沙拉到創意的植物性料理，綠意盎然致力於將每一份餐點都打造成充滿生命力的美味作品，為您帶來身心靈的綠色享受，是追求健康生活和自然美味的理想場所。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/e4095f28-7f53-4d9e-bd5a-7ee8b1c6ec8b.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=i2fHWTTMEzcfk8nnruBu4l0V%2FyAJ1ioDuVTetnVz27Vr8o5FhtfpUQGujGD218blWTw%2Fi7d7mwck8o9ltUYRkGuBBilNJKWXInwxmwx8KWe1Wns8ouha5ACZLZvpV3JK%2FJoa9Yoh%2BOG7GOlEJAzl8YI6uyLjge6%2FQ8eN6L4nDBpwB4nlqBT0nyVeLsF6U0wSavYCVSGFrEUYx97mqzhB6gsmw5kHOhgc71uSZZ2WE3qD1KSQhYWGk4rdNT%2B8j4vM1q7wlDACjt4edWldioaNA0SZu0bjNT3z1NdTVDe1dpRXK1JuRauk2whD%2BSK1yTyFb2Ys%2B38shCntt%2FBRIk%2FKkw%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/e4095f28-7f53-4d9e-bd5a-7ee8b1c6ec8b.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=i2fHWTTMEzcfk8nnruBu4l0V%2FyAJ1ioDuVTetnVz27Vr8o5FhtfpUQGujGD218blWTw%2Fi7d7mwck8o9ltUYRkGuBBilNJKWXInwxmwx8KWe1Wns8ouha5ACZLZvpV3JK%2FJoa9Yoh%2BOG7GOlEJAzl8YI6uyLjge6%2FQ8eN6L4nDBpwB4nlqBT0nyVeLsF6U0wSavYCVSGFrEUYx97mqzhB6gsmw5kHOhgc71uSZZ2WE3qD1KSQhYWGk4rdNT%2B8j4vM1q7wlDACjt4edWldioaNA0SZu0bjNT3z1NdTVDe1dpRXK1JuRauk2whD%2BSK1yTyFb2Ys%2B38shCntt%2FBRIk%2FKkw%3D%3D",
      proposer: "喬八",
      progress: 50,
      targetAmount: "1,000,000",
      currentAmount: "500,000",
      startDate: "2024-10-18",
      endDate: "180",
      numberOfBackers: 15,
      location: "台北",
      restaurantType: "素食餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "9",
      title: "泰享鮮味",
      activeType: "Z",
      description:
        "泰享鮮味是一家充滿異國風情的泰式餐廳，專注於帶給您正宗的泰國美食體驗。我們選用新鮮的香料和食材，融合泰國地道的烹飪手法，為您呈現地道的泰式風味。從酸辣開胃的冬蔭功湯、香濃可口的綠咖哩，到爽口的泰式涼拌，讓每一口都帶您彷彿置身泰國。無論是喜歡辛香味十足還是清爽口感的饕客，泰享鮮味都能滿足您的味蕾。快來體驗這一場來自泰國的美味饗宴吧！結合傳統與現代泰式料理,帶來令人驚豔的風味佳肴。「泰享鮮味」是一家致力於提供正宗泰式風味的餐廳，以新鮮、地道的食材帶來濃郁的泰國風情。每道料理不僅是舌尖上的享受，更是一場異國風情的探索。我們用心挑選香料和食材，將酸、甜、苦、辣的泰國經典滋味完美結合，讓顧客每一口都能品味到正宗的泰國靈魂。不論是香茅蝦湯的濃郁酸辣、青木瓜沙拉的爽脆清新，還是咖哩料理的濃郁醇厚，我們都致力於呈現純正泰式風味。在「泰享鮮味」，每一道料理都是一段故事，帶你感受來自泰國街頭的美食文化，用心傳遞鮮活的泰式體驗。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/ac87bb50-cd9b-49f4-99c5-3bd14593ad60.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=to%2FacX0doseGSu5b%2BEc3s3cpXtXCuPUx0u7VrCysYbcnh9zKW5uzkwXBFdXFCgHG8OWWQT9LGOGx83WTp9X8IU4CM6Wtdd4a4r7SDZeiSJI7Xry%2BavDseB6xLI12yghHbt4S1qRXpLP4LPClybKOl8o58wJvaRpXz5mrpkURhLUEOt8eX3rU7HMflfSamp1nzUznwpjaiiHRMCgw%2F4YclisFR06Blteyk8zmze9IYzuTM%2BM65jtsdZ2%2FmcO1S4MGqlwyyzdr4dy1k7K6EAdnTxWzoMVbVLOe6LNbL4rCjdmtskXqSmam85VovThRpmEesxL0y%2BeEkzW0rxNJfvlkmg%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/ac87bb50-cd9b-49f4-99c5-3bd14593ad60.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=to%2FacX0doseGSu5b%2BEc3s3cpXtXCuPUx0u7VrCysYbcnh9zKW5uzkwXBFdXFCgHG8OWWQT9LGOGx83WTp9X8IU4CM6Wtdd4a4r7SDZeiSJI7Xry%2BavDseB6xLI12yghHbt4S1qRXpLP4LPClybKOl8o58wJvaRpXz5mrpkURhLUEOt8eX3rU7HMflfSamp1nzUznwpjaiiHRMCgw%2F4YclisFR06Blteyk8zmze9IYzuTM%2BM65jtsdZ2%2FmcO1S4MGqlwyyzdr4dy1k7K6EAdnTxWzoMVbVLOe6LNbL4rCjdmtskXqSmam85VovThRpmEesxL0y%2BeEkzW0rxNJfvlkmg%3D%3D",
      proposer: "泰好吃",
      progress: 30,
      targetAmount: "500,000",
      currentAmount: "500/月",
      startDate: "2024-10-18",
      endDate: "180",
      numberOfBackers: 15,
      location: "台北",
      restaurantType: "泰式餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "10",
      title: "異國美食薈萃",
      activeType: "Z",
      description:
        "「異國美食薈萃」是一處聚集世界風味的美食天堂，讓您不出國門就能體驗各地的地道美味。無論是義大利的濃郁披薩、日本的精緻壽司、墨西哥的熱情捲餅，還是法國的甜美甜點，這裡應有盡有，滿足每一位饕客的味蕾渴望。\n        我們的主廚團隊從世界各地精選經典食譜，嚴選食材，用心烹調，確保每一道料理都充滿濃郁的異國風情與獨特風味。讓「異國美食薈萃」成為您與家人朋友共度美好時光的理想之地，在這裡品味全球，享受美食帶來的無限驚喜。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/09e9ae12-15aa-4b9e-be2f-0fb66825ce4b.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vOM%2B%2BxH9H2a7bz1uWY2y5AdNK%2FZlWqJNtr1S%2BucVXzzkIWBdWp%2FQ1b54mb%2BDrGwI2FRNHHCLWG6vdXtnyfFbggKmAjkRcMyv3eZe9OYtVXPginMuulEOmVGrNCYSMA7x0%2F%2Bcv0RJxNdfGLtGYYKdHvzIlY0ERrxWY0uLD6E2NBKRKeSt4UQcCEV82m5E2e1qlkcS9tkGTsfVL9k3lIvkuUsqpgNNJeR2mqqm1eGEV5JYJ908cwT2ch4aOLUI1xUtOM%2FbhAliKLJnolUEExAj67e%2FOYIMJUL6SRD19aRejPNUTfbs9BGaRaFXojD4rnugyijWeXtq2i6DgJOT7Suk%2BQ%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/09e9ae12-15aa-4b9e-be2f-0fb66825ce4b.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vOM%2B%2BxH9H2a7bz1uWY2y5AdNK%2FZlWqJNtr1S%2BucVXzzkIWBdWp%2FQ1b54mb%2BDrGwI2FRNHHCLWG6vdXtnyfFbggKmAjkRcMyv3eZe9OYtVXPginMuulEOmVGrNCYSMA7x0%2F%2Bcv0RJxNdfGLtGYYKdHvzIlY0ERrxWY0uLD6E2NBKRKeSt4UQcCEV82m5E2e1qlkcS9tkGTsfVL9k3lIvkuUsqpgNNJeR2mqqm1eGEV5JYJ908cwT2ch4aOLUI1xUtOM%2FbhAliKLJnolUEExAj67e%2FOYIMJUL6SRD19aRejPNUTfbs9BGaRaFXojD4rnugyijWeXtq2i6DgJOT7Suk%2BQ%3D%3D",
      proposer: "喬八",
      progress: 30,
      targetAmount: "500,000",
      currentAmount: "500/月",
      startDate: "2024-10-18",
      endDate: "180",
      numberOfBackers: 15,
      location: "台北",
      restaurantType: "異國料理",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "11",
      title: "澎湖海鮮樂園",
      activeType: "Z",
      description:
        "「澎湖海鮮樂園」讓您在美麗的海岸邊享受豐富的燒烤盛宴，彷彿置身於熱帶度假勝地。這裡提供新鮮的海鮮與多汁的肉類，從大蝦、烤魚到香嫩的牛排、烤雞，每一口都是大自然與美食的完美結合。您可以一邊感受海風拂面，一邊享受熱騰騰的燒烤，在悠閒的戶外氛圍中體驗用餐的無限樂趣。\n無論是與親朋好友一起舉辦聚餐，還是放鬆身心享受日落美景，「海岸燒烤樂園」都將為您帶來難忘的戶外美食體驗。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/db050add-e297-434a-ab18-322fa54b82be.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=M6O87l1C00mvIY9t1rTTBwWSgBebkh1WTqTDzN0osSz6GU3Zu%2FMCMG3dRK8dODURXQb4MOA%2BEBoy9IRP6lNUARq57H0EPCd5KgkVhOrO7jJ%2BS16ayMCt%2BxYEUsRp7xbNotOKcp23ET7GCxF6R8oGV2SUteLRX%2BPxaGekHTFZj1qthR1LPU92kSNf1TSqkiirIg9OwM86fITifNdr%2BcFPg4xadHcNFF4gjQTFBukTEk%2F8lHVT59G5Pdy0Ib55PV%2BB%2Ff2Q6Qaa%2FXOFGz6tVraJRKYk%2BG5auQMUEd77%2B4Ih1sedrSso9Egd195j5vGm4P7NzDayXOdmPmWUA0xUogoUVw%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/db050add-e297-434a-ab18-322fa54b82be.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=M6O87l1C00mvIY9t1rTTBwWSgBebkh1WTqTDzN0osSz6GU3Zu%2FMCMG3dRK8dODURXQb4MOA%2BEBoy9IRP6lNUARq57H0EPCd5KgkVhOrO7jJ%2BS16ayMCt%2BxYEUsRp7xbNotOKcp23ET7GCxF6R8oGV2SUteLRX%2BPxaGekHTFZj1qthR1LPU92kSNf1TSqkiirIg9OwM86fITifNdr%2BcFPg4xadHcNFF4gjQTFBukTEk%2F8lHVT59G5Pdy0Ib55PV%2BB%2Ff2Q6Qaa%2FXOFGz6tVraJRKYk%2BG5auQMUEd77%2B4Ih1sedrSso9Egd195j5vGm4P7NzDayXOdmPmWUA0xUogoUVw%3D%3D",
      proposer: "喬八",
      progress: 30,
      targetAmount: "500,000",
      currentAmount: "500/月",
      startDate: "2024-10-18",
      endDate: "180",
      numberOfBackers: 15,
      location: "澎湖",
      restaurantType: "海鮮餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "12",
      title: "農場饗宴",
      activeType: "Z",
      description: "以農場直送食材創造健康美食,推廣自然生活方式。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/3cc32ca8-98fc-4cb9-baf7-b39e8471a30b.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=ol%2Fi77bK1lyBhhTHSIrwfTQg8yR%2Fu2yaKbJPV1FS9ZcEXmfefWRg%2FPtcE7yRmnjmR4C2dYHagT%2FGurxbMIvxoID7FGh1ZxkN59AiNVqRCozZF6tFGr%2FLUHPxiocArBArrr6Gwgc81hzTTErmOkiEkQifGDXW2zfwaIFeLpESn0E5FQlZuzW3i3GpuNoIN1bHDhGC9Qv%2Bjbb5I8quOvyHwzXXcvZDcAm3kckDN%2Fijc0X%2BoDFgonzUOcvcuu7283jYX2CaYBQQ2D056YkD%2B7RE%2FGa210R6T%2FiuBYQlK%2B94ljQpsvSge%2BBic%2B8RjrZuKeT3Bxw0KzipeOLY0yCp%2FnhSgQ%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/3cc32ca8-98fc-4cb9-baf7-b39e8471a30b.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=ol%2Fi77bK1lyBhhTHSIrwfTQg8yR%2Fu2yaKbJPV1FS9ZcEXmfefWRg%2FPtcE7yRmnjmR4C2dYHagT%2FGurxbMIvxoID7FGh1ZxkN59AiNVqRCozZF6tFGr%2FLUHPxiocArBArrr6Gwgc81hzTTErmOkiEkQifGDXW2zfwaIFeLpESn0E5FQlZuzW3i3GpuNoIN1bHDhGC9Qv%2Bjbb5I8quOvyHwzXXcvZDcAm3kckDN%2Fijc0X%2BoDFgonzUOcvcuu7283jYX2CaYBQQ2D056YkD%2B7RE%2FGa210R6T%2FiuBYQlK%2B94ljQpsvSge%2BBic%2B8RjrZuKeT3Bxw0KzipeOLY0yCp%2FnhSgQ%3D%3D",
      proposer: "喬八",
      progress: 30,
      targetAmount: "800,000",
      currentAmount: "1,500/月",
      startDate: "2024-10-18",
      endDate: "180",
      numberOfBackers: 15,
      location: "台北",
      restaurantType: "素食餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "13",
      title: "韓風炙熱",
      activeType: "A",
      description:
        "韓風炙熱是一家正宗韓式餐廳，將韓國的獨特風味帶到您身邊。餐廳精心挑選地道食材，以傳統的韓式烹調方式呈現，為您帶來經典韓式料理的熱情和美味。無論是香辣的韓式炸雞、醇厚的韓牛燒烤，還是溫暖的石鍋拌飯，每道菜品都充滿濃郁的韓國風情。韓風炙熱提供溫馨的用餐氛圍，無論是家庭聚餐、朋友聚會或是浪漫約會，都是您的理想選擇。讓我們一起感受韓風美味的熱情魅力！",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/cb54d623-ec3f-40f2-9d6d-a8f08846c78d.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=T0XqEsGS5WQV%2B2458USE90OZGuCa3XTDJa23oRdJsSF%2B5A9hi1gQkrY9fc8xmyUaVyBUkcCnTL%2FoTszjcMUv3i2RIzSjecPKV6YHB0RSS7KIFdnbj5khOaf%2Fw5a6RhfMmGjitdk7Jbnb%2FU0FykT2sAwEaTHwLAc87aFPIEBbi2nb7hel1s2255Bm34bckVvh7ODhj7E7esGRRkGd0kjiBAP5w3rhTba3KlZ1iXR0M5DURnJf7AlmoMhpnm%2FaJh6DboXBo3v3gNvoSGE0m0FbnhV0kTMsuLhytJCkYPwR7QEQkO7Ezk78rzeD4MPzF5ozJtZ10UBvxYwB3ELufueeAQ%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/cb54d623-ec3f-40f2-9d6d-a8f08846c78d.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=T0XqEsGS5WQV%2B2458USE90OZGuCa3XTDJa23oRdJsSF%2B5A9hi1gQkrY9fc8xmyUaVyBUkcCnTL%2FoTszjcMUv3i2RIzSjecPKV6YHB0RSS7KIFdnbj5khOaf%2Fw5a6RhfMmGjitdk7Jbnb%2FU0FykT2sAwEaTHwLAc87aFPIEBbi2nb7hel1s2255Bm34bckVvh7ODhj7E7esGRRkGd0kjiBAP5w3rhTba3KlZ1iXR0M5DURnJf7AlmoMhpnm%2FaJh6DboXBo3v3gNvoSGE0m0FbnhV0kTMsuLhytJCkYPwR7QEQkO7Ezk78rzeD4MPzF5ozJtZ10UBvxYwB3ELufueeAQ%3D%3D",
      proposer: "喬八",
      progress: 54,
      targetAmount: "500,000",
      currentAmount: "166,000",
      startDate: "2024-10-18",
      endDate: "180",
      numberOfBackers: 15,
      location: "台南",
      restaurantType: "韓式餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "14",
      title: "綠意盎然",
      activeType: "A",
      description:
        "綠意盎然是一家充滿自然氣息的花園風格餐廳，專注於新鮮健康的料理。這裡以充滿綠意的環境和季節性食材為特色，讓每位顧客在享用美食的同時，能夠感受到如置身大自然般的舒適與愜意。從豐富的蔬果沙拉到創意的植物性料理，綠意盎然致力於將每一份餐點都打造成充滿生命力的美味作品，為您帶來身心靈的綠色享受，是追求健康生活和自然美味的理想場所。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/e4095f28-7f53-4d9e-bd5a-7ee8b1c6ec8b.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=i2fHWTTMEzcfk8nnruBu4l0V%2FyAJ1ioDuVTetnVz27Vr8o5FhtfpUQGujGD218blWTw%2Fi7d7mwck8o9ltUYRkGuBBilNJKWXInwxmwx8KWe1Wns8ouha5ACZLZvpV3JK%2FJoa9Yoh%2BOG7GOlEJAzl8YI6uyLjge6%2FQ8eN6L4nDBpwB4nlqBT0nyVeLsF6U0wSavYCVSGFrEUYx97mqzhB6gsmw5kHOhgc71uSZZ2WE3qD1KSQhYWGk4rdNT%2B8j4vM1q7wlDACjt4edWldioaNA0SZu0bjNT3z1NdTVDe1dpRXK1JuRauk2whD%2BSK1yTyFb2Ys%2B38shCntt%2FBRIk%2FKkw%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/e4095f28-7f53-4d9e-bd5a-7ee8b1c6ec8b.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=i2fHWTTMEzcfk8nnruBu4l0V%2FyAJ1ioDuVTetnVz27Vr8o5FhtfpUQGujGD218blWTw%2Fi7d7mwck8o9ltUYRkGuBBilNJKWXInwxmwx8KWe1Wns8ouha5ACZLZvpV3JK%2FJoa9Yoh%2BOG7GOlEJAzl8YI6uyLjge6%2FQ8eN6L4nDBpwB4nlqBT0nyVeLsF6U0wSavYCVSGFrEUYx97mqzhB6gsmw5kHOhgc71uSZZ2WE3qD1KSQhYWGk4rdNT%2B8j4vM1q7wlDACjt4edWldioaNA0SZu0bjNT3z1NdTVDe1dpRXK1JuRauk2whD%2BSK1yTyFb2Ys%2B38shCntt%2FBRIk%2FKkw%3D%3D",
      proposer: "喬八",
      progress: 30,
      targetAmount: "500,000",
      currentAmount: "100,000",
      startDate: "2024-10-18",
      endDate: "180",
      numberOfBackers: 15,
      location: "台北",
      restaurantType: "素食餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      id: "15",
      title: "綠意盎然",
      activeType: "Z",
      description:
        "綠意盎然是一家充滿自然氣息的花園風格餐廳，專注於新鮮健康的料理。這裡以充滿綠意的環境和季節性食材為特色，讓每位顧客在享用美食的同時，能夠感受到如置身大自然般的舒適與愜意。從豐富的蔬果沙拉到創意的植物性料理，綠意盎然致力於將每一份餐點都打造成充滿生命力的美味作品，為您帶來身心靈的綠色享受，是追求健康生活和自然美味的理想場所。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/e4095f28-7f53-4d9e-bd5a-7ee8b1c6ec8b.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=i2fHWTTMEzcfk8nnruBu4l0V%2FyAJ1ioDuVTetnVz27Vr8o5FhtfpUQGujGD218blWTw%2Fi7d7mwck8o9ltUYRkGuBBilNJKWXInwxmwx8KWe1Wns8ouha5ACZLZvpV3JK%2FJoa9Yoh%2BOG7GOlEJAzl8YI6uyLjge6%2FQ8eN6L4nDBpwB4nlqBT0nyVeLsF6U0wSavYCVSGFrEUYx97mqzhB6gsmw5kHOhgc71uSZZ2WE3qD1KSQhYWGk4rdNT%2B8j4vM1q7wlDACjt4edWldioaNA0SZu0bjNT3z1NdTVDe1dpRXK1JuRauk2whD%2BSK1yTyFb2Ys%2B38shCntt%2FBRIk%2FKkw%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/e4095f28-7f53-4d9e-bd5a-7ee8b1c6ec8b.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=i2fHWTTMEzcfk8nnruBu4l0V%2FyAJ1ioDuVTetnVz27Vr8o5FhtfpUQGujGD218blWTw%2Fi7d7mwck8o9ltUYRkGuBBilNJKWXInwxmwx8KWe1Wns8ouha5ACZLZvpV3JK%2FJoa9Yoh%2BOG7GOlEJAzl8YI6uyLjge6%2FQ8eN6L4nDBpwB4nlqBT0nyVeLsF6U0wSavYCVSGFrEUYx97mqzhB6gsmw5kHOhgc71uSZZ2WE3qD1KSQhYWGk4rdNT%2B8j4vM1q7wlDACjt4edWldioaNA0SZu0bjNT3z1NdTVDe1dpRXK1JuRauk2whD%2BSK1yTyFb2Ys%2B38shCntt%2FBRIk%2FKkw%3D%3D",
      proposer: "喬八",
      progress: 30,
      targetAmount: "500,000",
      currentAmount: "100,000",
      startDate: "2024-10-18",
      endDate: "180",
      numberOfBackers: 15,
      location: "台北",
      restaurantType: "素食餐廳",
      socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
      },
    },

    // {
    //   id: "9",
    //   title: "喵喵咖啡廳",
    //   description:
    //     "喵喵咖啡館在於創辦人在台北時創立,我們的理念很簡單-提供優質的食物和咖啡,咖啡具有使人們停下來和彼此互動的能力。人與人之間的聯繫就是我們在這裡的原因,有時我們意識到這就像兩個拿鐵一樣簡單。享用咖啡,早餐或午餐,我們隨時為您服務!",
    //   imageUrlLg:
    //     "https://storage.googleapis.com/fir-express-80358.appspot.com/images/88649426-a25a-4abc-b3c2-d602a21105bd.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vWtIkomAxyo%2BY3Njj1iC8HorQg4Q4Jh5t9uTWVMOfnaJyJGX07j7h3PHI6bXRt7B2DQC5n8mnPCIhvKsfmghbKeIJ0W0Vm9%2BmeO4fORUSImN2HvwsNlhqXP2uoOWuiMmiD%2B2REsQ3FRNdnjaF%2FzBcDNdC5k60v9IyjULk%2FirD%2BrA%2BTKJ0B4AT%2BFZREMulP29TpAdAlzqtm4urow5A74A0vKGwWF2SAe2m5FqFvzhXJxoFz0ep5AbSGBZkrXC%2FDjw%2BBrhhxyVOnapo%2FDMp3iXjNBaSof%2FJg5q77aCcP9O%2BWLDBFzBrh0ve01hbrh7WWPeopKawGK7H1JOAD7Y24DPug%3D%3D",
    //   imageUrlSm:
    //     "https://storage.googleapis.com/fir-express-80358.appspot.com/images/88649426-a25a-4abc-b3c2-d602a21105bd.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vWtIkomAxyo%2BY3Njj1iC8HorQg4Q4Jh5t9uTWVMOfnaJyJGX07j7h3PHI6bXRt7B2DQC5n8mnPCIhvKsfmghbKeIJ0W0Vm9%2BmeO4fORUSImN2HvwsNlhqXP2uoOWuiMmiD%2B2REsQ3FRNdnjaF%2FzBcDNdC5k60v9IyjULk%2FirD%2BrA%2BTKJ0B4AT%2BFZREMulP29TpAdAlzqtm4urow5A74A0vKGwWF2SAe2m5FqFvzhXJxoFz0ep5AbSGBZkrXC%2FDjw%2BBrhhxyVOnapo%2FDMp3iXjNBaSof%2FJg5q77aCcP9O%2BWLDBFzBrh0ve01hbrh7WWPeopKawGK7H1JOAD7Y24DPug%3D%3D",
    //   proposer: "兔寶寶溜滑梯",
    //   progress: 80,
    //   targetAmount: "1,000,000",
    //   currentAmount: "800,000",
    //   startDate: "2022-08-01",
    //   endDate: "13",
    //   numberOfBackers: 115,
    //   location: "台北",
    //   restaurantType: "咖啡廳",
    //   socialLinks: {
    //     facebook: "https://www.facebook.com/",
    //     twitter: "https://twitter.com/",
    //     instagram: "https://www.instagram.com/",
    //   },
    // },
  ];
};
