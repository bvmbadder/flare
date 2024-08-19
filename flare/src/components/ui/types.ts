import { IconType } from "react-icons";
export type ButtonPropType = {
  label: string;
  backgroundColor: string;
  color?: string;
  icon?: IconType;
  loading: boolean;
  disabled?: boolean;
  rounded?: boolean;
  borderColor?: string;
  onClick: () => void;
  full?: boolean;
};
