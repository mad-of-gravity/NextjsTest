import { StyledHeading } from "./elements";

export const CardHeading = ({children, ...props}) => {
    return (
        <StyledHeading {...props}>
            {children}
        </StyledHeading>
    );
}