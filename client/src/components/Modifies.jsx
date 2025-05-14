import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import style from "./AddNew.module.css";

function Modifies() {

    const { id } = useParams();

    const [book, setbook] = useState({});

    const [bookname, setname] = useState("");
    const [isbn, setisbn] = useState("");
    const [dateofread, setdateofread] = useState("");
    const [rating, setrating] = useState("");
    const [bookauthor, setauthor] = useState("");
    const [summary, setsummary] = useState("");
    const [notes, setnotes] = useState("");

    const nevigate = useNavigate();

    const getbook = async () => {
        try {
            const response = await fetch(`http://localhost:5000/read/${id}`);
            const data = await response.json();
            console.log("checking in getbook of book data is null???");
            console.log(data);
            setbook(data);
            console.log(book);
        } catch (err) {
            console.log(" modifies component me err checking");
            console.log(err);
        }
    }

    useEffect(() => {
        getbook();
    }, [id]);

    useEffect(() => {
  if (book && book.bookname) {
    setname(book.bookname);
    setisbn(book.isbn);
    setdateofread(book.dateofread);
    setrating(book.rating);
    setauthor(book.bookauthor);
    setsummary(book.summary);
    setnotes(book.notes);
  }
}, [book]);

    async function update(e) {
            e.preventDefault();
        try {
            const body = {id, bookname, isbn, dateofread, rating, bookauthor, summary, notes };
            const response = await fetch(`http://localhost:5000/update`, {
                method: "PATCH",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            const data = await response.json();
            setbook(data);
            if(response.ok)
            nevigate(`/read/${id}`);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Header />
            <h1 className={style.heading}>Edit Notes</h1>
            <form onSubmit={update}>
                <input className={style['feedback-input']} name="bookname" value={bookname} onChange={(e) => { setname(e.target.value) }} />
                <input className={style['feedback-input']} name="isbn" value={isbn} onChange={(e) => { setisbn(e.target.value) }} />
                <input className={style['feedback-input']} name="dateofread" value={dateofread} onChange={(e) => { setdateofread(e.target.value) }} />
                <input className={style['feedback-input']} name="rating" value={rating} onChange={(e) => { setrating(e.target.value) }} />
                <input className={style['feedback-input']} name="bookauthor" value={bookauthor} onChange={(e) => { setauthor(e.target.value) }} />
                <textarea className={style['feedback-input']} name="summary" onChange={(e) => { setsummary(e.target.value) }} value={summary}></textarea>
                <textarea className={style['feedback-input']} name="notes" onChange={(e) => { setnotes(e.target.value) }} value={notes}></textarea>
                <button type="submit">UPDATE</button>
            </form>
        </div>
    )
};

export default Modifies;

