export interface IconButtonProps {
  url?: string | undefined;
  title: string;
  iconName: string;
  variant?:
    | "solid"
    | "ghost"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | undefined;
  textColor?: string;
  darkTextColor?: string;
}
