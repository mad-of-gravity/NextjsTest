import Image from "next/image";
import {
    StyledContainer,
    StyledTextContainer,
    StyledTitle,
    StyledDescription
} from "./elements";


export const Agency = ({ image, title, description, ctaText, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
        </StyledContainer>
    );
}