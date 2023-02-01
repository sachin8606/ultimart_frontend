import React from 'react';
import logo from './logo.png';

const Footer = ()=>{
    return(
        <>
        <div id="containFooter">
           
            <div id="footer2">
           <ul>
           <h4 class="containFooterh6">About Us</h4>
                <a class="navAddressLink" href="/"><li>Careers</li></a>
                <a class="navAddressLink" href="/"><li>Press Releases</li></a>
                <a class="navAddressLink" href="/"><li>Ultimart Cares</li></a>
                <a class="navAddressLink" href="/"><li>Gift a Smile</li></a>
            </ul>
            </div>
            <div id="footer3">
            
            <ul>
            <h4 class="containFooterh6">Connect with Us</h4>
                <a class="navAddressLink" href="/"><li>Facebook</li></a>
                <a class="navAddressLink" href="/"><li>Twitter</li></a>
                <a class="navAddressLink" href="/"><li>Instagram</li></a>
            </ul>
            </div>
            <div id="footer4">
           
            <ul>
            <h4 class="containFooterh6">Make Money with Us</h4>
                <a class="navAddressLink" href="/"><li>Sell on Ultimart</li></a>
                <a class="navAddressLink" href="/"><li>Sell under Ultimart Accelerator</li></a>
                <a class="navAddressLink" href="/"><li>Become an Affiliate</li></a>
                <a class="navAddressLink" href="/"><li>Fulfilment by Ultimart</li></a>
                <a class="navAddressLink" href="/"><li>Advertise Your Product</li></a>
                <a class="navAddressLink" href="/"><li>Ultimart Pay on Merchants</li></a>
                <a class="navAddressLink" href="/"><li>See More Make Money with Us.</li></a>
            </ul>
            </div>

            <div id="footer1">
           
            <ul>
            <h4 class="containFooterh6">Let Us Help You</h4>
                <a class="navAddressLink" href="/"><li>Your Account</li></a>
                <a class="navAddressLink" href="/"><li>Returns Centre</li></a>
                <a class="navAddressLink" href="/"><li>100% Purchase Protection</li></a>
                <a class="navAddressLink" href="/"><li>Ultimart App Download</li></a>
                <a class="navAddressLink" href="/"><li>Ultimart Assistant Download</li></a>
                <a class="navAddressLink" href="/"><li>Help</li></a>
            </ul>
            </div>
           
        </div>
        <div style={{backgroundColor:"black",padding:"20px"}}>
        <div style={{width:"65px",margin:"auto"}}>
            <img src={logo}/>
        </div>
        <p style={{color:"white",textAlign:"center"}}>© 1996-2021, Ultimart.com, Inc. or its affiliates</p>
        </div>
        </>
    )
}
export default Footer;