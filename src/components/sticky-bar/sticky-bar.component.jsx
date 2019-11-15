import React from 'react';
import './sticky-bar.styles.css';
import user from '../../img/user.jpg';

class StickyBar extends React.Component {
    render(){
        return (
            <div className='sticky-bar'>
                <div className='left-bar'>
                    <button aria-label='Navigation Toggle' className='nav-toggle-button'><i className="fas fa-align-left fa-2x"></i></button>
                    <div className='sf-sticky-bar-container'>
                        <input aria-label='Search' className='search-field sf-sticky-bar' placeholder='Search' />
                    </div>
                </div>
                {/*<div className='center-bar'></div>*/}
                <div className='right-bar'>
                    <div id='fullscreenButtonContainer'></div>
                    <div className='login-section-container'>
                        <div className='profile-pic-container'>
                            <img src={user} alt='Profile Pic' />
                        </div>
                        <div className='username'>Pawan Kolhe <i className="fas fa-caret-down"></i></div>
                        <div className='user-menu'>
                            <a href='https://pawankolhe.com' onClick={(e) => {e.preventDefault();}}><i className="fal fa-user"></i> Profile</a>
                            <a href='https://pawankolhe.com' onClick={(e) => {e.preventDefault();}}><i className="fal fa-cog"></i> Settings</a>
                            <div className='user-menu-divider'></div>
                            <a href='https://pawankolhe.com' onClick={(e) => {e.preventDefault();}}><i className="fal fa-compass"></i> Need help?</a>
                            <a href='https://pawankolhe.com' onClick={(e) => {e.preventDefault();}}><i className="fal fa-sign-out"></i> Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default StickyBar;