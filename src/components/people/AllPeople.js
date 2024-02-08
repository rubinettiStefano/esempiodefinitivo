import axios from "axios";
import { useEffect, useRef, useState } from "react";
import PersonOverview from "./PersonOverview";

export default function AllPeople(props)
{
    const [people,setPeople] = useState([]);
    
    const [flicker,setFlicker] = useState(false);


    const [mAge,setMin] = useState(18);
    const [MAge,setMax] = useState(30);
    const nomIn = useRef(null);
    const minIn = useRef(null);
    const maxIn = useRef(null);
    


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


    function isShowable(p,nom,minAge,maxAge)
    {
        if(
            nom && 
            (
                !p.name.toLowerCase().includes(nom.toLowerCase()) &&
                !p.surname.toLowerCase().includes(nom.toLowerCase())
            )
        )
        return false;

        if(p.age<minAge || p.age>maxAge)
            return false;

        return true;
    }

    return(
        <>
            <div className="row gy-5">
                <div className="col-3 p-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Nominativo</span>
                        <input type="text" ref={nomIn} class="form-control" onChange={()=>setFlicker(!flicker)} />
                    </div>
                    <label for="customRange1" class="form-label">Età Min: {mAge}</label>
                    <input type="range" ref={minIn} min={18} max={30} defaultValue={18} class="form-range" id="customRange1" onChange={(e) => setMin(e.target.value)}/>
                    <label for="customRange1" class="form-label">Età Max {MAge}</label>
                    <input type="range" ref={maxIn} min={18} max={30} class="form-range" id="customRange1" onChange={(e) => setMax(e.target.value)}/>
                    <br/><br/>
                    
                </div>
                <div className="col-9">
                    <div className="row gy-5">
                        {
                            people
                            .filter(p=> isShowable(p,nomIn.current.value,minIn.current.value,maxIn.current.value))
                            .map(p=><PersonOverview key={p.id} {...p} deleteMe={deletePerson}/>)
                        }
                     </div>
                </div>
                {/* {people.map(p=><PersonOverview name={p.name} surname={p.surname} age={p.age}/>)} */}
            </div>
        
        </>
    );
}