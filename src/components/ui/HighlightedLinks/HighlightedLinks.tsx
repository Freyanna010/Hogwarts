import React from "react";
import { HighlightedLinksProps } from "./HighlightedLinks.types";

const HighlightedLinks = <T extends { id: string; name: string }>(
  props: HighlightedLinksProps<T>
) => {
const { linkWords, linkItems, className, onClick } = props;

  return (
    <>
    {linkWords.map((word, index) => {
        const item = linkItems.find((el) => el.name.startsWith(word));

        return item ? (
        <React.Fragment key={item.id}>
            {index > 0 && " "}
            <a
            className={className}
            href={`#${item.id}`}
            onClick={(e) => {
                e.preventDefault();
                onClick(item.id);
            }}
            >
            {word}
            </a>
        </React.Fragment>
        ) : (
        <React.Fragment key={word}>
            {index > 0 && " "}
            {word}
        </React.Fragment>
        );
    })}
    </>
);
};

export default HighlightedLinks;
