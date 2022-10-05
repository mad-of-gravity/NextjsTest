import Image from "next/image";
import {
    StyledContainer,
    StyledTextContainer,
    StyledTitle,
    StyledDescription,
    StyledLayoutContainer,
    StyledImageContainer,
    StyledCardContainer,
} from "./elements";


export const Agency = ({ image, title, description, layoutContent, ctaText, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
            <StyledLayoutContainer>
                <StyledImageContainer>
                    <img style={{float: "right"}} src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </StyledImageContainer>
                <StyledCardContainer>
                    <span>Card 1</span>
                    <span>Card 2</span>
                    <span>Card 3</span>
                </StyledCardContainer>
            </StyledLayoutContainer>
        </StyledContainer>
    );
}