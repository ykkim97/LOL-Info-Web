import React from "react";
import styles from "./Templete.module.css";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Templete = ({children}) => {
    return (
        <div className={styles['Templete']}>
            <Header />
            <div>{children}</div>
            {/* <Footer /> */}
        </div>
    )
}

export default Templete;