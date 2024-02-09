import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PrenotationForm(props)
{

    let {p_id,h_id} = useParams();
    let navigate = useNavigate();
    const [tempRes,setTempRes] = useState(
        {
            price:"",
            duration:"",
            checkin:"",
            person_id:p_id,
            house_id:h_id
        }
    );

    function synchronize(e)
    {
        setTempRes({...tempRes,[e.target.name]:e.target.value});
    }

    function clear()
    {
        setTempRes( {
            price:"",
            duration:"",
            checkin:"",
            person_id:p_id,
            house_id:h_id
        });
    }

    function insert()
    {
        axios.post("/reservations",tempRes).then(

            ()=>
            {
                navigate("/persondetailpren/"+tempRes.person_id);
            }
        )
    }


    return(
        <>
        <div className="d-flex justify-content-center text-center">
            <div class="card">
                <div class="card-body">
                    <div class="input-group mb-3 card-title">
                        <span class="input-group-text" >Price</span>
                        <input type="number" class="form-control"name="price" value={tempRes.price} onChange={synchronize} />
                    </div>
                    <div class="input-group mb-3 card-title">
                        <span class="input-group-text" >Duration</span>
                        <input type="number" class="form-control" name="duration" value={tempRes.duration} onChange={synchronize} />
                    </div>
                    <div class="input-group mb-3 card-title">
                        <span class="input-group-text" >checkin</span>
                        <input type="date" class="form-control" name="checkin" value={tempRes.checkin} onChange={synchronize} />
                    </div>
                    <div>
                        <button className="btn btn-danger me-4" onClick={clear}>CANCEL</button>
                        <button className="btn btn-success " onClick={insert}>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
}
