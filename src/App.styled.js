import styled from "styled-components";

export const SideMenuWrapper = styled.div``;
export const AppWrapper = styled.div`position:relative;`

export const HiddenDiv = styled.div`
    display: inline-block;
    width: 20%;
`;

export const MenuButton = styled.button`
    border: none;
    background: none;
    font-size: 30px;
`

export const DescriptionBlock = styled.div`
    display: inline-block;
    width: ${(props) => (props.MenuHide ? '80%' : '100%')};
`
