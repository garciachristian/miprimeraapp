import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

export default function Navbar() {

    return (
        <header className="header">
            <div className="logo" id='top'>
                <img src={require('./logo.png')} alt='logo'></img>
            </div>
            <ItemListContainer/>
            <CartWidget numprod={20} />
        </header>
    );
}