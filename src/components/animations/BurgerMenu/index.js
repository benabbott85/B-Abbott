import React, {useState} from "react"
import "./style.css"

const BurgerMenu = ()=> {
    const [status, setStatus]= useState('open')
return (
    <nav>
    <div className="BurgerMenu_container">
       <i className={status}></i>
       <i className={status}></i>
       <i className={status}></i>
    </div>
    </nav>
)
}

export default BurgerMenu