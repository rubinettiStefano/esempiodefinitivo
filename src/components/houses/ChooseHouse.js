import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ChooseHouse(props)
{
    let {id} = useParams();
    const [houses,setHouses] = useState([]);
    
    


    useEffect(
        ()=>
        {
            axios.get("/houses").then(
                (response)=>
                {
                    setHouses(response.data);
                }

            );
        },
        []
    );


    return(
        <>
            <div className="row gy-5">
                        {
                            houses
                            .map(h=>(
                                <div className="col-4 d-flex justify-content-center text-center">
                                    <div class="card" style={{"width":"18rem"}}>
                                        <div class="card-body">
                                            <h5 class="card-title">{h.address} {h.city}</h5>
                                                                                    {/* /prenotationform/14/2 */}
                                            <Link class="btn btn-primary me-4" to={"/prenotationform/"+id+"/"+h.id}>PRENOTA</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
            </div>
        
        </>
    );
}