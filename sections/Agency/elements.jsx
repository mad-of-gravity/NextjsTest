import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading, SectionLayoutContainer } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

/** Here will be placed the section content like: image and card containers */
export const StyledLayoutContainer = styled(({...props}) => <div {...props} />)`
  display: flex;
  margin: 30px;
  width: 100%;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  padding: 10px;
  width: 100%;
  height: 100%;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
`;

export const StyledCardContainer = styled(({ ...props}) => <div {...props} />)`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
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