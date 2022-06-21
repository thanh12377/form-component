import { Fragment } from "react";
import './style.scss';
import logo from '../../../images/logo.png'


const Header = () =>{
    return ( <Fragment>
        <header className="header">
            <div className="container">
                <img src={logo} alt="" className="header-logo"/>
            </div>
        </header>
        </Fragment>
    )
};

export default Header;