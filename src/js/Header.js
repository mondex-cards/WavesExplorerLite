import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/mondex/favicon-32x32.png';

const Header = (props) => {
    return (
        <div className="header grid">
            <div className="header-title grid-item-fixed grid">
                <div className="menu-toggle grid-item-fixed lg-show" onClick={() => props.onMenuToggle()}>
                    <span className="middle-bar"></span>
                </div>
                <div className="logo"><a href="/"></a></div>
            </div>
            {props.children}
        </div>
    );
};

Header.propTypes = {
    onMenuToggle: PropTypes.func.isRequired
};

export default Header;
