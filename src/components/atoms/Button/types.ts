type ButtonTypes = "primary" | "arrow" | "refresh" | "theme";

export interface ButtonProps {
  id: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size?: number;
  disabled?: boolean;
  children?: React.ReactNode;
  type: ButtonTypes;
}
