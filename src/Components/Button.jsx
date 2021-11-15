import React from "react";
import styles from "./Button.module.css";
function getStyle(type){
    switch(type){
        case "success":
            return {color:"red"};
    }
}
function Button(props){
    const {title,type}=props;
    console.log(styles);
    const style=getStyle(type);
    return(
        <button className={styles.button} style={style}>{title}</button>
    )
}
export default Button;