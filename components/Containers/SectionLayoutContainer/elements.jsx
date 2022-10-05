import styled from "styled-components";

export const StyledLayoutContainer = styled(({...props}) => <div {...props} />)`
    display: flex;
    width: 100%
    height: auto;
    background-color: lightblue;
`;