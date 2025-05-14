import React from "react";
import book from "../assets/images/book2.png";
import styles from  './Welcomepage.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";

function WelcomePage() {
    const nevigate=useNavigate();
    return (
        <div>
            <Header />
            <div className="px-4 py-5 my-5 text-center">
                <div className={styles.bookimage}>
                    <img className="d-block mx-auto mb-4" style={{height:"100px"}} src={book} />
                </div>
                <h1 className="display-5 fw-bold text-body-emphasis">WELCOME ON BOOK NOTES</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Our websites helps people to make their reading notes, save it and read it whenever they
                        want. They can make changes in their notes efficiently as well.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-success btn-lg px-4 gap-3"><NavLink to="/addnew" className="text-decoration-none text-light fw-bold">ADD
                            NEW</NavLink></button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4"><NavLink to="/allnotes" className="text-decoration-none text-dark fw-bold">READ
                            ALL</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WelcomePage;