import React from 'react';
import cover from './cover.jpg';
const CartCard =(props) =>{
    return(
        <>
        <div class="cartCard">
        <div class="cartCardinner">
        <div className="card mb-2" style={{maxHeight:"auto",borderBottom:"solid",borderLeft:"none",borderRight:"none",borderTop:"none"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.pic} alt="..." style={{width:"100%",padding:"28px"}}/>
      </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <small>Sold by FOXIT</small><br/>
                <small className="text">Get it by<span style={{fontWeight:"700"}}> Tomorrow,</span></small>
                <p className="card-text" style={{fontWeight:"700"}}>January 29</p>
                <p> <i className="fa fa-truck" aria-hidden="true"></i> Ultimart Delivered.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div id="cartcardPrice">
        <span style={{fontSize:"x-large"}}>&#8377; {props.price}</span>
        </div>
        </div>
        </>
    )
}
export default CartCard;