export interface HighlightedLinksProps<T extends { id: string; name: string }> {
  text: string;
  linkItems: T[];
  className?: string;
  onClick: (id: string) => void;
}
