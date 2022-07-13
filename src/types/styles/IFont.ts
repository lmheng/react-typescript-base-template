export enum Align {
  Center,
  Left,
  Right,
  Justify,
}

export interface IFont {
  text: string;
  gutterBottom: boolean;
  align?: Align;
}

export interface IFormFont extends IFont {
  htmlFor: string;
}

export interface ISubtextFont extends IFont {
  error: boolean;
}
