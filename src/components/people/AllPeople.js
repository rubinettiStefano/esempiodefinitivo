import axios from "axios";
import { useEffect, useState } from "react";
import PersonOverview from "./PersonOverview";

export default function AllPeople(props)
{
    const [people,setPeople] = useState([]);

    useEffect(
        ()=>
        {
            axios.get("/people").then(
                (response)=>
                {
                    setPeople(response.data);
                }

            );
        },
        []
    );

    return(
        <>
            <div className="row">
                {people.map(p=><PersonOverview {...p}/>)}
                {/* {people.map(p=><PersonOverview name={p.name} surname={p.surname} age={p.age}/>)} */}
            </div>
        
        </>
    );
}