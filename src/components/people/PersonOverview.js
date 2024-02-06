
// export default function PersonOverview(props)
// {
//     return(
//         <>
//         <div className="col-4 d-flex justify-content-center text-center">
//             <div class="card" style={{"width":"18rem"}}>
//                 <div class="card-body">
//                     <h5 class="card-title">{props.name} {props.surname}</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">{props.age}</h6>
//                     {/* <a href="#" class="card-link">Card link</a>
//                     <a href="#" class="card-link">Another link</a> */}
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }
export default function PersonOverview({name,surname,age})
{

    return(
        <>
        <div className="col-4 d-flex justify-content-center text-center">
            <div class="card" style={{"width":"18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{name} {surname}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{age}</h6>
                    {/* <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a> */}
                </div>
            </div>
        </div>
        </>
    );
}