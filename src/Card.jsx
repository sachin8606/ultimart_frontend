import React from 'react';

import {Link} from 'react-router-dom';
const Card = (props) =>{

  // const productClick =(pid)=>{

  //   console.log(pid);
  // }
 

    return(
        <>
        
        {/* <div className="card mb-2" style={{maxHeight:"auto"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Image} alt="..." style={{width:"100%",padding:"28px"}}/>
      </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ultimart Brand - Solimo Mobile Cover for Samsung Galaxy M02s (Soft & Shockproof Back Case with inbuilt Cushioned Edges), Transparent</h5>
                <p className="card-text"><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span></p>
                <p className="card-text"> &#8377;<span style={{fontSize:"x-large"}}>149</span><span>&nbsp;&nbsp;Save  &#8377;250(63%)</span></p>
                <small className="text">Get it by<span style={{fontWeight:"700"}}> Tomorrow,</span></small>
                <p className="card-text" style={{fontWeight:"700"}}>January 29</p>
                <small>FREE Delivery over ₹499. Fulfilled</small>
                <p>by Ultimart.</p>
              </div>
            </div>
          </div>
        </div> */}


<div className="card mb-2" style={{maxHeight:"auto"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.pic} alt="..." style={{width:"100%",padding:"28px",height:"350px"}}/>
      </div>
            <div className="col-md-8">
              <div className="card-body">
                <Link to = {{
                  pathname: "/AboutProduct",
                  state: (props.fun),
                  pic:(props.cover)
                  }}><h5 className="card-title">{props.name}</h5></Link>
                <p className="card-text"><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span></p>
                <p className="card-text"> &#8377;<span style={{fontSize:"x-large"}}>{props.price}</span><span>&nbsp;&nbsp;Save  &#8377;250(63%)</span></p>
                <small className="text">Get it by<span style={{fontWeight:"700"}}> Tomorrow,</span></small>
                <p className="card-text" style={{fontWeight:"700"}}>January 29</p>
                <small>FREE Delivery over ₹499. Fulfilled</small>
                <p>by Ultimart.</p>
              </div>
            </div>
          </div>
        </div>
   
        </>
    )
}
export default Card;