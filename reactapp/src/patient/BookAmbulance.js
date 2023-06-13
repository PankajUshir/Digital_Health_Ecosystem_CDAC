import { useReducer } from "react";
import { useNavigate, useParams } from "react-router";
import Bar from "./Webbar";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { addMonths } from "date-fns";



const init = {
    pid: "",
    aid: "",
    source: "",
    destination: "",
    date: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update': return { ...state, [action.field]: action.val };
        case 'clear': return init;

    }
}


let BookAmbulance = () => {
    const [book, setBook] = useReducer(reducer, init);
    let pid = JSON.parse(localStorage.getItem("loginInfo")).pid;
    const navigate = useNavigate();

    book.pid = pid;

    const aid = useParams();
    console.log(aid);
    console.log(aid.aid);

    let handleSubmit = (u) => {
        u.preventDefault();
        book.aid = aid.aid;
        try {
            console.log(JSON.stringify(book));
            fetch("http://localhost:8080/bookedambulance", {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book),
            }).then(res => {
                if (res.status == 200)
                    navigate("/thankyou");
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Bar />
            <div className="formInput container mt-5">
                <h3>Book Ambulance</h3>
                <div className="text-left">
                    <form >
                        <div className="form-group">
                            <label>Source  </label>
                            <input type="text" className="form-control"
                                name="source" value={book.source}
                                onChange={(u) => { setBook({ type: 'update', field: 'source', val: u.target.value }) }} />
                        </div>

                        <div className="form-group">
                            <label>destination  </label>
                            <input type="text" className="form-control"
                                name="destination" value={book.destination}
                                onChange={(u) => { setBook({ type: 'update', field: 'destination', val: u.target.value }) }} />
                        </div>

                        <div className="form-group">
                            <label>Date  </label>
                            {/* <input type="date" className="form-control datepicker"
                                name="date" value={book.date}
                                onChange={(u) => { setBook({ type: 'update', field: 'date', val: u.target.value }) }} /> */}
                            <DatePicker className="form-control datepicker" name="date" selected={book.date}
                                onChange={(u) => { setBook({ type: 'update', field: 'date', val: u }) }}
                                minDate={new Date()}
                                maxDate={addMonths(new Date(), 5)}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-blob">Book Ambulance</button>
                        </div>
                    </form>
                    {/* {JSON.stringify(book)} */}
                </div>
            </div>


        </>
    );
}
export default BookAmbulance;