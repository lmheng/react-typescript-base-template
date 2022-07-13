export enum InputIconType {
  User,
  Lock,
  Visible,
  Invisible,
  Calendar,
}

export interface IInput {
  name: string;
  label: string;
  required: boolean;
  onChange: any;
  error: boolean;
  helperText: string;
  readonly: boolean;
}

export interface ISelectItem {
  label: string;
  id: any;
}

export interface ITextInput extends IInput {
  showIcon: boolean;
  value: string;
  icon: InputIconType;
}

export interface IPasswordInput extends ITextInput {
  value: string;
  show: boolean;
}

export interface IMulitLineTextInput extends IInput {
  value: string;
  numberOfRows: number;
}

export interface INumberInput extends IInput {
  value: number;
  prefix: string;
}

export interface IDateInput extends IInput {
  value: string | Date;
  minimumDate: Date;
  maximumDate: Date;
}

export interface ISelectInput extends IInput {
  value: ISelectItem;
  menuItems: Array<ISelectItem>;
}

export interface ICustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export interface IDropzoneInput extends IInput {
  maxFiles: number;
  multiple: boolean;
  acceptedType: string;
}

export interface ISwitchInput extends IInput {
  showLabel: boolean;
  value: boolean;
  colour: string;
}
