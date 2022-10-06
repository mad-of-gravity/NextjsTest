import { StyledParagraph } from "./elements";

export const CardParagraph = ({children, ...props}) => {
    return (
        <StyledParagraph {...props}>
            {children}
        </StyledParagraph>
    );
}