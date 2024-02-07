import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import DocumentOverview from "./documents/DocumentOverview";
import NewDocumentForm from "./documents/NewDocumentForm";

export default function PersonDetail(props)
{

    let {id} = useParams();//vado a prendere dall'url la path variable id
    const [person,setPerson] = useState({});
    const [updating,setUpdating] = useState(false);
    const [updatableMap, setUpdatableMap] = useState({});

    useEffect(
        ()=>
        {
            axios.get("/people/"+id).then(
                (response)=>
                {
                    setPerson(response.data);
                    let mappa = {};
                    for(let doc of response.data.documents)
                        mappa[doc.id] = false;

                    setUpdatableMap(mappa);
                }
            )  
        },
        []
    );

    function addDocument(doc)
    {
        doc.person_id = id;
        axios.post("/documents",doc).then(
            (response)=>
            {
                let clone = {...person};
                clone.documents.push(response.data);
                setPerson(clone);
            }
        );
    }

    function deleteDocument(doc)
    {
        axios.delete("/documents/"+doc.id).then(

            ()=>
            {
                let clone = {...person};
                let pos = clone.documents.findIndex(d => d.id==doc.id);
                clone.documents.splice(pos,1);
                setPerson(clone);
            }
        )
    }

    function updateDocument(doc)
    {
        doc.person_id = person.id;
        axios.put("/documents/"+doc.id,doc).then(

            (response)=>
            {
                let clone = {...person};
                let pos = clone.documents.findIndex(d => d.id==doc.id);
                clone.documents[pos] = response.data;
                setPerson(clone);
                setUpdatable(response.data,false);
            }
        )
    }

    function setUpdatable(doc,value)
    {
        let clone = {...updatableMap};
        clone[doc.id]=value;
        setUpdatableMap(clone);
    }

    function savePerson()
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
                <button class="btn btn-success float-end"    onClick={savePerson} >Save</button>
            </div>
        </div>
    );




    return(
        <>
            <div className="row">
                <div className="col-4 p-4">
                    {!updating &&readOnlyCard}
                    {updating &&updatableCard}
                    <br/><br/>
                    <NewDocumentForm insert={addDocument} />
                </div>
                <div className="col-8 bg-light pt-4">
                   <div className="row">
                        {person.documents!=null &&person.documents.map(d=> <DocumentOverview update={updateDocument} setUpdatable={setUpdatable} isUpdating={updatableMap[d.id]} key={d.id} doc={d} delete={deleteDocument}/>)}
                   </div>
                </div>




            </div>
        </>
    );
}