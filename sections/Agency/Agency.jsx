import Image from "next/image";
import { useState } from "react";

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

export const Agency = ({ image, title, description, cards, initialCardWidth, ...props }) => {

  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledLayoutContainer>
        <StyledImageContainer className="image-container">    
          <StyledResponsiveItemContainer className="responsive-item">
            <Image
              layout="responsive"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </StyledResponsiveItemContainer> 
        </StyledImageContainer>
        <StyledCardContainer className="card-container">
          {
            
            cards.map((card, index) => (
            <StyledCard
              id={index}
              linkid="0"
              key={index}
              header={card.header}
              paragraph={card.paragraph}
              icon={card.icon}
              style={{width: initialCardWidth[index], marginLeft: 0}}
            />
          ))}
        </StyledCardContainer>
      </StyledLayoutContainer>
    </StyledContainer>
  );
};
