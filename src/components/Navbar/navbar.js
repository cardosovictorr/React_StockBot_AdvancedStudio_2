import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button'
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    // function to handle the click of the nav bar
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    StockBot
                    {/* INSERT HERE THE LOGO OF THE PROJECT, below there is the example was the logo of React */}
                    {/* <i className="fab fa-react"></i> */}
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            // the cName is 'described' in the MenuItens.js
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar