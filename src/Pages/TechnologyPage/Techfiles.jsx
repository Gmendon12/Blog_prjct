import React from "react";

export const TechFiles = ({headerT, descriptionT, imgurlT}) =>{
    return(
<>
     <div className="bollywoodcontent">
           <div className="bollywoodimage" style={{backgroundImage: `url(${imgurlT})`}}></div>

            <div>
            <h3 className="bhead" >{headerT}</h3>
            <p className="bpara" >{descriptionT}</p></div>
            
        </div>
  </>
    )
}