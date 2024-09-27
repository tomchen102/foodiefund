export interface FooterProps {
  data: {
    aboutNav: {
      title: string;
      hrefUrl: string;
    };
    helpNav: {
      title: string;
      hrefUrl: string;
    };
    moreNav: {
      title: string;
      hrefUrl: string;
    };
  }[];
}
