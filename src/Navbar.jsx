import React from 'react';
// import {useHistory} from 'react-router-dom';
import logo from './logo.png';
import flag from './flag.png';
import axios from 'axios';
const Navbar = () => {

    const signIn =()=>{
        // axios.post('http://localhost:5000/members/sign-in', studentObject)
        axios.get('http://localhost:5000/sign')
        .then((res) => {
        
            console.log(res.data)
        });
        }

        const toCart = ()=>{
            var isuserLogged = sessionStorage.getItem('user');
            if(isuserLogged){
            window.location.assign("/CartUser");
            }
            else{
                alert("Kindly sign in first");
            }
    }

    return (
        <>
            <div id="containNav">
                <div id="navLogo">
                    <img src={logo} alt="logo" style={{ width: "100%", height: "100%" }} />
                </div>
                <div id="navAddress">
                    <a href="/" class="navAddressLink">
                    <i class="fa fa-map-marker" aria-hidden="true"></i><br />
                    <span style={{fontWeight:"bold",fontSize:"13px"}}>Select your location</span>
                    </a>
                </div>
                <div id="navSearch">
                    <select name="Mobiles">
                        <option>Mobiles & Accesories</option>
                        <option>Delhi</option>
                        <option>Delhi</option>
                        <option>Delhi</option>
                        <option>Delhi</option>
                        <option>Delhi</option>
                        <option>Delhi</option>
                        <option>Delhi</option>
                        <option>Delhi</option>
                    </select>
                    <input type="text" placeholder="Search something..." id="navSearchbar" />
                    <button id="navSearchBtn"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
               
                <div id="navSignin">
                    <a href="/UserLog" class="navAddressLink">
                        <span style={{fontSize:"13px"}}>Sign in</span><br/>
                        <span style={{fontSize:"16px",fontWeight:"bold"}}>Account</span>
                    </a>
                </div>
                
                <div id="navReturn">
                    <a href="/" class="navAddressLink">
                        <span style={{fontSize:"13px"}}>Return</span><br/>
                        <span style={{fontSize:"16px",fontWeight:"bold"}}>& Orders</span>
                    </a>
                </div>
                <div id="navCart">
                    <a onClick={toCart}>
                <i class="fa fa-cart-plus" aria-hidden="true" style={{fontSize:"49px",color:"white"}}></i>
                </a>
                </div>

                <div id="navFlag">
                    <a href="/" class="navAddressLink">
                <img src={flag} style={{width:"100%",height:"100%"}} alt="Country"></img>
                <span style={{fontSize:"17px",float:"right",fontWeight:"bold"}}>IN</span>
                </a>
                </div>

            </div>
        </>
    )
}
export default Navbar;