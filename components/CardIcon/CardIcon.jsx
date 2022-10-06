import { StyledIcon } from "./elements";

export const CardIcon = ({icon, ...props}) => {
    return (
        <StyledIcon {...props}>
            {icon}
        </StyledIcon>
    );
}