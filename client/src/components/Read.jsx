import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import style from "./Read.module.css";

function Read() {
    const { id } = useParams();
    const [book, setbook] = useState([]);
    const nevigate=useNavigate();

    const getbook = async () => {
        try {
            const response = await fetch(`http://localhost:5000/read/${id}`);
            const data = await response.json();
            console.log("one book read data cosnole");
            console.log(data);
            setbook(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getbook();
    },[id]);//re-run if id changes

    async function deletenote(){
        const response=await fetch(`http://localhost:5000/delete/${id}`);
        if(response.ok){
            nevigate("/allnotes");
        }else{
            console.log("err in deletion");
        }
    }

    return (
        <div>
            <Header />
            <div className={style.bookInfo}>
                <div className={style.bookdetail}>
                    <img className={style.readimg} src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} />
                    <h2 className={style.bookName}>
                        {book.bookname}
                    </h2>
                    <p className={style.isbn}>ISBN: {book.isbn}
                    </p>
                    <p className={style.dateOfRead}>Date Read:{book.dateofread}
                    </p>
                    <p className={style.bookauthor}>Author: {book.bookauthor}
                    </p>
                    <p className={style.rating}>Rating: {book.rating}
                    </p>
                </div>
                <div className={style.text}>
                    <p className={style.summary}>
                        {book.summary}
                    </p>
                    <h3>Notes:</h3>
                    <p className={style.notes}>
                        {book.notes}
                    </p>
                </div>
            </div>
            <div className={style.actions}>
                <button className="btn btn-primary"><NavLink to={`/edit/${book.id}`} className={style.navlink}>Edit</NavLink></button>
                <button className={`btn btn-danger fs-5 fw-bold `}  onClick={deletenote}>Delete</button>
                <button className="btn btn-success"><NavLink to="/allnotes" className={style.navlink}>Go Back</NavLink></button>
            </div>
        </div>

    )
};

export default Read;