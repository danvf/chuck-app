export interface DisplayProps {
  isLoading: boolean;
  onRefresh: () => void;
  joke: string | undefined;
}
