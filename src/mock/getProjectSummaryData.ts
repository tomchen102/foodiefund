import { ProjectSummaryDataProps } from "@/app/projects/[id]/_components/ProjectSummary/types";

export const getProjectSummaryData = async (): Promise<ProjectSummaryDataProps[]> => {
  return [
    {
      id: "1",
      title: "龍蝦盛宴",
      description:
        "龍蝦盛宴是一家以新鮮龍蝦料理為主的高級餐廳，提供多樣化的龍蝦美食，從經典的龍蝦湯到創意龍蝦料理，滿足所有愛好海鮮的饕客。餐廳以精緻的烹飪技巧結合當季食材，讓每一口都充滿海洋的鮮味。無論是約會晚餐還是家人聚餐，龍蝦盛宴都是您享受奢華美味的不二選擇。",
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
      title: "咖啡與時光",
      description:
        "咖啡與時光是一家充滿溫暖氛圍的咖啡館，融合了意大利經典美食與令人意想不到的趣味元素。我們的菜單靈感來自浪漫的故事與歡樂的想像力，將手工披薩、義大利麵等美味料理與幽默風格結合，帶給顧客獨一無二的用餐體驗。在這裡，不僅能享受到正宗的義式美味，更能感受到童話般的用餐氛圍，是約會、聚會和家庭共度美好時光的理想場所。",
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
      location: "台中",
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
      description:
        "甜點夢工廠是一家專注於提供精緻美味甜點的品牌，致力於讓每一位顧客在品嚐甜點時都能感受到幸福與甜蜜。無論是細膩的手工蛋糕、多層次的馬卡龍，還是口感柔軟的奶酪，每一款產品都由經驗豐富的甜點師傅用心製作，選用高品質的原材料，確保每一口都充滿香氣與滿足感。甜點夢工廠還提供個性化訂製服務，無論是生日、婚禮或其他特殊場合，都能為您創造獨一無二的甜點體驗。從產品的設計到口味的搭配，甜點夢工廠始終追求完美，致力於將甜點的美味與藝術性結合，讓每一份甜點都成為值得回味的作品。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/40ae638e-88cb-4e10-8dee-b8177f9419d5.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=lfgmBfNQzYuaHrvbRXxVAsSc4LEGoXBmGYPZPMO0lPjas1iDgFQw2r1zAFybufD%2BvbiWN9%2Bf7RKLMFWz9jbMuCsGTeRYb5NDnihZRPrQJsLraWyPjm1lg2E6Y2PFV9e9QXrWfmh5aGQGNJiRyROKh6szmcrk8OPv0wXGcZ3NMXq6q9q5Z9W1CinC9cdVYdlocCNfNIjs4%2FahyK%2Bkjf4H4ARKa7c1qs%2B%2BHGtzzO6IyMLuDcBnrCLXvTa1saIS4%2Fkq5HJXec0xA6xrpM9Kf1id5XfeE7pOaHHNqIHSlK2%2BM6Sx0ZuTzqpOhPOLnYgrIseJapkv3eC92gw9a77OsUHwwg%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/40ae638e-88cb-4e10-8dee-b8177f9419d5.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=lfgmBfNQzYuaHrvbRXxVAsSc4LEGoXBmGYPZPMO0lPjas1iDgFQw2r1zAFybufD%2BvbiWN9%2Bf7RKLMFWz9jbMuCsGTeRYb5NDnihZRPrQJsLraWyPjm1lg2E6Y2PFV9e9QXrWfmh5aGQGNJiRyROKh6szmcrk8OPv0wXGcZ3NMXq6q9q5Z9W1CinC9cdVYdlocCNfNIjs4%2FahyK%2Bkjf4H4ARKa7c1qs%2B%2BHGtzzO6IyMLuDcBnrCLXvTa1saIS4%2Fkq5HJXec0xA6xrpM9Kf1id5XfeE7pOaHHNqIHSlK2%2BM6Sx0ZuTzqpOhPOLnYgrIseJapkv3eC92gw9a77OsUHwwg%3D%3D",
      proposer: "梅川伊芙",
      progress: 80,
      targetAmount: "500,000",
      currentAmount: "400,000",
      startDate: "2024-09-18",
      endDate: "80",
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
      description:
        "澎湖海岸燒烤樂園是一處充滿歡樂與美食的戶外燒烤勝地，位於澎湖迷人的海岸線旁，讓您一邊享受美味燒烤，一邊欣賞美麗的海景。這裡提供新鮮的海鮮、肉類以及豐富的蔬菜供您自由搭配，無論是與朋友相聚還是家庭聚會，都能在戶外的自然氛圍中度過一個難忘的燒烤時光。伴隨著徐徐海風和落日餘暉，澎湖海岸燒烤樂園為您打造一場美食與自然交織的難忘體驗。",
      imageUrlLg:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/fcc46ba3-b10a-4c58-bac5-834626ae0cd9.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vU%2Fk1XHhsxtJ9r1AwwLw6Xc3t4YNBiIbc4gqSc3IAEgPya4GBFD1XsvGVK1WRNXGUu3Eg05zHpaYaaiTiDFCaArK2MKRIARwRgHgSfNPtakZwa1cuBBahhUycTgzH6j%2FzcbgvxYoYyt2Q3tuXm1Tw441dgFweMEUYSGJeOxjRi%2FAyv2QlsjC4YEjTem44U%2B3F%2BZQ3ZxXAt0ptCWPIWNtmnW8yqXjZjug%2BsQdF6Lc5cmlbNuq4qBG4nnsUZKPTH3Q1HOHlnwMZiaPoiW5f0AlQSZcyqP8dzcT%2FHxSg5t3YfK9lkN5fJ5YKqbwt8K3X8H7NqOMZS09J6g%2FgTR7oUsZjQ%3D%3D",
      imageUrlSm:
        "https://storage.googleapis.com/fir-express-80358.appspot.com/images/fcc46ba3-b10a-4c58-bac5-834626ae0cd9.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=vU%2Fk1XHhsxtJ9r1AwwLw6Xc3t4YNBiIbc4gqSc3IAEgPya4GBFD1XsvGVK1WRNXGUu3Eg05zHpaYaaiTiDFCaArK2MKRIARwRgHgSfNPtakZwa1cuBBahhUycTgzH6j%2FzcbgvxYoYyt2Q3tuXm1Tw441dgFweMEUYSGJeOxjRi%2FAyv2QlsjC4YEjTem44U%2B3F%2BZQ3ZxXAt0ptCWPIWNtmnW8yqXjZjug%2BsQdF6Lc5cmlbNuq4qBG4nnsUZKPTH3Q1HOHlnwMZiaPoiW5f0AlQSZcyqP8dzcT%2FHxSg5t3YfK9lkN5fJ5YKqbwt8K3X8H7NqOMZS09J6g%2FgTR7oUsZjQ%3D%3D",
      proposer: "香吉士",
      progress: 90,
      targetAmount: "2,000,000",
      currentAmount: "1800,000",
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
