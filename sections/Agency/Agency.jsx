import Image from "next/image";
import {
    StyledContainer,
    StyledTextContainer,
    StyledTitle,
    StyledDescription,
    StyledLayoutContainer,
    StyledImageContainer,
    StyledCardContainer,
    StyledCard,
    StyledResponsiveItemContainer,
} from "./elements";

import {Card} from "~/collections";


export const Agency = ({ image, title, description, cards, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
            <StyledLayoutContainer>
                <StyledImageContainer>
                    <StyledResponsiveItemContainer>
                        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
                    </StyledResponsiveItemContainer>
                </StyledImageContainer>
                <StyledCardContainer>
                    <span>Card 1 CARd 1 Car 1 Card 1</span>
                    <span>Card 2</span>
                    <span>Card 3</span>

                    {
                        cards.map((card, index) => 
                            <StyledCard key={index} header={card.header} paragraph={card.paragraph} />
                        )
                    }
                </StyledCardContainer>
            </StyledLayoutContainer>
        </StyledContainer>
    );
}