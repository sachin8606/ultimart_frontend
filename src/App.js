import React, {useEffect, useState} from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Card from './Card';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';

const App = () => {

  const [data,setData] = useState();
  
  useEffect(()=>{
    window.scrollTo(0, 0);
    axios.get('http://localhost:5000/members/fetchProducts')
    .then(res => setData(res.data)
    )
  },[])

  return (
 <>
      <Navbar />
      <div style={{display:"inline-block"}}>
      <Sidebar />
      <div className="containCard">
      {data && data.results.map(item => {
        return  <Card 
        pic = {item.cover}
        fun = {item._id}
        name = {item.productName}
        price = {item.productPrice}
      />
       
      })}
      
      </div>
      </div>
      <Footer/>
    </>
  )
}


export default App;
