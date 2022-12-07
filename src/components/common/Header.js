import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

// Header 컴포넌트 (상단 메뉴)
const Header = () => {
    return <>
        <nav className={styles['Header-container']}>
            <Link to="/" className={styles["Header-tab"]}>전적검색</Link>
            <Link to="/championInfo" className={styles["Header-tab"]}>챔피언</Link>
            <Link to="/item" className={styles["Header-tab"]}>아이템</Link>
        </nav>
    </>
}

export default Header;