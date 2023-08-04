import React from 'react'
import mealsImg from "../../assets/meals.jpg";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
export default function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMEALS</h1>
        <HeaderCartButton onClick={props.onShowCart} /> 
      </header>
      <div className={classes['main-image']}></div>
      <img src={mealsImg} alt="meals" />
    </div>
  )
}  
