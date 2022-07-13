export enum IconType {
  Add,
  Download,
  Sort,
  Filter,
  Search,
  Notification,
  Loading,
}

export interface IBaseButton {
  text: string;
  onClick: any;
  iconType?: IconType | undefined;
}

export interface IButton extends IBaseButton {
  cancel: boolean;
  showIcon: boolean;
  colour: string;
  loading: boolean;
}

export interface IUploadButton {
  text: string;
  colour: string;
  loading: boolean;
  onUpload: any;
  multiple: boolean;
  accepted: string;
}

export interface IIconButton extends IBaseButton {
  showText: boolean;
}

export interface ITabButton {
  value: number;
  label: string;
}

export interface ITabButtons {
  selectedValue: number;
  handleChange: any;
  tabs: Array<ITabButton>;
}
