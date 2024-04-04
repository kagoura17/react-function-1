import { useState } from "react";
import "./Conteur.css"

const Conteur = ({valu}) => {
   const [clic, setClic]= useState(valu)
    return (
        <>
        <div className="conteur">
           <button onClick={()=>setClic(clic+1)}>+</button> 
           <h2>{clic}</h2>
           <button onClick={()=>setClic(clic-1)}>-</button> </div>
        </>
    );
};

export default Conteur;