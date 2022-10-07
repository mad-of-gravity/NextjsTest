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

import { Card } from "~/collections";

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
            <Image
              layout="responsive"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </StyledResponsiveItemContainer>
        </StyledImageContainer>
        <StyledCardContainer>
          {cards.map((card, index) => (
            <StyledCard
              id={index}
              linkID="0"
              key={index}
              header={card.header}
              paragraph={card.paragraph}
              icon={card.icon}
            />
          ))}
        </StyledCardContainer>
      </StyledLayoutContainer>
    </StyledContainer>
  );
};
