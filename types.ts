export interface IProducts {
  id: string;
  image: string;
  catname: string;
  productname: string;
}

export interface IApiResponse<T> {
  status: string;
  message: string;
  data?: T;
}

export interface IBlogItem {
  id : number;
  thumbnail: string;
  altTag ? : string;
  heading: string;
  description: string;
  date: string;
  author?: string;
  url: string;
}

export interface IList {
  id: string;
  link: string;
  text: string;
  submenu?: IList[];
}
