import React from "react";
import { HighlightedLinksProps } from "./HighlightedLinks.types";
import classes from "./HighlightedLinksText.module.scss"

const HighlightedLinks = <T extends { id: string; name: string }>(
props: HighlightedLinksProps<T>
) => {
const { text, linkItems, className, onClick } = props;

return (
    <span className={className}>
    {text.split(/\b/).map((word, index) => {
    const linkItem = linkItems.find((item) => item.name.split(" ")[0] === word);

        return (
        <React.Fragment key={index}>
            {linkItem ? (
            <a  className={classes.link}
                href={`/students/${linkItem.id}`}
                onClick={(e) => {
                e.preventDefault();
                onClick(linkItem.id);
                }}
            >
                {word}
            </a>
            ) : (
            word
            )}
            {' '}
        </React.Fragment>
        );
    })}
    </span>
  );}

export default HighlightedLinks;
