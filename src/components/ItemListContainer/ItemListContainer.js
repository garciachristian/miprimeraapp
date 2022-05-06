import React from "react";

export default function ItemListContainer() {

    const Button = ({ texto }) => {
        return (
            <input type="button" class="button" value={texto} />
        )
    }

    return (
        <ul>
            <li><Button texto="Inicio" /></li>
            <li><Button texto="Productos" /></li>
            <li><Button texto="Información" /></li>
            <li><Button texto="Ayuda" /></li>
        </ul>
    )
}