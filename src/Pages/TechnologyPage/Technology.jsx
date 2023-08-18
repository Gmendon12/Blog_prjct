import { Link } from "react-router-dom";
import { TechFiles } from "./Techfiles";
import { TechData } from "./techdata";
import { TechnologyToppost } from "./TechnTp";
import { TechnologTp } from "./techdata";

const Tech = () =>{
    return(
        <div className="container">

       <div>
        <span className='the'>The </span>
        <span className='siren'>Siren</span>
       </div>
       <br/>
        <div className="header">
            <div>
            <Link to='/' style={{ textDecoration: 'none', color:'black'}}>Home Page</Link>
            </div>
            <div>
            <Link to='/Bollywood' style={{ textDecoration: 'none', color:'black'}}>Bollywood</Link>
            </div>
            <div>
            <div style={{color:'red'}}>Technology</div>
            </div>
            <div>
                <Link to='/Hollywood' style={{ textDecoration: 'none', color:'black'}}>Hollywood</Link>
            </div>
            <div>
                <Link to='/Fitness' style={{ textDecoration: 'none', color:'black'}}>Fitness</Link>
            </div>
            <div>
                <Link to='/Food' style={{ textDecoration: 'none', color:'black'}}>Food</Link>
            </div>
        </div> <br/>
        <hr className="hr1"/> <br /> <br />

<div className="containerBollywood">

    <div>
        <h2 className="bollywoodhead">Technology<hr style={{height:'2px', backgroundColor:'red', width:'150px'}} /></h2>

<br />
       <div className="bollywoodflex">
        {
                TechData.map((itemtech,indextech)=>{
                    return(
                        <Link to="/Techie" style={{textDecoration:'none', color:'black'}}>
                        <TechFiles 
                        headerT={itemtech.headerT}
                        descriptionT = {itemtech.descriptionT}
                        imgurlT={itemtech.backgroundT}
                        />
                        </Link>
                    )
                })
            }

        </div>

    </div>

    <div className="Bollywoodtoposts">
        <h2 className="bwtopposthead">Top Posts <hr style={{width:'150px', height:'2px',backgroundColor:'red'}} /> </h2>
<br />
    <div>

        <Link to='/Techie'><img className="abimg" src="images/artificialintelligence.jpg" alt="" /></Link>
        <div className="bw123">
        <div><h2 className="bwtphead">Catch waves with an adventure guide</h2>
        <p className="bwtpara">Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.</p></div>
        <span className="one">1</span>
        </div>
    </div> <br />
    <hr />

    <div>
    {
                TechnologTp.map((itemttp,indexttp)=>{
                    return(
                        <>
                        <Link to="/Techie" style={{textDecoration:'none', color:'black'}}>
                        <TechnologyToppost 
                        headerTtp={itemttp.headerTtp}
                        descriptionTtp = {itemttp.descriptionTtp}
                        imgurlTtp={itemttp.backgroundTtp}
                        numberT={itemttp.numberT}
                        />
                        </Link>
                        <hr />
                        </>
                    )
                })
            }
    </div>

    <div className="advertbw">advertisement</div>

    </div>

</div>


        </div>
    )
}

export default Tech