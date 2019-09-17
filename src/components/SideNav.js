import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFolder } from 'react-icons/fa';
import { routes } from '../config/SideNavRoutesConfig';
import { SideNavWrapper, SideNaveCloseButton, CloseIcon, MenuList, MenuHeader } from './SideNav.styled';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleHeaderFolder: false
        };
    }
    onMenuHeaderClick(e) {
        let targetId = e.target.id.split('_')[1];
        let listId = `folderList_${targetId}`.split('_')[1];
        if (targetId === listId) {
            this.setState((prevState) => ({ toggleHeaderFolder: !prevState.toggleHeaderFolder }));
            document.getElementById(`folderList_${targetId}`).style.display = !this.state.toggleHeaderFolder
                ? 'none'
                : 'block';
        }
    }
    render() {
        const { toggleHeaderFolder } = this.state;
        return (
            <SideNavWrapper isMenuOpen={this.props.isMenuOpen}>
                <SideNaveCloseButton>
                    <CloseIcon role="button" onClick={() => this.props.onClose()}>
                        X
                    </CloseIcon>
                </SideNaveCloseButton>

                {routes.map((menuList, key) => {
                    return (
                        <div key={key}>
                            <MenuHeader>
                                <FaFolder />
                                <span id={`folderName_${key}`} onClick={(e) => this.onMenuHeaderClick(e)}>{menuList.parentHeader}</span>
                            </MenuHeader>

                            <MenuList id={`folderList_${key}`} toggle={toggleHeaderFolder}>
                                {menuList.childRoutes.map((route, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                exact={route.exact}
                                                to={route.path}
                                                activeClassName="selected"
                                                activeStyle={{
                                                    'background-color': '#d7d8d6'
                                                }}
                                            >
                                                {route.name}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </MenuList>
                        </div>
                    );
                })}
            </SideNavWrapper>
        );
    }
}

export default SideNav;