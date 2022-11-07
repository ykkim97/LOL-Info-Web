import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return <>
        <nav className={styles['Header-container']}>
            <div>챔피언정보</div>
            <div>전적검색</div>
        </nav>
    </>
}

export default Header;