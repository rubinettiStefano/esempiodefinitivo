import { useState } from "react";

export default function NewDocumentForm(props)
{
    const [tempDoc,setTempDoc] = useState(
        {
            type:"",
            number:"",
            release_date:"",
            expiring_date:""
        }
    );

    function synchronize(e)
    {
        setTempDoc({...tempDoc,[e.target.name]:e.target.value});
    }

    function clear()
    {
        setTempDoc({
            type:"",
            number:"",
            release_date:"",
            expiring_date:""
        });
    }

    function insert()
    {
        props.insert(tempDoc);
        clear();
    }


    return(
        <>
        <div className="d-flex justify-content-center text-center">
            <div class="card">
                <div class="card-body">
                    <div class="input-group mb-3 card-title">
                        <span class="input-group-text" >Type</span>
                        <input type="text" class="form-control"name="type" value={tempDoc.type} onChange={synchronize} />
                    </div>
                    <div class="input-group mb-3 card-title">
                        <span class="input-group-text" >Number</span>
                        <input type="text" class="form-control" name="number" value={tempDoc.number} onChange={synchronize} />
                    </div>
                    <div class="input-group mb-3 card-title">
                        <span class="input-group-text" >Issued On</span>
                        <input type="date" class="form-control" name="release_date" value={tempDoc.release_date} onChange={synchronize} />
                    </div>
                    <div class="input-group mb-3 card-title">
                        <span class="input-group-text" >Expire on</span>
                        <input type="date" class="form-control" name="expiring_date" value={tempDoc.expiring_date} onChange={synchronize} />
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
