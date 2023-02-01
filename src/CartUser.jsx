import React,{useEffect,useState} from 'react';
import Navbar from'./Navbar';
import Footer from './Footer';
import CartCard from './Cartcard';
import axios from 'axios';
const CartUser = ()=>{

    const [data,setData] = useState();
    const[Total,setTotal] = useState();

    useEffect(()=>{
        window.scrollTo(0, 0);
        
        axios.get('http://localhost:5000/members/fetchCartUser', {
            params: {
                userID:sessionStorage.getItem('user')
            }
        })
            .then(res => {
                setTotal( res.data.total);
                console.log(res.data.result.products);
                setData(res.data.result);
            });
    },[])

    return(
        <>
        <Navbar />
        <div id="cartcardContain">
            <div id="innercardcartUser">
        <div id="cartAbout" style={{borderBottom:"solid",width:"58%"}}>
            <h3>Shopping Cart</h3>
        </div>
        
        {data && data.products.map(item => {
        return  <CartCard
        pic = {item.productPic}
        name = {item.productName}
        price = {item.productPrice}
      />
        })}
        </div>
        </div>
        <div id="cartUserTotal">
            <h3 style={{float:"left"}}>Total :</h3>
            <h3 style={{float:"right",color:"royalblue"}}>&#8377; {Total}</h3>
        </div>
        <Footer/>
        </>
    )
}
export default CartUser;