// Styled elements for the Card go here
import styled, { css } from "styled-components";
import { CardHeading, CardParagraph, CardIcon } from "~/components";

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
    margin: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 6px;
`;

export const StyledCardIcon = styled(({...props }) => <CardIcon {...props} />)`
    
`;

export const StyledCardHeading = styled(({...props }) => <CardHeading {...props} />)`
    margin: 0;
    padding: 0;
`;

export const StyledCardParagraph = styled(({...props }) => <CardParagraph {...props} />)`
    margin: 0;
    padding: 0;
`;


