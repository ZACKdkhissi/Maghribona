import { useState } from "react";
import { Link } from "react-router-dom";
//import "./register.scss";
import axios from "axios";
 import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {  TextField } from "@mui/material";
import Card from '@mui/material/Card';


const AddHotel = () => {
     
    
       const [inputs, setInputs] = useState({
        name: "",
        type: "",
        city: "",
        address: "",
        distance: "",
        title: "",
        desc: "",
        rating: 0,
        cheapestPrice: 0, // default value as a number
      });

      const [err, setErr] = useState(null);
    
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post("http://localhost:8800/api/hotels", inputs);
        } catch (err) {
            console.log(err);
          setErr(err.response.data);
        }
      };
    

    return(
<div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />   
        <Card className="A">
        {/* <div className="B">
            <div className="C">
                <label></label>
                <TextField type="text"
                    placeholder="name"
                    name="name"
                    onChange={handleChange}  />
            
                <label className="C"></label>
                <TextField  type="text"
              placeholder="type"
              name="type"
              onChange={handleChange} />
            </div><br/><br/>

            <div className="C">
                <label></label>
                <TextField    type="text"
              placeholder="city"
              name="city"
              onChange={handleChange}
               />
           
                <label className="C"></label>
                <TextField  type="text"
              placeholder="address"
              name="address"
              onChange={handleChange} />
            </div><br/><br/>
            <div className="C">
                <label></label>
                <TextField  type="text"
              placeholder="distance"
              name="distance"
              onChange={handleChange}  />
           
                <label className="C"></label>
                <TextField  type="text"
              placeholder="title"
              name="title"
              onChange={handleChange} />
            </div><br/><br/>
            <div className="C">
                <label></label>
                <TextField  className="formInput"
              type="text"
              placeholder="desc"
              name="desc" />
           
                <label className="C"></label>
                <TextField  
              type="number"
              placeholder="rating"
              name="rating" 
              onChange={handleChange} />
            </div><br/><br/>
            <div className="C">
                <label></label>
                <TextField type="number"
              placeholder="cheapestPrice"
              name="cheapestPrice"
              onChange={handleChange}  />

            <button className="CB"  onClick={handleClick}>Ajouter</button>
            </div> */}
            <div className="B">
                <h1>AJOUTER UN HOTEL</h1>
            <TextField
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
              className="formInput"
            />
            <TextField
              type="text"
              placeholder="type"
              name="type"
              onChange={handleChange}
              className="formInput"

            />
            <TextField
              type="text"
              placeholder="city"
              name="city"
              onChange={handleChange}
              className="formInput"
            />

            <br/><br/>
            <TextField
              type="text"
              placeholder="address"
              name="address"
              onChange={handleChange}
              className="formInput"
            />
            <TextField
              type="text"
              placeholder="distance"
              name="distance"
              onChange={handleChange}
              className="formInput"
            />
           

           <TextField
              type="text"
              placeholder="title"
              name="title"
              onChange={handleChange}
              className="formInput"
            />
            <br/><br/>
           
            <TextField
             className="formInput"
              type="text"
              placeholder="desc"
              name="desc"
              onChange={handleChange}
            />
              <TextField
             className="formInput"
              type="number"
              placeholder="rating"
              name="rating"
              onChange={handleChange}
            />
            <TextField
             className="formInput"
              type="number"
              placeholder="cheapestPrice"
              name="cheapestPrice"
              onChange={handleChange}
            />
            <button className="CB"  onClick={handleClick}>Ajouter</button>
            </div>
        
        {/* </div> */}
        </Card>
        <div>
        

        

       
        </div>
      </div>  
      </div>  

         );

}
export default AddHotel;
