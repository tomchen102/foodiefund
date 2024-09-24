import { IconType } from 'react-icons';
export interface HeaderProps {
    data: {
      mainNav:{
        title: string;
        hrefUrl: string;
      },
      userNav:{
        title:string;
        icon:any;
        userTitle:string;
        hrefUrl:string;
      }
    }[];
  }