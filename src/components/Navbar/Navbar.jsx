import React, {Component} from "react";
import { MenuItems } from "./MenuItems"
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render (){
        return (
            <nav className="NavbarItems">
             
                <div className="menu-icon-container" onClick={this.handleClick}>
                    {this.state.clicked ? <CloseMenu></CloseMenu> : <MenuIcon></MenuIcon>}

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url} > 
                                    {item.title} 
                                </a>
                            </li>    
                        )
                    })}
                    
                </ul>

            </nav>
        )
    }
}

export default Navbar