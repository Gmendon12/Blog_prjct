import React from "react";

export const TechnologyToppost = ({headerTtp, descriptionTtp, imgurlTtp, numberT}) =>{
    return(
<>
     <div className="bwtpheadcontent">
           <div className="bwtpheadcontentimg" style={{backgroundImage: `url(${imgurlTtp})`}}></div>

     <div className="bw123">
            <div>
            <h3 className="bwtpheadcontenthead">{headerTtp}</h3>
            <p className="bwtpheadcontentpara">{descriptionTtp}</p></div>

            <span className="one">{numberT}</span>
            </div>  
    </div>
  </>
    )
}