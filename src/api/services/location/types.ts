export interface Area {
  ZipCode: string;
  AreaName: string;
  AreaEngName: string;
}

export interface City {
  CityName: string;
  CityEngName: string;
  AreaList: Area[];
}

export interface CityState {
  label: string;
  value: string;
  AreaList: {
    AreaName: string;
    ZipCode: string;
  }[];
}

export interface AreaState {
  label: string;
  value: string;
  ZipCode: string;
}

export type zipCodeState = Pick<Area, "ZipCode">;
