import React from 'react'

export default function CartIcon ({numprod}){
    return(
        <div>
            <img src={require('./cart.png')} alt='logo'></img>
            <div>Cantidad: {numprod}</div>
        </div>
    )
}