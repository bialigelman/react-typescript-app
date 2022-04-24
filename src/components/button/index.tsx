import React from 'react'
import style from './button.module.scss'

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void, 
    children: React.ReactNode
}

function Botao({type, onClick, children}: Props ) {
    return (
        <button type={type} onClick={onClick} className={style.botao}>
           {children}
        </button>
    )
}

export default Botao