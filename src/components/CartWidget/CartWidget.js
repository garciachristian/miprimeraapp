import React from 'react'

export default function CartWidget ({numprod}){
    return(
        <div>
            <img src={require('./cart.png')} alt='logo'></img>
            Cantidad: {numprod} productos
        </div>
    )
}