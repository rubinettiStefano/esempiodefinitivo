import { useState } from "react";

export default function PrenotationOverview(props)
{



    if(!props.isUpdating)
        return(
            <>
            <div className="col-4 d-flex justify-content-center text-center mb-4">
                <div class="card" style={{"width":"18rem"}}>
                    <div class="card-body">
                        <h6 class="card-title"> House in: {props.p.address}, {props.p.city}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Check-in: {props.p.checkin}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Duration: {props.p.duration}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Price: {props.p.price} &euro;</h6>
                    </div>
                </div>
            </div>
            
            </>
        );
}
