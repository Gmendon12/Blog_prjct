import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Latest } from "./MocKDate";
import { ImageWithTitle } from "./Latest";
import { Link } from "react-router-dom";
import {LatestArticlescontents} from "./latestarticles";
import { LatestArticles } from "./MocKDate";
import { TopPost } from "./topostimages";
import { Toppostimages } from "./MocKDate";
import { LatestStories } from "./lateststories";
import { lateststories } from "./MocKDate";
import { NavBar } from "../NavBar";
import NextPagecontext from "../NextPage/NextPagecontent";

const HomePage = () => {
    return(
        <div className="container">

        <div>
        <span className='the'>The </span>
        <span className='siren'>Siren</span>
      </div> <br />

      <NavBar/>
      
        <br />
        <hr className="hr1"/> <br /> <br /> <br />


        {/* Header Images */}

        <div className="img1">
            <div className="parent"> <Link to='/Heading'>
            <span className="imgtext1">Title of Vertical Gallery<p className="imgpara" style={{color:'#FCFCFC'}}>Travel / September 25, 2022</p></span> </Link> 
            <img className="cheetah" src="images/cheetah.jpg" alt="not available" height={"449px"} width={"736px"}/> 
            </div>

            <div className="img2">
            <div className="parent2">  <Link to='/Heading2'><span className="imgtext2"
            headingnp = "Heading2"
            image1 = 'images/lion.jpg'
            image2 = 'images/lion/jpg'
            >Heading 2 </span> </Link> 
            <img className="lion" src="images/lion.jpg" alt="NA" height={"220px"} width={"363px"}/></div>
                
            <div className="parent3"> <Link to='/Heading3'><span className="imgtext3">Heading 3 </span> </Link> 
            <img className="rocks" src="images/rocks.jpg" alt="NA" height={"220px"} width={"363px"} /> </div>
            </div>
        </div> <br />

        {/* The Latest */}

    

<div style={{display:'flex',flexDirection:'column'}}>
<h2 className="latestt" >Latest <hr style={{width:"100px", height:'2px', backgroundColor:'red'}} /></h2>
<Link to='/H4' style={{color:'black'}}>
<div  className="latestcontents">

            {
                Latest.map((item,index)=>{
                    return(
                        <ImageWithTitle 
                        header={item.header}
                        description = {item.description}
                        imgurl={item.background}
                        />
                       
                    )
                })
            }
</div>
</Link>
</div>


{/* Latest Articles */}


 <div className="latestarticlescontents">

<h2>Latest Articles<hr style={{width:"200px", height:'2px', backgroundColor:'red'}}/></h2>
<br />
<div className="laadvert">
    
 <div className="laflex">
{
    LatestArticles.map((item2,index2)=>{
        return(
            <Link to='/H5' style={{textDecoration:'none', color:'black'}}>
            <LatestArticlescontents 
            header2={item2.header2}
            description2={item2.description2}
            imgurl2={item2.background2}
            />
            </Link>
        )
    })
}</div>


<div className="advert">Advertisement</div>
</div>
</div>

<div className="toppostcontents">
    <div>
    <Link to='VerticalImage'> <img className="verticalimage" src="images/verticalimage.jpg" alt="" /> </Link>
        <span className="imgtext1">Title of Vertical Gallery
        <p className="imgpara" style={{color:'#FCFCFC'}}>Travel / September 25, 2022</p>
        </span>
    </div>
    <div className="topposthead">
    <h2>
        Top Posts <hr style={{width:"100px", height:'2px', backgroundColor:'red'}}/>
    </h2>
    <br />
    <div>
        <Link to="TopPost"><img className="toppostimg" src="images/topostimg.jpg" alt="" /></Link>
        <div className="topostmedia" style={{display:"flex", flexDirection:'row', justifyContent: "space-between"}}>
        <div><h2 className="toposth2">Catch waves with an adventure guide</h2> <br />
        <p className="topostpara">Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.</p></div>
        <span className="num">1</span>
        </div>


        <hr className="tpline" />
        <div>
            {
                Toppostimages.map((item3,index3)=>{
                    return(
                        <Link to='TopPosts' style={{textDecoration: 'none', color:'black'}} >
                        <TopPost
                        header3={item3.header3}
                        description3 = {item3.description3}
                        imgurl3={item3.background3}
                        numbertp={item3.numbertp}
                        />
                        </Link>
                    )
                })
            }
        </div>
    </div>
    </div>
</div>


<div className="lateststories">
        <h2>Latest Stories <hr style={{width:"180px", height:'2px', backgroundColor:'red'}}/></h2>
    </div>
    <br />
    <hr />
    <br />

    <div className="lateststoriescontent">
            {
                lateststories.map((item4,index4)=>{
                    return(
                        <>

                        
                        <LatestStories
                        header4={item4.header4}
                        description4 = {item4.description4}
                        />

                        <hr className="lsline" />
                    
                        </>
                    )
                })
            }
        
            </div>
            <hr className="lsline2"/>
        
     
</div>
    )
}

export default HomePage