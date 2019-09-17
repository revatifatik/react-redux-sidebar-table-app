import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppWrapper, HiddenDiv, MenuButton, DescriptionBlock } from './App.styled';
import SideNav from './components/SideNav';
import { routes } from './config/SideNavRoutesConfig';
import { FaBars } from 'react-icons/fa';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { MenuHide: true };
    }

    MenuClick = (val) => {
        const MenuHide = val === undefined ? !this.state.MenuHide : val;
        const timeout = val === undefined ? 70 : 0;
        this.setState({ MenuHide }, () => {
            let nodeBurgerMenu;
            if (document.getElementById('sideMenu')) {
                nodeBurgerMenu = document.getElementById('sideMenu');
                nodeBurgerMenu.style.display = 'inline-block';

                if (document.getElementById('burgerRoot')) {
                    let burgerRoot = document.getElementById('burgerRoot');
                    if (!burgerRoot) {
                        burgerRoot = document.createElement('div');
                        burgerRoot.setAttribute('id', 'burgerRoot');
                        document.getElementsByTagName('body')[0].appendChild(burgerRoot);
                    }
                    burgerRoot.innerHTML = '';
                    burgerRoot.appendChild(nodeBurgerMenu);
                }

                if (!this.state.MenuHide) {
                    setTimeout(() => {
                        document.getElementById('sideMenu').style.display = 'none';
                    }, timeout);
                }
            }
        });
    };
    render() {
        return (
            <Router>
                <AppWrapper>
                    <MenuButton type="button" onClick={() => this.MenuClick()}>
                        <FaBars />
                    </MenuButton>
                    <div>
                        <HiddenDiv style={{ display: 'inline-block' }} id="sideMenu" MenuHide={this.state.MenuHide}>
                            <SideNav onClose={() => this.MenuClick()} isMenuOpen={this.state.MenuHide} />
                        </HiddenDiv>

                        <DescriptionBlock MenuHide={this.state.MenuHide}>
                            {routes.map((menuList) => {
                                return menuList.childRoutes.map((route) => {
                                    return (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}
                                        />
                                    );
                                });
                            })}
                        </DescriptionBlock>
                    </div>
                </AppWrapper>
            </Router>
        );
    }
}

export default App;
