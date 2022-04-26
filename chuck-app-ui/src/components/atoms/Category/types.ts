export interface CategoryProps {
  id: string;
  index: number;
  title: string;
  onPick: () => void;
  active: boolean;
}
