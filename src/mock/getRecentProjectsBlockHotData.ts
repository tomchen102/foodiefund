import { RecentProjectsProps } from "@/types/RecentProjectsListProps";

export const getRecentProjectsBlockHotData = async (): Promise<RecentProjectsProps[]> => {
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
      href: "projects/1",
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
      href: "projects/2",
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
      href: "projects/3",
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
      href: "projects/4",
    },
  ];
};
