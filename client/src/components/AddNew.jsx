import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import style from "./AddNew.module.css";

function AddNew() {
    const [bookname,setname]=useState("");
    const [isbn,setisbn]=useState("");
    const [dateofread,setdateofread]=useState("");
    const [rating,setrating]=useState("");
    const [bookauthor,setauthor]=useState("");
    const [summary, setsummary]=useState("");
    const [notes, setnotes]=useState("");

    const navigate=useNavigate();

    function handlename(e){
        setname(e.target.value);
    }

    function handleisbn(e){
        setisbn(e.target.value);
    }

    function handledateofread(e){
        setdateofread(e.target.value);
    }

    function handlerating(e){
        setrating(e.target.value);
    }

    function handleauthor(e){
        setauthor(e.target.value);
    }
    function handlesummary(e){
        setsummary(e.target.value);
    }

    function handlenotes(e){
        setnotes(e.target.value);
    }

    async function onSubmitForm(e){
        e.preventDefault();
        try {
            const body={bookname,isbn,dateofread,rating,bookauthor,summary,notes};
            const response =await fetch("http://localhost:5000/add",{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            if(response.ok){
                navigate("/allnotes");
            }
        } catch (err ) {
            console.log(err);
        }
    }

    return (
        <div>
            <Header />
            <h1 className={style.heading}>Add New Book</h1>
            <form onSubmit={onSubmitForm}>
                <input className={style['feedback-input']} autofocus name="bookname" autocomplete="off"  placeholder="Book Name" onChange={handlename}/>
                <input className={style['feedback-input']}  name="isbn" autocomplete="off" placeholder="ISBN" required onChange={handleisbn}/>
                <input className={style['feedback-input']} name="dateofread" autocomplete="off" placeholder="Date Read" required onChange={handledateofread}/>
                <input className={style['feedback-input']}  name="rating" autocomplete="off" placeholder="Rating" required onChange={handlerating}/>
                <input className={style['feedback-input']}  name="bookauthor" autocomplete="off" placeholder="Book Author" onChange={handleauthor}/>
                <textarea className={style['feedback-input']}  name="summary" autocomplete="off" placeholder="Summary" required onChange={handlesummary}></textarea>
                <textarea className={style['feedback-input']}  name="notes" autocomplete="off" placeholder="Notes" required onChange={handlenotes}></textarea>

                <button type="submit" >ADD</button>
            </form>
        </div>
    )
}

export default AddNew;