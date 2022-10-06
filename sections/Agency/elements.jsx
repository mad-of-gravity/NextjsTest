import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading, SectionLayoutContainer } from "~/components";
import { Card } from "~/collections";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

/** Here will be placed the section content like: image and card containers */
export const StyledLayoutContainer = styled(({...props}) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  margin: 30px;
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
`;

export const StyledResponsiveItemContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 15rem;
  max-height: 25rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;

export const StyledCardContainer = styled(({ ...props}) => <div {...props} />)`
  display: flex;
  margin: 5px;
  padding: 10px;
  flex-direction: column;
  width: 100%;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.0rem 0 0;
  padding: 0px;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  margin-top: 1.65rem;
  font-family: sans-serif;
  text-align: center;
`;

export const StyledCard = styled(({ ...props }) => <Card {...props}/>)``;