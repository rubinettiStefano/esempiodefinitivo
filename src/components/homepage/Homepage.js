import { useAtom } from "jotai";
import { valoreGlobale } from "../../App";


export default function Homepage ()
{

    const [v,setV] = useAtom(valoreGlobale);


    return(
        <>
            <h1 className="text-center m-5">SONO HOMEPAGE </h1>
            <h1 className="text-center m-5">{v} </h1>
        </>
    );
}