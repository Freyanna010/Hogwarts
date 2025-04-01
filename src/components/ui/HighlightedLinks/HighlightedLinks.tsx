import { HighlightedLinksProps } from "./HighlightedLinks.types";

const HighlightedLinks = <T extends { id: string; name: string }>(
  props: HighlightedLinksProps<T>,
) => {
  const { linkWords, linkItems, className, onClick } = props;

  return <div></div>;
};

export default HighlightedLinks;
