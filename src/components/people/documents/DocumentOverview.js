export default function DocumentOverview(props)
{
    return(
        <>
        <div className="col-4 d-flex justify-content-center text-center">
            <div class="card" style={{"width":"18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{props.doc.type} #{props.doc.number}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Issued on: {props.doc.release_date}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Expire on: {props.doc.expiring_date}</h6>
                    <button onClick={()=>props.delete(props.doc)}>DELETE</button>
                </div>
            </div>
        </div>
        
        </>
    );
}