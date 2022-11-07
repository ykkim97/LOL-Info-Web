import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return <>
        <nav className={styles['Header-container']}>
            <Link to="/">전적검색</Link>
            <Link to="/championInfo">챔피언정보</Link>
        </nav>
    </>
}

export default Header;