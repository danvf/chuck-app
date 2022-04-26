export type Status = "category" | "pick" | "error";

export interface HelperProps {
  status: Status;
  category: string;
}
