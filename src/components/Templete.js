import React from "react";
import styles from "./Templete.module.css";
import Header from "./common/Header";

const Templete = ({children}) => {
    return (
        <div className={styles['Templete']}>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default Templete;