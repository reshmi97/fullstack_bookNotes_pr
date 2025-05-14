import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Allnotes.module.css";
import Header from "./Header";

function Allnotes() {
    const [data, setdata] = useState([]);
    const getNotes=async ()=>{
        try{
            const response= await fetch("http://localhost:5000/allnotes");
            const jsonData= await response.json();
            setdata(jsonData);
            console.log("all notes data console");
            console.log(jsonData);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getNotes();
    }, []);
    
    return (
        <div>
            <Header />
            <div className={style.topDiv}>
                <h1 className={style.heading}>All Book Notes</h1>
                <button type="button" className="btn btn-success addtop">
                    <NavLink to="/addnew" className={style.addtop} style={{textDecoration:"none"}} >ADD NEW NOTES</NavLink>
                </button>
            
            {data.map((info)=>(
                <div className={style.bookInfo} id={info.id}>
                    <img className={style.allnotesimg} src={`https://covers.openlibrary.org/b/isbn/${info.isbn}-M.jpg`} />
                    <h2>
                        <NavLink to={`/read/${info.id}`}   className={style.bookName}>{info.bookname}</NavLink>
                    </h2>
                    <p>Date of Reading :{info.dateofread}</p>
                    <p>Rating {info.rating}</p>
                    <p className={style.sortSummary}>{info.summary}</p>
                </div>
            ))}
            </div>
        </div>

    )
};

export default Allnotes;