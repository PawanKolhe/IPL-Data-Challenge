import React from 'react';
import './navigation.styles.css';
import logo from '../../img/logo.png';
import logosmall from '../../img/logo-small.png';

function Nav() {
    return (
        <nav className='nav-menu'>
            <div className='logo-container'>
                <a href='https://socialcops.com' onClick={(e) => {e.preventDefault();}}><img className='logo' src={logo} alt='Logo' /></a>
                <a href='https://socialcops.com' onClick={(e) => {e.preventDefault();}}><img className='logo hide' src={logosmall} alt='Logo' /></a>
            </div>
            {/*<div className='search-container'>
                <input className='search-field sf-nav-bar' placeholder='Search' />
            </div>*/}
            <div className='nav-link-container'>
                <a href='https://pawankolhe.com' onClick={(e) => {e.preventDefault();}}><i className="fas fa-home-alt"></i> <span className='nav-link-name'>Dashboard</span></a>
                <a href='https://pawankolhe.com' onClick={(e) => {e.preventDefault();}}><i className="fas fa-user-alt"></i> <span className='nav-link-name'>Profile</span></a>
                <a href='https://pawankolhe.com' onClick={(e) => {e.preventDefault();}}><i className="fas fa-calendar-week"></i> <span className='nav-link-name'>Calendar</span></a>
                <a href='https://pawankolhe.com' onClick={(e) => {e.preventDefault();}}><i className="fas fa-question"></i> <span className='nav-link-name'>FAQs</span></a>
                <a href='https://pawankolhe.com' onClick={(e) => {e.preventDefault();}}><i className="fas fa-cog"></i> <span className='nav-link-name'>Settings</span></a>
            </div>
        </nav>
    )
}

export default Nav;