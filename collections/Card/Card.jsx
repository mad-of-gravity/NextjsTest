// The Card to be exported goes here
import Image from "next/image";
import { 
    StyledCardContainer, 
    StyledCardHeading, 
    StyledCardParagraph,
    StyledCardIcon,
} from "./elements";


export const Card = ({ header, paragraph, icon, ...props}) => {
    return (
        <StyledCardContainer {...props}>
            <StyledCardIcon>
                <Image layout="responsive" src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
            </StyledCardIcon>
            <StyledCardHeading>
                {header}
            </StyledCardHeading>
            <StyledCardParagraph>
                {paragraph}
            </StyledCardParagraph>
        </StyledCardContainer>
    );
}