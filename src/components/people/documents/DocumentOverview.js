import { useState } from "react";

export default function DocumentOverview(props)
{
    const [tempDoc,setTempDoc] = useState(props.doc);

    function synchronize(e)
    {
        setTempDoc({...tempDoc,[e.target.name]:e.target.value});
    }


    if(!props.isUpdating)
        return(
            <>
            <div className="col-4 d-flex justify-content-center text-center mb-4">
                <div class="card" style={{"width":"18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">  {props.doc.type} #{props.doc.number}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Issued on: {props.doc.release_date}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Expire on: {props.doc.expiring_date}</h6>
                        <div>
                            <button  className="btn btn-danger me-4" onClick={()=>props.delete(props.doc)}>DELETE</button>
                            <button  className="btn btn-warning " onClick={()=>props.setUpdatable(props.doc,true)}>MODIFY</button>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        );
    else
        return(
            <>
            <div className="col-4 d-flex justify-content-center text-center mb-4">
                <div class="card" style={{"width":"18rem"}}>
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
                            <button className="btn btn-danger me-4" onClick={()=>props.setUpdatable(props.doc,false)}>CANCEL</button>
                            <button className="btn btn-success " onClick={()=>props.update(tempDoc)}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
                
            </>
        );
}
