import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
`; 

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: sans-serif;
  text-align: center;
`;