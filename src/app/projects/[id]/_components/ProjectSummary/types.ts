export interface ProjectSummaryDataProps {
  ProjectSummaryData: {
    id: string;
    title: string;
    description: string;
    imageUrlLg: string;
    imageUrlSm: string;
    proposer: string;
    targetAmount: string;
    currentAmount: string;
    startDate: string;
    endDate: string;
    location: string;
    restaurantType: string;
    progress: number;
    numberOfBackers: number;
    socialLinks: {
      facebook: string;
      twitter: string;
      instagram: string;
    };
  };
}
