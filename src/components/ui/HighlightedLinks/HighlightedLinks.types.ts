export interface HighlightedLinksProps<T extends { id: string; name: string }> {
  linkWords: string[];
  linkItems: T[];
  className?: string;
  onClick: (id: string) => void;
}
