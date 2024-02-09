import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import PrenotationOverview from "./prenotations/PrenotationOverview";

export default function PersonDetailPrenotations(props)
{

    let {id} = useParams();//vado a prendere dall'url la path variable id
    const [person,setPerson] = useState({});

    useEffect(
        ()=>
        {
            axios.get("/people/"+id+"/prenotations").then(
                (response)=>
                {
                    setPerson(response.data);
                }
            )  
        },
        []
    );



    let readOnlyCard = (
        <div class="card sticky-top" style={{top:"100px"}}>
            <div class="card-body">
                <h5 class="card-title">{person.name} {person.surname}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Age: {person.age}</h6>
            </div>
        </div>
    );




    return(
        <>
            <div className="row">
                <div className="col-4 p-4">
                    {readOnlyCard}
                    <Link className="btn btn-primary" to={"/choosehouse/"+id}>AGGIUNGI PRENOTAZIONE</Link>
                </div>
                <div className="col-8 bg-light pt-4">
                   <div className="row">
                        {person.prenotations!=null &&person.prenotations.map(p=> <PrenotationOverview p={p} key={p.id}/>)}
                   </div>
                </div>




            </div>
        </>
    );
}