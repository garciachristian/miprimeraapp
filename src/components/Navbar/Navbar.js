import React from 'react';

export default function Navbar() {
    return (
        <header className="header">
            <div className="logo" id='top'>
            <img src={require('./logo.png')} alt='logo'></img>
            </div>
            <ul>
                <li><button class="button">Inicio</button></li>
                <li><button class="button">Productos</button></li>
                <li><button class="button">Información</button></li>
                <li><button class="button">Ayuda</button></li>
            </ul>

        </header>
    );
}