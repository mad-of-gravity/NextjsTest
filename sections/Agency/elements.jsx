import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading, SectionLayoutContainer } from "~/components";
import { Card } from "~/collections";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  margin-top: 1.65rem;
  font-family: 'Poppins';
  text-align: center;
`;

/** Here will be placed the section content like: image and card containers */
export const StyledLayoutContainer = styled(({...props}) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
  width: 70%; 

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  margin: 5px;
  padding: 10px;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;

  /**With this query I center the image horizontally.. */
  @media screen and (max-width: 1024px) {
    .responsive-item {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const StyledResponsiveItemContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 20rem; /** from 15rem */
  max-height: 30rem; /** from 25rem */
  margin-left: auto;
`;

export const StyledCardContainer = styled(({ ...props}) => <div {...props} />)`
  display: flex; 
  flex-direction: column; 
  justify-content: space-around;
  margin: 5px;
  padding: 10px;
  width: 100%;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  font-family: Poppins;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.0rem 0 0;
  padding: 0px;
`;


export const StyledCard = styled(({ ...props }) => <Card {...props}/>)`
  /**Aligning the cards in the center of the StyledCardContainer */
  margin-left: auto;
  margin-right: auto;
`;