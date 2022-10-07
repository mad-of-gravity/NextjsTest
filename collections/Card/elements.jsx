// Styled elements for the Card go here
import styled, { css } from "styled-components";
import { CardHeading, CardParagraph, } from "~/components";

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  margin: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 2px solid transparent;
  border-radius: 6px;

  &:hover {
    border-color: #1E90FF;
    .heading {
      color: #1E90FF;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-decoration-color: #1E90FF;
    }
  }
`;

export const StyledIconContainer = styled(({ ...props }) => <div {...props} />)`
  margin: 10px;
`;

export const StyledTextLayout = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
`;

export const StyledCardIcon = styled(({ ...props }) => (
  <CardIcon {...props} />
))``;

export const StyledCardHeading = styled(({ ...props }) => (
  <CardHeading {...props} />
))`
  margin: 0;
  padding: 0;
`;

export const StyledCardParagraph = styled(({ ...props }) => (
  <CardParagraph {...props} />
))`
  margin: 0;
  padding: 0;
`;
