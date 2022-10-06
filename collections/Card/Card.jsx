// The Card to be exported goes here
import { 
    StyledCardContainer, 
    StyledCardHeading, 
    StyledCardParagraph 
} from "./elements";


export const Card = ({ header, paragraph, ...props}) => {
    return (
        <StyledCardContainer {...props}>
            <StyledCardHeading>
                {header}
            </StyledCardHeading>
            <StyledCardParagraph>
                {paragraph}
            </StyledCardParagraph>
        </StyledCardContainer>
    );
}