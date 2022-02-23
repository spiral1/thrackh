import React, {Component} from "react";
import { MenuItems } from "./MenuItems"
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { StickyNav } from 'react-js-stickynav';
import './Navbar.css'








class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }





    render (){
        return (
            <StickyNav length='40'>
            <nav className="NavbarItems">
             
                <div className="menu-icon-container" onClick={this.handleClick}>
                    {this.state.clicked ? <CloseMenu></CloseMenu> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link       
                                    activeClass="active"
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={3000}
                                    >
                                    <a className={item.cName} href={item.url} > 
                                        {item.title} 
                                    </a>
                                </Link>
                            </li>    
                        )
                    })}
                    
                </ul>
                
            </nav>
            </StickyNav>
            
        )
    }


}

export default Navbar