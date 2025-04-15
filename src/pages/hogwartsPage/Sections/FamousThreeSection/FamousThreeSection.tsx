import Section from "@components/ui/Section";
import classes from "./FamousThreeSection.module.scss";
import { FC } from "react";
import { FamousThreeSectionProps } from "./FamousThreeSection.types";
import HighlightedLinks from "@components/ui/HighlightedLinksText";
import three from "@assets/three.png";

const FamousThreeSection: FC<FamousThreeSectionProps> = ({
students,
onStudentClick,
}) => (
<Section id="section4">
    {/*TODO: имена классов */}
    <div className={classes.background}>
    <div className={classes.hgPageThreeColumn}>
        <h2 className={classes.title}>The famous three</h2>
        <HighlightedLinks
        className={classes.linkText}
        text="Harry Ron Hermione are students at Hogwarts School of Witchcraft and Wizardry. Together, they faced many challenges and defeated a terrifying monster that threatened the school. With Harry’s bravery, Ron’s loyalty, and Hermione’s cleverness, they proved that true friendship and courage can overcome even the darkest dangers."
        linkItems={students}
        onClick={onStudentClick}
        />
    </div>
    <div className={classes.hgPageThreeImage}>
        {/*TODO: пропсы или импорт */}
        <img src={three} />
    </div>
    </div>
</Section>
);
export default FamousThreeSection;
