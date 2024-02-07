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

    function deletePerson(id)
    {
        axios.delete("/people/"+id).then(

            ()=>
            {
                let clone = [...people];
                let pos = clone.findIndex(p => p.id==id);
                clone.splice(pos,1);
                setPeople(clone);
            }
        ).catch(

            ()=>
            {
                alert("No, ha dei figli, chi penserà ai bambini");
            }

        )
    }

    return(
        <>
            <div className="row">
                {people.map(p=><PersonOverview {...p} deleteMe={deletePerson}/>)}
                {/* {people.map(p=><PersonOverview name={p.name} surname={p.surname} age={p.age}/>)} */}
            </div>
        
        </>
    );
}