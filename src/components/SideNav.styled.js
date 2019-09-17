import styled, { css, keyframes } from 'styled-components';

const slideIn = keyframes`
    from {left:-599px;}
    to {left:  0;}
`;

const slideOut = keyframes`
  from {left: 0px;}
  to {left:-599px;}
`;

export const SideNavWrapper = styled.div`
    border-right: 3px solid #333;
    display: inline-block;
    box-sizing: border-box;
    background: #fff;
    z-index: 9999;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 20%;
    animation: ${(props) =>
        props.isMenuOpen ? css`${slideIn} 0.4s ease 0s forwards;` : css`${slideOut} 1s ease 0s forwards;`};
`;

export const SideNaveCloseButton = styled.div`
    display: inline-block;
    width: 100%;
    margin: 19px 0 16px 0;
`;

export const CloseIcon = styled.div`
    float: right;
    cursor: pointer;
    padding: 13px 20px 0 0;
    span:nth-child(2) {
        display: none;
    }
`;

export const MenuList = styled.ul`
    list-style-type: none;
    > a {
        &:-webkit-any-link {
            color: #333;
        }
    }
`;

export const CheckListWrapper = styled.div`
    padding: 50px;
    box-sizing: border-box;
    .rt-tr.-odd {
        background-color: rgba(0, 0, 0, 0.03);
    }
    .ReactTable .rt-thead.-header {
        background-color: #d7d8d6;
        box-shadow: none;
    }
`;

export const MenuHeader = styled.div`
    padding: 0 10px;
    box-sizing: border-box;
    > span {
        padding-left: 15px;
    }
`;

export const HeaderBlock = styled.div`
clear:both;
> h1 {
    float:left;
};
> button{
float:right;
}`;
