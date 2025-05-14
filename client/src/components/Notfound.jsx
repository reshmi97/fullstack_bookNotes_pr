import React from "react";
import Header from "./Header";
import style from "./Notfound.module.css";

function Notfound(){
    return(
        <div>
            <Header />
            <h3 className={style.notfound}>Page Not found.</h3>
        </div>
    )
};

export default Notfound;