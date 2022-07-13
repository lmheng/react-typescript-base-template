export interface IImage {
  backgroundImg: string;
}

export interface IImageClickable extends IImage {
  onClick: any;
}

export interface IAvatar extends IImageClickable {
  name: string;
  showProfile: boolean;
}
