import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Image from './cover.jpg';
import axios from 'axios';
const AboutProduct = (props) => {
    const [Name, setName] = useState();
    const [Price, setPrice] = useState();
    const [Availability, setAvailability] = useState();
    const [Color, setColor] = useState();
    const [user, setUser] = useState();
    const [img,setImg] = useState();
    useEffect(() => {
        window.scrollTo(0, 0);

        const loggedInUser = sessionStorage.getItem("user");
        if (loggedInUser) {
            //   const foundUser = JSON.parse(loggedInUser);
            setUser(loggedInUser);

        }
        // const ID = {
        //     productID: props.location.state
        // };
        // console.log("state" + props.location.state);
        axios.get('http://localhost:5000/members/AboutProduct', {
            params: {
                ID: props.location.state
                
            }
        })
            .then(res => {
                console.log(res)
                // setAvailability(res.data.results.availability);
                setColor(res.data.results.color);
                setName(res.data.results.productName);
                setPrice(res.data.results.productPrice);
                setImg(res.data.results.pic);
            });

    }, [])

    const cartAdd = () => {
        if (user) {
            console.log("signed in");
            axios.get('http://localhost:5000/members/AddtoCart', {
                params: {
                    user: sessionStorage.getItem('user'),
                    productID: props.location.state,
                    // cartID: sessionStorage.getItem('cartId')
                }
            })
                .then(res => {
                    alert("Added to cart");
                });
        }
        else {
            alert("Kindly Sign in to your account first");
        }
    }

    return (
        <>
            <Navbar />
            <div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "33%", height: "400px" }}>
                        <img src={img} style={{padding:"20px"}} />
                    </div>
                    <div style={{ width: "45%" }}>
                        <h3>{Name}</h3>
                        <span>Brand: UltimartBasics</span>
                        <p className="card-text"><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span></p>
                        <span style={{ textDecoration: "line-through" }}>M.R.P.: &#8377; 1,295.00 </span><br />
                        <span style={{ color: "red" }}>Price: &#8377; {Price}</span>
                        <p>Delivery by: <span style={{ fontWeight: "bold" }}>Wednesday, Feb 4</span></p>
                        <div style={{ display: "flex", justifyContent: "start" }}>
                            <div className="aboutProductCardContain">
                                <i className="fa fa-credit-card" aria-hidden="true"></i>
                                <p className="aboutProductp">Pay on Delivery</p>
                            </div>
                            <div className="aboutProductCardContain">
                                <i className="fa fa-repeat" aria-hidden="true"></i>
                                <p className="aboutProductp">10 Days Replacement Only</p>
                            </div>
                            <div className="aboutProductCardContain">
                                <i className="fa fa-truck" aria-hidden="true"></i>
                                <p className="aboutProductp">Ultimart Delivered</p>
                            </div>
                            <div className="aboutProductCardContain">
                                <i className="fa fa-shield" aria-hidden="true"></i>
                                <p className="aboutProductp">1 Year Warranty</p>
                            </div>
                        </div>

                        <h4 style={{ color: "red" }}>{Availability}.</h4>
                        <span>Sold by <span style={{ color: "blueviolet" }}>Cloudtail India</span> and <span style={{ color: "blueviolet" }}>Fulfilled by Ultimart.</span></span><br />
                        <span>Color: </span><span style={{ fontWeight: "bold" }}>{Color}</span><br /><br />
                        <ul className="aboutProductul">
                            <li className="aboutProductli">Samsung MFi certified charging and syncing cable for your Samsung devices</li>
                            <li className="aboutProductli">Samsung MFi certification ensures complete charge and sync compatibility with iPhone X / 8 Plus / 8 / 7 Plus / 7 / 6s Plus / 6s / 6 Plus / 6 / 5s / 5c / 5 / iPad Pro / iPad Air / Air 2 / iPad mini / mini 2 / mini 4 / iPad 4th gen / iPod Touch 5th gen / iPod nano 7th gen and Beats Pill+</li>
                            <li className="aboutProductli">Connects to your iPhone, iPad, or iPod with Lightning Connector and charges/syncs by connecting the USB connector into your wall charger or computer; small connector head fits most cases</li>
                            <li className="aboutProductli">High-quality copper wires promote maximum signal quality and strength</li>
                            <li className="aboutProductli">Durable nylon fiber cloth for protection, strength, and flexibility</li>
                            <li className="aboutProductli">An additional layer of protection has been added to the Lightning and USB ends to improve durability and reduce fraying; Cables have been tested to bend 95-degrees 4,000 times</li>
                            <li className="aboutProductli">For customer service and warranty related queries please contact_us: [1800-419-0416] (available Monday to Saturday from 9:30 AM to 6:00 PM except national holidays)</li>
                        </ul>
                        <div id="aboutProducttable">
                            <table style={{ width: "100%" }}>
                                <tbody>
                                    <tr>
                                        <th>Brand</th>
                                        <th>Ultimart</th>
                                        <th>Age</th>
                                    </tr>
                                    <tr>
                                        <td>Manufacturer</td>
                                        <td>Luxshare Precision Limited, Luxshare Precision Limited No.17 Kuiqing road, Qinghuang Industrial Zone,Qingxi Town, Dongguan City, Guangdong,China+86 13510109455</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>Model Name</td>
                                        <td>Nylon Braided</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>Model Year</td>
                                        <td>2017</td>
                                        <td>94</td>
                                    </tr>
                                    <tr>
                                        <td>Product Dimensions</td>
                                        <td>11 x 4.98 x 1.5 cm; 20.13 Grams</td>
                                        <td>94</td>
                                    </tr>
                                    <tr>
                                        <td>Item model number</td>
                                        <td>L6LMF009-CS-R</td>
                                        <td>94</td>
                                    </tr>
                                    <tr>
                                        <td>Compatible Devices</td>
                                        <td>Samsung</td>
                                        <td>94</td>
                                    </tr>
                                    <tr>
                                        <td>Material</td>
                                        <td>Nylon</td>
                                        <td>94</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Origin</td>
                                        <td>India</td>
                                        <td>94</td>
                                    </tr>
                                    <tr>
                                        <td>Item Weight</td>
                                        <td>20.17 g</td>
                                        <td>94</td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{ width: "20%" }}>
                        <div id="aboutProductcontainBuy">
                            <button onClick={cartAdd} class="aboutProductbtns"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart</button>
                            <br />
                            <br />
                            <button class="aboutProductbtns"> Buy Now</button>
                            <p><i class="fa fa-lock" aria-hidden="true"></i>  Secure Transaction</p>
                            <i class="fa fa-map-marker" aria-hidden="true"></i><input type="text" id="aboutProductinput" placeholder="Select delivery location" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </>
    )
}
export default AboutProduct;