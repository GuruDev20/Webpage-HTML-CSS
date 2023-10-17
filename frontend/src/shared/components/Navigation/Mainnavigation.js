import React,{useState} from 'react';
import './MainNavigation.css';
import MainHeaderx from './MainHeader';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks';
import Sidedrawer from './Sidedrawer';
import Backdrop from '../UIElements/Backdrop';
const MainNavigation=props=>{
    const [drawerIsOpen,setDrawerIsOpen] =useState(false);
    const openDrawerHandler=()=>{
        setDrawerIsOpen(true);
    }
    const closeDrawerHandler=()=>{
        setDrawerIsOpen(false);
    }
    return( 
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
            <Sidedrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className='main-navigation__drawer-nav '>
                    <NavLinks/>
                </nav>
            </Sidedrawer>
            <MainHeaderx>
                <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your pLaces</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                <NavLinks/>
                </nav>
            </MainHeaderx>
        </React.Fragment>
    );
};
export default MainNavigation;