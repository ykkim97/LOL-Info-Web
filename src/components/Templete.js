import React from "react";
import styles from "./Templete.module.css";
import Header from "./common/Header";
import Footer from "./common/Footer";

// 페이지 템플릿 컴포넌트
const Templete = ({children}) => {
    return (
        <div className={styles['Templete']}>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Templete;