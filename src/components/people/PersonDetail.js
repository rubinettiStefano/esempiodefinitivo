import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PersonDetail(props)
{

    let {id} = useParams();//vado a prendere dall'url la path variable id
    const [person,setPerson] = useState({});
    const [updating,setUpdating] = useState(false);

    useEffect(
        ()=>
        {
            axios.get("/people/"+id).then(
                (response)=>
                {
                    setPerson(response.data);
                }
            )  
        },
        []
    );

    function save()
    {
        axios.put("/people/"+id,person).then(()=>setUpdating(false));
    }

    function synchronize(e)
    {
        setPerson({...person,[e.target.name]:e.target.value});
    }

    let readOnlyCard = (
        <div class="card sticky-top" style={{top:"100px"}}>
            <div class="card-body">
                <h5 class="card-title">{person.name} {person.surname}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Age: {person.age}</h6>
            </div>
            <button class="btn btn-primary"  onClick={()=>setUpdating(true)} >Update</button>
        </div>
    );

    let updatableCard = (
        <div class="card sticky-top" style={{top:"100px"}}>
            <div class="card-body">
            <div class="input-group mb-3 card-title">
                <span class="input-group-text" >Name</span>
                <input type="text" class="form-control" value={person.name} name="name" onChange={synchronize} />
            </div>
            <div class="input-group mb-3 card-title">
                <span class="input-group-text" >Surname</span>
                <input type="text" class="form-control" value={person.surname} name="surname" onChange={synchronize} />
            </div>
            <div class="input-group mb-3 card-title">
                <span class="input-group-text" >Age</span>
                <input type="number" min={0} max={120} class="form-control" value={person.age} name="age" onChange={synchronize} />
            </div>
            </div>
            <div className="p-3">
                <button class="btn btn-secondary"  onClick={()=>setUpdating(false)} >Cancel</button>
                <button class="btn btn-success float-end"    onClick={save} >Save</button>
            </div>
        </div>
    );




    return(
        <>
            <div className="row">
                <div className="col-4">
                    {!updating &&readOnlyCard}
                    {updating &&updatableCard}
                </div>
                <div className="col-8 bg-light">
                    DATI DOCUMENTI
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>

                </div>




            </div>
        </>
    );
}